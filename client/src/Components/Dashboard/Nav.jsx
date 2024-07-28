import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handelSelect = (e) => {
    if (e.target.value === "settings") {
      navigate("/settings");
    } else if (e.target.value === "logout") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    }
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: "#18181B",
          textAlign: "center",
          borderBottom: "1px solid #808080 ",
          position: "fixed",
          width: "100%",
          zIndex: "100",
        }}
      >
        <select
          onChange={handelSelect}
          style={{
            margin: "5px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #808080",
            backgroundColor: "transparent",
            color: "white",
            minWidth: "200px",

            cursor: "pointer",
            boxShadow: "none",
            outline: "none",
          }}
        >
          <option>{user}'s workspace</option>

          <option value="settings">Settings</option>
          <option value="logout">Log Out</option>
        </select>
      </div>
    </div>
  );
}

export default Nav;
