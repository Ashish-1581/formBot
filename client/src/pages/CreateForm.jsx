import React, { useState } from "react";
import SideBar from "../Components/CreateForm/SideBar";
import Display from "../Components/CreateForm/Display";

function CreateForm() {
  const [elements, setElements] = useState([]);
  const [bubbleCounts, setBubbleCounts] = useState({
    text: 0,
    image: 0,
    video: 0,
    gif: 0,
  });

  const [inputCounts, setInputCounts] = useState({
    text: 0,
    date: 0,
    email: 0,
    phone: 0,
    number: 0,
    rating: 0,
    button: 0,
  });
  return (
    <div>
    <div style={{height:"100vh"}}>
    
    <SideBar
      elements={elements}
      setElements={setElements}
      bubbleCounts={bubbleCounts}
      setBubbleCounts={setBubbleCounts}
      inputCounts={inputCounts}
      setInputCounts={setInputCounts}
    
    />

    <Display
      elements={elements}
      setElements={setElements}
      bubbleCounts={bubbleCounts}
      inputCounts={inputCounts}
    />
    </div>
    </div>
  );
}

export default CreateForm;
