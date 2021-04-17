import React from "react";
import bg from "../videos/bg.png";

const MapHolder = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          // backgroundColor: "red",
          width: "300px",
        }}
      >
        <img
          src={bg}
          alt="bg"
          style={{
            width: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div
        style={{
          // backgroundColor: "red",
          width: "300px",
          textAlign: "left",
          marginLeft: "10px",
        }}
      >
        <h2>77,000+ Software Engineers</h2>
        <p>
          Who have come together to develop their skills, learn from each other,
          and grow their careers
        </p>
        <h2>100+ Technical Skills</h2>
        <p>
          Skills include Ruby, Python, Go, Java, JavaScript, React-Native,
          Postgres, MongoDB, and many more.
        </p>
        <h2>60+ Countries</h2>
        <p>
          With a geographic footprint that covers Africa, South America, Eastern
          Europe, and many more.
        </p>
      </div>
    </div>
  );
};

export default MapHolder;
