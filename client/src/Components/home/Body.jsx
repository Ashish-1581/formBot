import React from "react";
import semi from "../../assets/homeImg/semi.png";
import tri from "../../assets/homeImg/tri.png";
import botText from "../../assets/homeImg/botText.png";
import image from "../../assets/homeImg/image.png";
import blurO from "../../assets/homeImg/blurO.png";
import blurB from "../../assets/homeImg/blurB.png";
import chat from "../../assets/homeImg/chat.png";
import arrow from "../../assets/homeImg/arrow.png";
import tick from "../../assets/homeImg/tick.png";
import cross from "../../assets/homeImg/cross.png";
import text from "../../assets/homeImg/text.png";
import fet1 from "../../assets/homeImg/fet1.png";
import fet2 from "../../assets/homeImg/fet2.png";
import apps from "../../assets/homeImg/apps.png";
import chat2 from "../../assets/homeImg/chat2.png";
import features from "../../assets/homeImg/features.png";
import companies from "../../assets/homeImg/companies.png";

import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#171923",
          width: "100%",
        }}
      >
        <div>
          <img src={tri} style={{ height: "300px", width: "300px" }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <img src={botText} style={{ width: "95%" }} />
          <p style={{ color: "white", textAlign: "center" }}>
            Typebot gives you powerful blocks to create unique chat experiences.
            Embed them anywhere on your web/mobile apps and start collecting
            results like magic.
          </p>
          <button
            onClick={() => navigate("/register")}
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
            Create a FormBot for free
          </button>
        </div>
        <div>
          <img src={semi} style={{ height: "300px", width: "300px" }} />
        </div>
      </div>
      <div
        style={{ background: "#171923", position: "relative", width: "100%" }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img src={blurO} style={{ height: "600px", width: "50%" }} />

          <img src={blurB} style={{ height: "600px", width: "50%" }} />
        </div>
        <img
          src={image}
          style={{
            width: "85%",
            height: "600px",
            borderRadius: "10px",
            zIndex: "1",
            position: "absolute",
            left: "7.5%",
            top: "0px",
          }}
        />
      </div>

      <div
        style={{
          padding: "90px",
          background: "#171923",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <h1 style={{ color: "white", textAlign: "center", fontSize: "45px" }}>
          Replace your old school forms with chatbots
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Typebot is a better way to ask for information. It leads to an
          increase in customer satisfaction and retention and multiply by 3 your
          conversion rate compared to classical forms.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            paddingTop: "70px",
            position: "relative",
          }}
        >
          <div
            style={{
              border: "1px solid #808080",
              width: "570px",
              height: "560px",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
                gap: "15px",
              }}
            >
              <label>Full Name*</label>
              <input
                style={{
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #808080",
                  outline: "none",
                  background: "none",
                }}
              />
              <label>Email*</label>
              <input
                style={{
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #808080",
                  outline: "none",
                  background: "none",
                }}
              />

              <p>What services are you intrested in?*</p>
              <div style={{ background: "none" }}>
                <input
                  type="checkbox"
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                />{" "}
                <label>Website Dev</label>
                <br />
                <input
                  type="checkbox"
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                />{" "}
                <label>Content Marketing</label>
                <br />
                <input
                  type="checkbox"
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                />{" "}
                <label>Social Media</label>
                <br />
                <input
                  type="checkbox"
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                />{" "}
                <label>UI/UX Design</label>
                <br />
              </div>
              <label>Additional Information*</label>
              <textarea
                style={{
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #808080",
                  outline: "none",
                  background: "none",
                  height: "80px",
                  maxHeight: "80px",
                  maxWidth: "520px",
                }}
                placeholder="Additional Information"
              />
              <button
                style={{
                  background: "#1A5FFF",
                  color: "white",
                  boxShadow: "none",
                  border: "none",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "100px",
                }}
              >
                Submit
              </button>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #808080",
              width: "570px",
              height: "560px",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <img
              src={chat}
              style={{
                width: "95%",
                height: "400px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            />
          </div>
          <img
            src={cross}
            style={{
              height: "50px",
              width: "50px",
              position: "absolute",
              left: "23%",
              top: "0px",
            }}
          />
          <img
            src={tick}
            style={{
              height: "50px",
              width: "50px",
              position: "absolute",
              right: "23%",
              top: "0px",
            }}
          />
          <img
            src={text}
            style={{
              height: "36px",
              width: "97px",
              position: "absolute",
              right: "7%",
              top: "0px",
            }}
          />
          <img
            src={arrow}
            style={{
              height: "100px",
              width: "100px",
              position: "absolute",
              right: "1%",
              top: "0px",
            }}
          />
        </div>
      </div>

      <div
        style={{
          background: "#171923",
          paddingLeft: "150px",
          paddingRight: "150px",
          paddingBottom: "100px",
          paddingTop: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", gap: "60px" }}>
          <img src={fet1} style={{ width: "50%", height: "310px" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "35px",
            }}
          >
            <h2>Easy building experience</h2>

            <p style={{ maxWidth: "70%", color: "#A0AEC0" }}>
              All you have to do is drag and drop blocks to create your app.
              Even if you have custom needs, you can always add custom code.
            </p>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "35px",
            }}
          >
            <h2>Embed it in a click</h2>
            <p style={{ maxWidth: "70%", color: "#A0AEC0" }}>
              Embedding your typebot in your applications is a walk in the park.
              Typebot gives you several step-by-step platform- specific
              instructions. Your typebot will always feel "native".
            </p>
          </div>
          <img src={fet2} style={{ width: "50%", height: "310px" }} />
        </div>
      </div>

      <div
        style={{
          background: "#171923",
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          paddingBottom: "50px",
        }}
      >
        <img src={apps} style={{ height: "90%", width: "95%" }} />
        <div style={{ paddingLeft: "90px", paddingRight: "90px" }}>
          <h2>Integrate with any platform</h2>
          &nbsp;
          <p style={{ maxWidth: "700px", color: "#A0AEC0" }}>
            Typebot offers several native integrations blocks as well as
            instructions on how to embed typebot on particular platforms
          </p>
        </div>
      </div>

      <div
        style={{
          background: "#171923",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "50px",
          padding: "50px 100px 50px",
        }}
      >
        <div style={{ color: "white", textAlign: "center" }}>
          <h1 style={{ fontSize: "45px" }}>Collect results in real-time</h1>
          &nbsp;
          <p style={{ color: "#A0AEC0" }}>
            One of the main advantage of a chat application is that you collect
            the user's responses on each question.{" "}
            <b>You won't lose any valuable data.</b>
          </p>
        </div>

        <img
          src={chat2}
          style={{
            width: "35%",
            height: "35%",
            border: "1px solid #808080",
            borderRadius: "5px",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          color: "white",
          background: " #171923",
          textAlign: "center",
          padding: "50px 90px 50px",
        }}
      >
        <div>
          <h2>And many more features</h2>
          &nbsp;
          <p style={{ color: "#A0AEC0" }}>
            Typebot makes form building easy and comes with powerful features
          </p>
        </div>
        <img src={features} style={{ width: "100%", height: "100%" }} />
        <h3>Loved by teams and creators from all around the world</h3>
      </div>

      <div
        style={{
          background: "linear-gradient(180deg, #171923, #1A202C)",
          display: "flex",
          justifyContent: "center",
          padding: "10px 90px 40px",
        }}
      >
        <img src={companies} style={{ width: "100%", height: "100%" }} />
      </div>

      <div
        style={{
          background: "#171923",
          color: "white",
          position: "relative",
          paddingBottom: "200px",
        }}
      >
        <img src={tri} style={{ height: "300px", width: "300px" }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            gap: "30px",
          }}
        >
          <h2>Improve conversion and user engagement with FormBots</h2>
          <button
            onClick={() => navigate("/register")}
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
            Create a FormBot
          </button>
          <p style={{ color: "#A0AEC0" }}>
            No trial. Generous <b>free plan</b>.
          </p>
          <img
            src={semi}
            style={{
              height: "300px",
              width: "300px",
              position: "absolute",
              top: "25%",
              right: "0px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
