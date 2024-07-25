import React, { useState, useEffect } from 'react';

import FolderNameModal from './FolderNameModel' 
import { createFolder, deleteFolder, getFolder } from '../../api/folderApi'; 
import { useNavigate } from 'react-router-dom';

function CreateFolder() {

  const token=localStorage.getItem('token');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folders, setFolders] = useState([]);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveFolderName = async (folderName) => {
    try {
        
      await createFolder({ name: folderName },token); 
      fetchFolders();
      closeModal();
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  const handelDelete = async (id) => {
    try {
      const response = await deleteFolder(id,token);
    
      fetchFolders();
    } catch (error) {
      console.error("Error deleting folder:", error);
    }
  }

  return (
    <div style={{display:"flex" , gap:"20px"}}>
      <button onClick={openModal}>Create Folder</button>
      <FolderNameModal isOpen={isModalOpen} onClose={closeModal} onSave={saveFolderName} />
      {folders&&folders.map((folder) => (
          <div key={folder._id}>
            <button onClick={()=>navigate(`/folder/${folder._id}`)}>{folder.name}</button>
            <button onClick={()=>handelDelete(folder._id)}>❌</button>
          </div>
        ))
        }
      
      </div>
    );
  }
  
  export default CreateFolder;
