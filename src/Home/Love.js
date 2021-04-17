import React from "react";
import love from "../videos/love.svg";

const Love = ({ bg, text, img, bg1, clr, details }) => {
  return (
    <div
      style={{
        backgroundColor: bg1,
        width: "100%",
        // backgroundColor: "red",
        margin: "0px 0",
      }}
    >
      <center>
        <br />
        <div
          style={{
            backgroundColor: bg,
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            // backgroundColor: "red",
            marginBottom: "0px",
          }}
        >
          <img
            src={img}
            alt="love"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            fontSize: "35px",
            // marginBottom: "50px",
            padding: "0px 20px",
            margin: "20px 0",
            color: clr,
            lineHeight: "1.0",
          }}
        >
          {" "}
          {text}{" "}
        </div>
        <p
          style={{
            // marginBottom: "50px",
            paddingBottom: "30px",
            paddingLeft: "10px",
            paddingRight: "10px",
            color: clr,
          }}
        >
          {" "}
          {details}{" "}
        </p>
      </center>
    </div>
  );
};

export default Love;
