import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  updateForm } from '../../api/formApi';

function Display({ elements, setElements ,formId,title,setTitle,bubbleCounts,  inputCounts}) {

  const navigate = useNavigate();
const token=localStorage.getItem('token')
  // State for validation errors
  const [errors, setErrors] = useState({});
 

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
        newErrors[`bubble-${idx}`] = 'This field is required';
      }
      if (element.elementType === 'input' && element.type === 'button' && !buttonContent[idx]) {
        newErrors[`button-${idx}`] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateInputs()) {
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
    <div className="display-container">
      <h1>Display</h1>
      <div>
      <input value={title} type="text" placeholder="enter form title" onChange={(e)=>setTitle(e.target.value)}/> 
      </div>
      <div>Start</div>
      {elements.map((element, index) => (
        <div key={index} className={`item ${element.elementType}`}>
          {element.elementType === 'bubble' && (
            <div className="bubble">
              <input
                type="text"
                value={bubbleContent[index] || ''}
                onChange={(e) => handleBubbleContentChange(index, e.target.value)}
                placeholder={`click to add ${element.type}`}
              />
              <button onClick={() => handleDelete(index)}>Delete</button>
              {errors[`bubble-${index}`] && <span className="error">{errors[`bubble-${index}`]}</span>}
            </div>
          )}
          {element.elementType === 'input' && element.type === 'button' && (
            <div className="input">
              <input
                type="text"
                value={buttonContent[index] || ''}
                onChange={(e) => handleButtonContentChange(index, e.target.value)}
                placeholder={`Enter button content`}
              />
              <button onClick={() => handleDelete(index)}>Delete</button>
              {errors[`button-${index}`] && <span className="error">{errors[`button-${index}`]}</span>}
            </div>
          )}
          {element.elementType === 'input' && element.type !== 'button' && (
            <div className="input">
              <span>Hint: User will input a {element.type} on their form</span>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleSubmit}>Save</button>
      <button onClick={handleShare}>Share</button>
    </div>
  );
}

export default Display;