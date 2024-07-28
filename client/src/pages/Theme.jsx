import React, { useEffect, useState } from "react";
import Nav from "../Components/Theme/Nav";
import light from "../assets/themeImg/light.png";
import dark from "../assets/themeImg/dark.png";
import grey from "../assets/themeImg/grey.png";
import avatar from "../assets/themeImg/avatar.png";

const styles = {
  imgDiv: {
    width: "70%",
    height: "70%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
};

function Theme() {
  const [theme, setTheme] = useState("white");
  return (
    <div>
      <Nav theme={theme} />
      <div
        style={{
          display: "flex",
          height: "100vh",
          paddingTop: "50px",
          position: "fixed",
        }}
      >
        <div
          style={{
            width: "300px",
            border: "1px solid #37373e",
            background: "#18181B",
          }}
        >
          <div
            style={{
              color: "white",
              textAlign: "center",
              borderBottom: "1px solid #37373e",
              padding: "30px",
            }}
          >
            <h2>Customize the theme</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              alignItems: "center",
              gap: "30px",
              padding: "20px 30px",
            }}
          >
            <div style={styles.imgDiv} onClick={() => setTheme("white")}>
              <img style={styles.img} src={light} alt="light" />
            </div>
            <div style={styles.imgDiv} onClick={() => setTheme("#171923")}>
              <img style={styles.img} src={dark} alt="dark" />
            </div>
            <div style={styles.imgDiv} onClick={() => setTheme("#508C9B")}>
              <img style={styles.img} src={grey} alt="grey" />
            </div>
          </div>
        </div>
        <div style={{ background: `${theme}`, width: "100vw",padding:"100px",position:"relative" }}>
          <div style={{ display: "flex",gap:"15px" }}>
            <img src={avatar} alt="avatar" height={50} />
            <div
              style={{
                padding: "10px 20px",
                background: "#F7F8FF",
                textAlign: "center",
                borderRadius: "10px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontSize:"1.2rem"
              }}
            >
              Hello
            </div>
          </div>
          <div style={{
            padding: "10px 20px",
            background: "#0042DA",
            color: "white",
            width: "50px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius: "10px",
            position: "absolute",
            right: "35%",
              fontSize:"1.2rem"
          }}>
          Hii
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
