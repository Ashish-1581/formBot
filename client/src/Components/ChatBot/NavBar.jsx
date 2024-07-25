import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { setSubmissions } from '../../api/analyticsApi';

function NavBar({ formId, data, inputFieldCount }) {

  

  const dataRef = useRef(data);
  const [saved, setSaved] = useState(true);
  const navigate = useNavigate();
  



  useEffect(() => {
    if (JSON.stringify(dataRef.current) !== JSON.stringify(data)) {
      setSaved(false);
    }
    dataRef.current = data; // Update ref with the latest data


    
  }, [data]);

  const saveData = async (data) => {
    try {
      console.log('Saving data:', data);
      console.log('inputFieldCount:', inputFieldCount);
      console.log('formId:', formId);
      const response = await setSubmissions({formId, data, inputFieldCount});
      console.log('Data saved successfully with formId:', response.data.formId);
      setSaved(true);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleSave = () => {
    if (Object.keys(dataRef.current).length > 0) {
      console.log('Data to save:', dataRef.current);
      saveData(dataRef.current);
    }
  };

  const handleResponse = () => {
    if (saved) {
      navigate(`/analytics/${formId}`);
    } else {
      alert('Please save your changes before navigating.');
    }
  };



  return (
    <div>
      <button onClick={() => navigate("/create")}>X</button>
      <button onClick={handleResponse}>Response</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default NavBar;