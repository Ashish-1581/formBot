import React from "react";

function Footer() {
  return (
    <div>
      <div
        style={{
          color: "white",
          background: "#11121a",
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom:"25px",
          paddingTop:"25px",
        }}
      >
        <div>
          <p>Made With ❤️ By</p>
          <p>Ashish</p>
        </div>
        <div>
          <p>Status</p>
          <p>Documentation</p>
          <p>Roadmap</p>
          <p>Pricing</p>
        </div>
        <div>
          <p>Discord</p>
          <p>GitHub Repository</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>OSS Friends</p>
        </div>
        <div>
          <p>About</p>
          <p>Contact</p>
          <p>Terms of service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
