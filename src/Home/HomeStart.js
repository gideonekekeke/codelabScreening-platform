import { Button } from "antd";
import React from "react";
import img from "../videos/img.jpg";
import hero from "../videos/hero.png";

const HomeStart = () => {
  return (
    <center>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          backgroundColor: "#F4F6FC",
        }}
      >
        <div
          style={{
            // backgroundColor: "red",
            width: "300px",
            height: "240px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "25px",
              textAlign: "Left",
              paddingLeft: "15px",
              marginBottom: "20px",
            }}
          >
            Build remote engineering teams with the world’s top talent.
          </div>
          <Button
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              height: "50px",
              textTransform: "uppercase",
              width: "150px",
              marginLeft: "20px",
              backgroundColor: "#3863DF",
              color: "white",
            }}
          >
            Hire Talent
          </Button>
        </div>
        <div
          style={{
            // backgroundColor: "blue",
            width: "320px",
            height: "250px",
          }}
        >
          <img
            src={hero}
            alt="image"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </center>
  );
};

export default HomeStart;
