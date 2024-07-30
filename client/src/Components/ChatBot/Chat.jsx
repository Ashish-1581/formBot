import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleForm } from "../../api/formApi";
import ReactPlayer from "react-player";
import Rating from "./Rating";
import styles from "./Chat.module.css";
import { AiOutlineSend } from "react-icons/ai";
import { toast } from "react-toastify";

function Chat({ data, setData, setInputFieldCount }) {
  const { id } = useParams();

  const [elements, setElements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [canLoadNext, setCanLoadNext] = useState(true);
  const [errors, setErrors] = useState({});
  const [sentInputs, setSentInputs] = useState(new Set()); 
  const [clickedButtonIndex, setClickedButtonIndex] = useState(null); 





  useEffect(() => {
    const fetch = async () => {
      const response = await getSingleForm(id);

      setElements(response.elements);

      setFormData(
        response.elements.reduce((acc, el, idx) => {
          if (el.elementType === "input" || el.type === "button") {
            acc[idx] = el.type === "button" ? el.content : "";
          }
          return acc;
        }, {})
      );
      const count = response.elements.filter(
        (el) => el.elementType === "input" || el.type === "button"
      ).length;

      setInputFieldCount(count);
    };
    fetch();
  }, [id, setInputFieldCount]);

  useEffect(() => {
    if (currentIndex < elements.length) {
      const currentElement = elements[currentIndex];

      if (currentElement.elementType === "input") {
        setCanLoadNext(false);
      } else {
        const timer = setTimeout(() => {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [currentIndex, elements, canLoadNext]);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      console.log("Data:", data);
    }
  }, [data]);

  const handleButtonClick = (index, value) => {
    setFormData((prevData) => ({ ...prevData, [index]: value }));
    handleSubmit();
    setClickedButtonIndex(index); 
  };

  const handleInputChange = (index, value) => {
    setFormData((prevData) => ({ ...prevData, [index]: value }));
  };

  const validateCurrentInput = () => {
    const currentElement = elements[currentIndex];
    let isValid = true;
    let errorMessage = "";

    if (currentElement.elementType === "input") {
      const value = formData[currentIndex] || "";

      if (currentElement.type === "text" && !value.trim()) {
        errorMessage = "Text input cannot be empty.";
        isValid = false;
      }
      if (currentElement.type === "email" && !/\S+@\S+\.\S+/.test(value)) {
        errorMessage = "Please enter a valid email address.";
        isValid = false;
      }
      if (currentElement.type === "number" && isNaN(value)) {
        errorMessage = "Please enter a valid number.";
        isValid = false;
      }
      if (currentElement.type === "rating" && (value < 1 || value > 5)) {
        errorMessage = "Rating must be between 1 and 5.";
        isValid = false;
      }
      if (currentElement.type === "date" && !Date.parse(value)) {
        errorMessage = "Please enter a valid date.";
        isValid = false;
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [currentIndex]: errorMessage,
    }));
    return isValid;
  };

  const handleSubmit = () => {
    if (validateCurrentInput()) {
      const key = elements[currentIndex].name;
      const value = formData[currentIndex];

      console.log("Current Index:", currentIndex);
      console.log("Key:", key);
      console.log("Value:", value);

      setData((prevData) => {
        console.log("Previous Data:", prevData);
        const newData = { ...prevData, [key]: value };
        console.log("New Data:", newData);
        return newData;
      });

      setErrors((prevErrors) => ({ ...prevErrors, [currentIndex]: "" }));
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setCanLoadNext(true);
      setSentInputs((prevSentInputs) => new Set(prevSentInputs).add(currentIndex));
    }
  };

  return (
    <div  className={styles.chatContainer}>
      {elements.slice(0, currentIndex + 1).map((element, index) => (
        <div key={index} className={styles.itemContainer}>
          {element.elementType === "bubble" && (
            <div className={styles.bubble}>
              {element.type === "text" && <p>{element.content}</p>}
              {element.type === "image" && (
                <img src={element.content} alt="bubble content" />
              )}
              {element.type === "video" && (
                <ReactPlayer url={element.content} controls={true} />
              )}
              {element.type === "gif" && (
                <img src={element.content} alt="bubble content" />
              )}
            </div>
          )}
          {element.elementType === "input" && (
            <div
              style={{ display: "flex", gap: "10px" }}
              className={`${styles.inputContainer}
                 ${sentInputs.has(index) ? styles.sent : ""
              }`
            }
            >
              {element.type === "text" && (
                <input
          
                  disabled={sentInputs.has(index)}
                  type="text"
                  value={formData[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder="Enter your text"
                />
              )}
              {element.type === "date" && (
                <input
                
                  disabled={sentInputs.has(index)}
                  type="date"
                  value={formData[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              )}
              {element.type === "email" && (
                <input
                
                  disabled={sentInputs.has(index)}
                  type="email"
                  value={formData[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder="Enter email"
                />
              )}
              {element.type === "number" && (
                <input
                 
                  disabled={sentInputs.has(index)}
                  type="number"
                  value={formData[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder="Enter number"
                />
              )}
              {element.type === "phone" && (
                <input
                 
                  disabled={sentInputs.has(index)}
                  type="tel"
                  value={formData[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder="Enter Phone number"
                />
              )}
              {element.type === "button" && (
                <button
                  disabled={sentInputs.has(index)}
                  type="button"
                  onClick={() => handleButtonClick(index, element.content)}
                  className={`${styles.inputButton} ${ clickedButtonIndex === index ? styles.clicked : ""}`}
                >
                  {element.content}
                </button>
              )}
              {element.type === "rating" && (
                <div className={ `${
                  sentInputs.has(index) ? styles.clicked : ""
                }`}>
                <div className={styles.rating}>
                <Rating

                  disabled={sentInputs.has(index)}
                  value={formData[index] || 0}
                  onChange={(value) => handleInputChange(index, value)}
                />
                </div>
                </div>
              )}
             
              {element.type !== "button" && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={`${styles.sendButton} ${
                    sentInputs.has(index) ? styles.clicked : ""
                  }`}
                >
                  <AiOutlineSend style={{ fontSize: "1.5rem" }} />
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Chat;
