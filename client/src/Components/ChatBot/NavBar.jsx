import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { setSubmissions } from "../../api/analyticsApi";
import { toast } from "react-toastify";

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
      console.log("Saving data:", data);
      console.log("inputFieldCount:", inputFieldCount);
      console.log("formId:", formId);
      const response = await setSubmissions({ formId, data, inputFieldCount });
      
      if (response.status === 201) {
        toast.success("Data saved successfully!");
        setSaved(true);
      }
      
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleSave = () => {
    if (Object.keys(dataRef.current).length > 0) {
      console.log("Data to save:", dataRef.current);
      saveData(dataRef.current);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        width: "100%",
       top: 0,
        zIndex: 1000,
        background:"#18171C",
        borderBottom:"1px solid #333",
        padding:"0.8% 0"


      }}
    >
      <button
        style={{
          outline: "none",
          color: "white",
          background: "#007bff",
          border: "none",
          padding: "1% 2%" ,
          borderRadius: "5px",
          fontSize: "18px",
        }}
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}

export default NavBar;
