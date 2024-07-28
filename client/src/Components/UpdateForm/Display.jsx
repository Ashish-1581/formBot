import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  updateForm } from '../../api/formApi';
import styles from './Display.module.css';
import { RiFlag2Fill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

function Display({ elements, setElements ,formId,title,setTitle,bubbleCounts,  inputCounts}) {

  const navigate = useNavigate();
const token=localStorage.getItem('token')
  // State for validation errors
  const [errors, setErrors] = useState({});
  const [isButtonActive, setIsButtonActive] = useState(false);
 

  // Initialize bubbleContent and buttonContent states based on elements prop
  const [bubbleContent, setBubbleContent] = useState({});
  const [buttonContent, setButtonContent] = useState({});

  useEffect(() => {
    const initialBubbleContent = {};
    const initialButtonContent = {};

    elements.forEach((el, idx) => {
      if (el.elementType === 'bubble') {
        initialBubbleContent[idx] = el.content || '';
      }
      if (el.elementType === 'input' && el.type === 'button') {
        initialButtonContent[idx] = el.content || '';
      }
    });

    setBubbleContent(initialBubbleContent);
    setButtonContent(initialButtonContent);
  }, [elements]);

  const handleActivateButtonClick = () => {
    setIsButtonActive(true);
  };

  const handleDelete = (index) => {
    setElements(elements.filter((el, idx) => idx !== index));
  };

  const handleBubbleContentChange = (index, value) => {
    setBubbleContent(prevContent => ({ ...prevContent, [index]: value }));
  };

  const handleButtonContentChange = (index, value) => {
    setButtonContent(prevContent => ({ ...prevContent, [index]: value }));
  };

  const validateInputs = () => {
    const newErrors = {};
    elements.forEach((element, idx) => {
      if (element.elementType === 'bubble' && !bubbleContent[idx]) {
        newErrors[`bubble-${idx}`] = 'Required field';
      }
      if (element.elementType === 'input' && element.type === 'button' && !buttonContent[idx]) {
        newErrors[`button-${idx}`] = 'Required field';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateInputs()) {
      handleActivateButtonClick();
      const updatedElements = elements.map((el, idx) => {
        if (el.elementType === 'bubble') {
          return { ...el, content: bubbleContent[idx] };
        }
        if (el.elementType === 'input' && el.type === 'button') {
          return { ...el, content: buttonContent[idx] };
        }
        return el;
      });

      try {
        const response = await updateForm(
          formId,
          { title, elements: updatedElements,bubbleCounts,  inputCounts },
          token
        );
        if (response.status === 200) {
          setFormId(response.data._id);
          console.log('Form updated successfully');
        }
      } catch (error) {
        console.error("Error creating form:", error);
      }
    }
  };

  const handleShare = () => {
    if (validateInputs()) {
      let path=`${window.location.origin}/chatbot/${formId}`
      navigator.clipboard.writeText(path)
      .then(() => {
        alert('Link copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
      
      // navigate(`/chatbot/${formId}`);
    }
  };

  return (
    <div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#18181B",
        alignItems: "center",
        padding: "10px 40px",
        height: "50px",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "100",
      }}
    >
      <div>
        <input
          value={title}
          type="text"
          placeholder="enter form title"
          onChange={(e) => setTitle(e.target.value)}
          className={styles.text}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button className={styles.active}>Flow</button>
        <button onClick={()=>navigate(`/theme/${formId}`)} className={styles.button}>Theme</button>
        <button onClick={()=>navigate(`/analytics/${formId}`)} className={styles.button}>Response</button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button
          disabled={!isButtonActive}
          className={styles.share}
          style={{
            backgroundColor: isButtonActive ? "#1A5FFF" : "grey",
            color: "white",
            cursor: isButtonActive ? "pointer" : "not-allowed",
          }}
          onClick={handleShare}
        >
          Share
        </button>
        <button className={styles.save}  onClick={handleSubmit}>
          Save
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className={styles.cross}
        >
          ❌
        </button>
      </div>
    </div>

    <div
      style={{
        background: "#1F1F23",
        height: "100vh",
        display: "flex",
        overflow: "auto",

        flexDirection: "column",
        paddingTop: "100px",

        paddingLeft: "45%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px",paddingBottom:"50px" }}>
      

        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          className={styles.elements}
        >
          <RiFlag2Fill />
          Start
        </div>
        {elements.map((element, index) => (
          <div key={index} className={`${styles.elements}`}>
            {element.elementType === "bubble" && (
              <div style={{display:"flex",flexDirection:"column",gap:"10px",position:"relative"}}>
                <label>{element.name}</label>
                <input
                style={{ border: errors[`bubble-${index}`] ? "2px solid red" : "none" }}
                  className={styles.text}
                  type="text"
                  value={bubbleContent[index] || ""}
                  onChange={(e) =>
                    handleBubbleContentChange(index, e.target.value)
                  }
                  placeholder={`click to add ${element.type} content`}
                />
                <RiDeleteBin6Line style={{color:"red",cursor:"pointer",position:"absolute",top:"0px",right:"0px"}} onClick={() => handleDelete(index)} />

               
                {errors[`bubble-${index}`] && (
                  <span style={{color:"red",fontSize:"0.8rem"}} className="error">{errors[`bubble-${index}`]}</span>
                )}
              </div>
            )}
            {element.elementType === "input" && element.type === "button" && (
              <div  style={{display:"flex",flexDirection:"column",gap:"10px",position:"relative"}}>
                <label>{element.name}</label>
                <input
                style={{ border: errors[`bubble-${index}`] ? "2px solid red" : "none" }}
                className={styles.text}
                  type="text"
                  value={buttonContent[index] || ""}
                  onChange={(e) =>
                    handleButtonContentChange(index, e.target.value)
                  }
                  placeholder={`Enter button content`}
                />
                <RiDeleteBin6Line style={{color:"red",cursor:"pointer",position:"absolute",top:"0px",right:"0px"}} onClick={() => handleDelete(index)} />
                {errors[`button-${index}`] && (
                  <span style={{color:"red",fontSize:"0.8rem"}} className="error">{errors[`bubble-${index}`]}</span>
                )}
              </div>
            )}
            {element.elementType === "input" && element.type !== "button" && (
              <div style={{display:"flex",flexDirection:"column",gap:"10px",position:"relative"}}>
                <label>{element.name}</label>
                <div style={{fontSize:"0.8rem",color:"#555555"}}>
                  Hint : User will input a {element.type} on his form{" "}
                </div>
                <RiDeleteBin6Line style={{color:"red",cursor:"pointer",position:"absolute",top:"0px",right:"0px"}} onClick={() => handleDelete(index)} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Display;