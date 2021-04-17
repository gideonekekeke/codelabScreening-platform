import React from "react";
import Capture from "../Home/Capture";
import FeatureCard from "../Home/FeatureCard";
import HomeStart from "../Home/HomeStart";
import Love from "../Home/Love";
import MapHolder from "../Home/MapHolder";
import Partner from "../Home/Partner";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import love from "../videos/love.svg";
import code from "../videos/codeW.png";
import cup from "../videos/cup.svg";
import Story from "../Home/Story";
import SuccessStory from "../Home/SuccessStory";
import Total from "../Home/Total";
import Trusted from "./TrustedBy";
import OurStack from "../Home/OurStack";

const HomeScreen = () => {
  return (
    <div>
      <center>
        <HomeStart />
        <Partner />
        <Capture />
        <FeatureCard />
        <Love text="Our Community" bg="#FAB43F" img={love} />

        <MapHolder />

        <Love text="Talent Spotlight" bg="#3863DF" img={code} bg1="#F4F6FC" />
        <Story />

        <Love
          text="The skills and seniority you need"
          details="Our network covers a wide range languages, frameworks, datastores and DevOps tools."
          bg="#F9AF2F"
          img={cup}
          bg1="#182039"
          clr="white"
        />
        <OurStack />
        <Total />
        <SuccessStory />
        {/* <Footer /> */}
      </center>
    </div>
  );
};

export default HomeScreen;
