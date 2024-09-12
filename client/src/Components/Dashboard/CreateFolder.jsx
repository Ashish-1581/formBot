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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [folderToDelete, setFolderToDelete] = useState(null); // Track the folder to delete

  const navigate = useNavigate();

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {
      const response = await getFolder(token);
      setFolders(response);
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };

  const openFolderNameModal = () => {
    setIsModalOpen(true);
  };

  const closeFolderNameModal = () => {
    setIsModalOpen(false);
  };

  const saveFolderName = async (folderName) => {
    try {
      await createFolder({ name: folderName }, token);
      fetchFolders();
      closeFolderNameModal();
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  const openDeleteModal = (folderId) => {
    setFolderToDelete(folderId); // Set the folder ID to delete
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setFolderToDelete(null); // Reset after closing modal
  };

  const handleDelete = async () => {
    if (!folderToDelete) return;

    try {
      await deleteFolder(folderToDelete, token);
      fetchFolders(); // Fetch folders again after deletion
      closeDeleteModal(); // Close delete modal
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
        {/* Create folder button */}
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
          onClick={openFolderNameModal}
        >
          <MdOutlineCreateNewFolder style={{ fontSize: "1.5rem" }} />
          <span style={{ fontSize: "1rem" }}>Create a folder</span>
        </div>

        {/* Modal for creating a new folder */}
        <FolderNameModal
          isOpen={isModalOpen}
          onClose={closeFolderNameModal}
          onSave={saveFolderName}
        />

        {/* Display existing folders */}
        {folders.map((folder) => (
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
              {/* Navigate to folder on name click */}
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

              {/* Delete folder icon */}
              <RiDeleteBin6Line
                style={{ color: "red", fontSize: "1.5rem" }}
                onClick={() => openDeleteModal(folder._id)} // Open delete modal for specific folder
              />
            </div>
          </div>
        ))}

        {/* Delete folder confirmation modal */}
        <DeleteFolderModel
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default CreateFolder;