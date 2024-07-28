import React, { useState, useEffect } from "react";

import FolderNameModal from "./FolderNameModel";
import { createFolder, deleteFolder, getFolder } from "../../api/folderApi";
import { useNavigate } from "react-router-dom";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteFolderModel from "./DeleteFolderModel";

function CreateFolder() {
  const token = localStorage.getItem("token");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folders, setFolders] = useState([]);
  const [Dfolder, setDfolder] = useState(false);
  useEffect(() => {
    fetchFolders();
  }, []);

  const navigate = useNavigate();

  const fetchFolders = async () => {
    try {
      const response = await getFolder(token);

      setFolders(response);
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };
  const OpenFolderModel = () => {
    setDfolder(true);
  };

  const CloseFolderModel = () => {
    setDfolder(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveFolderName = async (folderName) => {
    try {
      await createFolder({ name: folderName }, token);
      fetchFolders();
      closeModal();
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  const handelDelete = async (id) => {
    try {
      const response = await deleteFolder(id, token);

      fetchFolders();
      CloseFolderModel();
    } catch (error) {
      console.error("Error deleting folder:", error);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "50px 100px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            borderRadius: "5px",
            background: "#2e2e34",
            color: "white",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            gap: "3px",
            cursor: "pointer",
          }}
          onClick={openModal}
        >
          <MdOutlineCreateNewFolder style={{ fontSize: "1.5rem" }} />
          <span style={{ fontSize: "1rem" }}>Create a folder</span>
        </div>
        <FolderNameModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={saveFolderName}
        />
        {folders &&
          folders.map((folder) => (
            <div key={folder._id}>
              <div
                style={{
                  borderRadius: "5px",
                  background: "#2e2e34",
                  padding: "10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "50px",

                  width: "180px",
                }}
              >
                <div
                  style={{
                    color: "white",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",

                    width: "150px",
                  }}
                  onClick={() => navigate(`/folder/${folder._id}`)}
                >
                  {folder.name}
                </div>
                <RiDeleteBin6Line
                  style={{ color: "red", fontSize: "1.5rem" }}
                  onClick={OpenFolderModel}
                />
              </div>
              <DeleteFolderModel
                isOpen={Dfolder}
                onClose={CloseFolderModel}
                onDelete={() => handelDelete(folder._id)}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CreateFolder;
