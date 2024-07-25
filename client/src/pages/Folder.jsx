import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFormByFolder } from "../api/formApi";
import { deleteForm } from "../api/formApi";

function Folder() {
  const { folderId } = useParams();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    fetchForm();
  }, []);
  const [forms, setForms] = useState([]);

  const fetchForm = async () => {
    try {
      const response = await getFormByFolder(folderId, token);

      setForms(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handelDelete = async (id) => {
    try {
      const response = await deleteForm(id, token);
      console.log(response);
      fetchForm();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      Folder
      <p>folderId:{folderId}</p>
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{ height: "100px", width: "80px", border: "1px solid black" }}
          onClick={() => navigate(`/create/${folderId}`)}
        >
          create Form
        </div>
      
      {forms.map((form) => (
        <div style={{ display: "flex" }} key={form._id}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              height: "100px",
              width: "80px",
              border: "1px solid black",
            }}
            onClick={() => navigate(`/update/${form._id}`)}
          >
            {form.title}
          </div>
          <button
            style={{ height: "20px" }}
            onClick={() => handelDelete(form._id)}
          >
            ❌
          </button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Folder;
