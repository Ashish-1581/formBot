import React, { useState } from "react";
import { PiLineVerticalLight } from "react-icons/pi";
const DeleteFolderModel = ({ isOpen, onClose, onDelete }) => {
  const Delete = () => {
    onDelete();
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Are you sure you want to delete this Folder?</h3>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button onClick={Delete} style={styles.button}>
            Confirm
          </button>

          <PiLineVerticalLight style={{ fontSize: "2rem", color: "#2e2e34" }} />

          <button onClick={onClose} style={styles.button}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#18181B",
    width: "300px",
    height: "150px",
    color: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "20px",

    zIndex: 1001,
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    width: "100%",
    outline: "none",
    background: "#2e2e34",
    borderRadius: "5px",
    color: "white",
    border: "none",
  },
  button: {
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    background: "none",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default DeleteFolderModel;
