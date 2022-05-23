import React from "react";

import Section1 from "../components/section1/Section1";
import SectionText from "../components/sectionText/SectionText";
import GameImage from "../components/Gameimage/GameImage";

const HomePage = () => {
  return (
    <div>
      <Section1 />
      <GameImage />
      <SectionText />
    </div>
  );
};

export default HomePage;
