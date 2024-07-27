import React from "react";
import logo from "../../assets/homeImg/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "15px",
        paddingBottom: "15px",
        paddingLeft: "90px",
        paddingRight: "90px",
        backgroundColor: "#171923",
      }}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <img
          src={logo}
          alt="FormBot"
          style={{ width: "35px", height: "35px" }}
        />
        FormBot
      </div>
      <div style={{ display: "flex", gap: "15px" }}>
        <button
          style={{
            background: "none",
            boxShadow: "none",
            border: "2px solid #7EA6FF",
            padding: "10px",
            borderRadius: "8px",
            outline: "none",
            color: "#7EA6FF",
            cursor: 'pointer'
          }}
          onClick={() => navigate("/login")}
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/register")}
          style={{
            background: "#1A5FFF",
            color: "white",
            boxShadow: "none",
            border: "none",
            borderRadius: "8px",
            padding: "10px",
            cursor: 'pointer'
          }}
        >
          Create a FormBot
        </button>
      </div>
    </div>
  );
}

export default Header;
