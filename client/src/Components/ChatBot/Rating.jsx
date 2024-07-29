import React from "react";

function Rating({ value, onChange }) {
  const handleClick = (index) => {
    const newRating = index + 1;
    onChange(newRating); // Update the rating value when a circle is clicked
  };

  // Inline styles for the Rating component
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px', // Space between circles
    width:"100%",
    color:"white"
    
  };

  const circleStyle = (isActive) => ({
    width: '1.4rem', 
    height: '1.4rem', // Diameter of the circle
    borderRadius: '50%', // Makes it a circle
    backgroundColor: isActive ? '#FF8E21' : '#1A5FFF', // Gold for the active circle, blue for others
    cursor: 'pointer', // Pointer cursor on hover
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s', // Smooth color transition
  });

  return (
    <div style={containerStyle}>
      {[1, 2, 3, 4, 5].map((rating, index) => (
        <div
          key={index}
          style={circleStyle(value === rating)}
          onClick={() => handleClick(index)}
        >{rating}</div>
      ))}
    </div>
  );
}

export default Rating;
