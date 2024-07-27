import React, { useState } from "react";
import { updateUserDetails } from "../api/userApi";
import pSemi from "../assets/authImg/pSemi.png";
import ySemi from "../assets/authImg/ySemi.png";
import tri2 from "../assets/authImg/tri2.png";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


function Settings() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await updateUserDetails({
        username,
        email,
        oldPassword,
        newPassword,
      });
      console.log(response);
      if (response.status === 200)
      {
        setMessage("User details updated successfully");

      }else{
        setError("Incorrect Username or old Password");
      }
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#18181B",
          gap: "20px",
          color: "white",
        }}
      >
        <h2>Settings</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "300px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <label>Username</label>
            <input
              style={{
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #808080",
                outline: "none",
                background: "none",
               
              }}
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <label>New Email</label>
            <input
              style={{
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #808080",
                outline: "none",
                background: "none",
              }}
              type="email"
              placeholder="Update Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <label>Old Password</label>
            <input
              style={{
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #808080",
                outline: "none",
                background: "none",
                
              }}
              type="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <label>New Password</label>
            <input
              style={{
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #808080",
                outline: "none",
                background: "none",
              }}
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              background: "#1A5FFF",
              color: "white",
              boxShadow: "none",
              border: "none",
              borderRadius: "8px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            Update
          </button>
        </form>
        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <img
        src={tri2}
        alt="tri2"
        style={{
          position: "absolute",
          top: "150px",
          left: "0",
          height: "300px",
          width: "300px",
        }}
      />
      <img
        src={pSemi}
        alt="pSemi"
        style={{
          position: "absolute",
          top: "100px",
          right: "0",
          height: "300px",
          width: "150px",
        }}
      />
      <img
        src={ySemi}
        alt="ySemi"
        style={{
          position: "absolute",
          bottom: "0",
          right: "200px",
          height: "150px",
          width: "300px",
        }}
      />

      <div
      onClick={() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
        
      }}
      style={{
        position: "absolute",
        bottom: "50px",
        left: "70px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
      }}
    >
      <IoLogOutOutline
        style={{
          fontSize: "1.5rem",
          color: "red",
        }}
      />
      <span style={{ fontSize: "1rem", color: "red" }}>Logout</span>
    </div>

    </div>
  );
}

export default Settings;
