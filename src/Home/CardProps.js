import React from "react";
import checkmark from "../videos/checkmark.svg";
import hands from "../videos/hands.svg";
import data from "../videos/data.svg";
import global from "../videos/global.svg";

const CardProps = ({ bg, img, header, detail }) => {
  return (
    <div
      style={{
        width: "310px",
        height: "380px",
        backgroundColor: "white",
        borderRadius: "5px",
        // justifyContent: "flex-start",
        color: "white",
        flexDirection: "column",
        textAlign: "left",
        boxShadow: "0px 5px 7px -2px  rgba(0, 0, 0, 0.35)",
        margin: "20px 20px",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "20px",
          marginTop: "20px",
          marginBottom: "90px",
        }}
      >
        <img
          src={img}
          alt="1st img"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          fontSize: "25px",
          marginLeft: "20px",
          marginBottom: "20px",
          color: "black",
        }}
      >
        {header}
      </div>
      <div
        style={{
          // fontSize: "25px",
          marginLeft: "20px",
          color: "black",
        }}
      >
        {detail}
      </div>
    </div>
  );
};

export default CardProps;
