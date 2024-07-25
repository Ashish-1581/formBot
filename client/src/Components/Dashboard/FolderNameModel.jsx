import React, { useState } from 'react';

const FolderNameModal = ({ isOpen, onClose, onSave }) => {
  const [folderName, setFolderName] = useState("");

  const handleSave = () => {
    if (folderName.trim()) {
      onSave(folderName);
      setFolderName("");
    }
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Create Folder</h2>
        <input
          type="text"
          placeholder="Enter folder name"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSave} style={styles.button}>Save</button>
        <button onClick={onClose} style={styles.button}>Cancel</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  input: {
    margin: '10px 0',
    padding: '8px',
    width: '80%',
  },
  button: {
    margin: '10px',
  }
};

export default FolderNameModal;