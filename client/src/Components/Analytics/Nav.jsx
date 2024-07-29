import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Nav.module.css";
import { toast } from "react-toastify";

function Nav({ theme }) {
  const navigate = useNavigate();
  const { formId } = useParams();

  const handleShare = () => {
    let path = `${window.location.origin}/chatbot/${formId}`;
    navigator.clipboard
      .writeText(path)
      .then(() => {
        toast.success("Link copied to clipboard!");
        
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });

    // navigate(`/chatbot/${formId}`);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#18181B",
          alignItems: "center",
          padding: "10px 40px",
          height: "50px",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "100",
          borderBottom: "1px solid #37373e",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            paddingLeft: "37%",
          }}
        >
          <button
            onClick={() => navigate(`/update/${formId}`)}
            className={styles.button}
          >
            Flow
          </button>
          <button
            onClick={() => navigate(`/theme/${formId}`)}
            className={styles.button}
          >
            Theme
          </button>
          <button className={styles.active}>Response</button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <button className={styles.share} onClick={handleShare}>
            Share
          </button>
          <button className={styles.save}>Save</button>

          <button
            onClick={() => navigate("/dashboard")}
            className={styles.cross}
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
