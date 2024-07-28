import React, { useState } from "react";
import styles from "./SideBar.module.css";
import { PiChatText } from "react-icons/pi";
import { IoImageOutline } from "react-icons/io5";
import { PiVideoLight } from "react-icons/pi";
import { MdOutlineGif } from "react-icons/md";
import { RxText } from "react-icons/rx";
import { BsCalendarDate } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { AiOutlineNumber } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
function SideBar({
  elements,
  setElements,
  setBubbleCounts,
  setInputCounts,
  bubbleCounts,
  inputCounts,
}) {
  const handleAddBubble = (type) => {
    const newCount = bubbleCounts[type] + 1;
    setBubbleCounts((prevCounts) => ({ ...prevCounts, [type]: newCount }));
    setElements((prevElements) => [
      ...prevElements,
      { elementType: "bubble", type, name: `${type} ${newCount}` },
    ]);
  };

  const handleAddInput = (type) => {
    const newCount = inputCounts[type] + 1;
    setInputCounts((prevCounts) => ({ ...prevCounts, [type]: newCount }));

    setElements((prevElements) => [
      ...prevElements,
      { elementType: "input", type, name: `Input ${type} ${newCount}` },
    ]);
  };

  const handleSubmit = () => {
    console.log(elements);
  };

  return (
    <div>
      <div className={styles.container}>
        <div>
          <div style={{ color: "white" }}>
            <h2>Bubbles</h2>

            <div style={{ display: "flex" }}>
              <button
                className={styles.buttons}
                onClick={() => handleAddBubble("text")}
              >
                <PiChatText style={{ fontSize: "1.2rem", color: "#1A5FFF" }} />
                Text
              </button>

              <button
                className={styles.buttons}
                onClick={() => handleAddBubble("image")}
              >
                <IoImageOutline style={{ fontSize: "1.2rem", color: "#1A5FFF" }} />
                Image
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <button
                className={styles.buttons}
                onClick={() => handleAddBubble("video")}
              >
                <PiVideoLight style={{ fontSize: "1.2rem", color: "#1A5FFF" }} />
                Video
              </button>

              <button
                className={styles.buttons}
                onClick={() => handleAddBubble("gif")}
              >
                <MdOutlineGif style={{ fontSize: "2rem", color: "#1A5FFF" }} />
                GIF
              </button>
            </div>
          </div>

          <div style={{ color: "white" }}>
            <h2>Inputs</h2>
            <div style={{ display: "flex" }}>
              <button
                className={styles.buttons}
                onClick={() => handleAddInput("text")}
              >
                <RxText style={{ color: "#FFA54C",fontSize:"1.2rem" }} />
                Text
              </button>
              <button
                className={styles.buttons}
                onClick={() => handleAddInput("date")}
              >
              <BsCalendarDate style={{ color: "#FFA54C",fontSize:"1.2rem" }} />
                Date
              </button>
            </div>

            <div style={{ display: "flex" }}>
              <button
                className={styles.buttons}
                onClick={() => handleAddInput("email")}
              >
              <MdAlternateEmail style={{ color: "#FFA54C",fontSize:"1.2rem" }}/>
                Email
              </button>
              <button
                className={styles.buttons}
                onClick={() => handleAddInput("phone")}
              >
              <MdOutlinePhone style={{ color: "#FFA54C",fontSize:"1.2rem" }} />
                Phone
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <button
                className={styles.buttons}
                onClick={() => handleAddInput("number")}
              >
              <AiOutlineNumber style={{ color: "#FFA54C",fontSize:"1.2rem" }} />

                Number
              </button>
              <button
                className={styles.buttons}
                onClick={() => handleAddInput("rating")}
              >
              <FaRegStar style={{ color: "#FFA54C",fontSize:"1.2rem" }} />

                Rating
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <button
                className={styles.buttons}
                onClick={() => handleAddInput("button")}
              >
              <IoMdCheckboxOutline style={{ color: "#FFA54C",fontSize:"1.2rem" }} />
                Buttons
              </button>
              <button className={styles.buttons} onClick={handleSubmit}>
                display
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
