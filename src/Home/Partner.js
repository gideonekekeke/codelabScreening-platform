import React from "react";
import apple from "../videos/apple.png";
import bbc from "../videos/bbc.png";
import fc from "../videos/fc.png";
import ms from "../videos/ms.png";
import bd from "../videos/bd.png";
import mc from "../videos/mc.png";
import google from "../videos/google.png";

const Partner = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          color: "#F9AF2F",
          textTransform: "uppercase",
          // backgroundColor: "red",
        }}
      >
        Trusted by
      </div>
      <div>
        <img
          src={bd}
          alt="Partners"
          style={{
            width: "100px",
            height: "60px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div>

      <div>
        <img
          src={google}
          alt="Partners"
          style={{
            width: "200px",
            height: "60px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div>

      <div>
        <img
          src={ms}
          alt="Partners"
          style={{
            width: "200px",
            height: "60px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div>

      <div>
        <img
          src={mc}
          alt="Partners"
          style={{
            width: "200px",
            height: "60px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div>

      <div>
        <img
          src={fc}
          alt="Partners"
          style={{
            width: "200px",
            height: "60px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div>

      <div>
        <img
          src={bbc}
          alt="Partners"
          style={{
            width: "200px",
            height: "60px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div>

      <div>
        <img
          src={apple}
          alt="Partners"
          style={{
            width: "200px",
            height: "60px",
            objectFit: "contain",
            // backgroundColor: "red",
          }}
        />
      </div>
    </div>
  );
};

export default Partner;
