import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFormNotInFolder } from "../../api/formApi";
import CreateFolder from "./CreateFolder";
import { deleteForm } from "../../api/formApi";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteFormModel from "./DeleteFormModel";

function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    fetchForm();
  }, []);
  const [forms, setForms] = useState([]);

  const fetchForm = async () => {
    try {
      const response = await getFormNotInFolder(token);

      setForms(response);
    } catch (error) {
      console.log(error);
    }
  };

  const OpenFolderModel = () => {
    setIsModalOpen(true);
  };

  const CloseFolderModel = () => {
    setIsModalOpen(false);
  };

  const handelDelete = async (id) => {
    try {
      const response = await deleteForm(id, token);
      console.log(response);
      fetchForm();

      CloseFolderModel();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={{ background: "#18181B", height: "100vh",overflow:"auto" }}>
        <CreateFolder />
        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "1px 100px",
            color: "white",
          }}
        >
          <div
            onClick={() => navigate("/create")}
            style={{
              height: "200px",
              width: "150px",
              background: "#1A5FFF",
              color: "white",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              gap: "20px",
            }}
          >
            <FaPlus style={{ fontSize: "1.5rem" }} />
            <p style={{ fontSize: "1rem" }}>Create a typeBot</p>
          </div>
          {forms.map((form) => (
            <div key={form._id}>
              <div
                style={{
                  background: "#52525c",
                  borderRadius: "5px",

                  cursor: "pointer",
                  gap: "20px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    height: "200px",
                    width: "150px",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => navigate(`/update/${form._id}`)}
                >
                  {form.title}
                </div>
                <RiDeleteBin6Line
                  style={{
                    color: "red",
                    fontSize: "1.2rem",
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                  }}
                  onClick={OpenFolderModel}
                />
              </div>
              <DeleteFormModel
                isOpen={isModalOpen}
                onClose={CloseFolderModel}
                onDelete={() => handelDelete(form._id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;

// </div>
