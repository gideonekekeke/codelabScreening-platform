import React from "react";
import CardProps from "./CardProps";
import checkmark from "../videos/checkmark.svg";
import hands from "../videos/hands.svg";
import data from "../videos/data.svg";
import global from "../videos/global.svg";

const FeatureCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#F3F5FB",
      }}
    >
      <CardProps
        header="Vetted Engineers"
        detail="Spend less time interviewing and more time building by connecting with engineers we’ve already assessed."
        img={checkmark}
        bg="#F9AF2F"
      />

      <CardProps
        header="Global Talent"
        detail="Tap into a talent pool that spans multiple regions and multiple countries. The best engineers aren’t always in your backyard."
        img={global}
        bg="#3863DF"
      />

      <CardProps
        header="Data-Driven Match"
        detail="Identify the best fit engineers from our network through our proprietary data-driven, matching process."
        img={data}
        bg="#49AAAF"
      />

      <CardProps
        header="Hands-On Support"
        detail="From helping with onboarding to sharing best practices, our success team is there every step of the way."
        img={hands}
        bg="#1F2C46"
      />
    </div>
  );
};

export default FeatureCard;
