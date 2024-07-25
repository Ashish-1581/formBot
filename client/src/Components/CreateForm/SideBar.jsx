import React, { useState } from "react";


function SideBar({ elements, setElements, setBubbleCounts, setInputCounts ,bubbleCounts,inputCounts}) {


  const handleAddBubble = (type) => {
    const newCount = bubbleCounts[type] + 1;
    setBubbleCounts((prevCounts) => ({ ...prevCounts, [type]: newCount }));
    setElements((prevElements) => [
      ...prevElements,
      { elementType: "bubble", type,name: `${type} ${newCount}` },
    ]);
  };

  const handleAddInput = (type) => {
    const newCount = inputCounts[type] + 1;
    setInputCounts((prevCounts) => ({ ...prevCounts, [type]: newCount }));
   
    setElements((prevElements) => [
      ...prevElements,
      { elementType: "input", type,name: `Input ${type} ${newCount}` },
    ]);
  };

  const handleSubmit = () => {
    console.log(elements);
    
  };

  return (
    <div className="bubble-inputs-container">
      <h2>Bubbles</h2>
      <button onClick={() => handleAddBubble("text")}>Text</button>
      <button onClick={() => handleAddBubble("image")}>Image</button>
      <button onClick={() => handleAddBubble("video")}>Video</button>
      <button onClick={() => handleAddBubble("gif")}>GIF</button>

      <h2>Add Input</h2>
      <button onClick={() => handleAddInput("text")}>Text</button>
      <button onClick={() => handleAddInput("date")}>Date Input</button>
      <button onClick={() => handleAddInput("email")}>Email</button>
      <button onClick={() => handleAddInput("phone")}>Phone</button>
      <button onClick={() => handleAddInput("number")}>Number</button>
      <button onClick={() => handleAddInput("rating")}>Rating</button>
      <button onClick={() => handleAddInput("button")}>Buttons</button>

      <button onClick={handleSubmit}>Go to Display</button>
    </div>
  );
}

export default SideBar;
