import React from "react";
import {
  Intro,
  Sponsor,
  Benefits,
  Group,
  Price,
  FindGroup,
  Study,
  Footer,
} from "../components";

const StartSeite = () => {
  return (
    <div className="bg-#FCFCFC space-y-5 md:space-y-7 lg:space-y-10 break-normal">
      <Intro />
      <Sponsor />
      <Benefits />
      <Group />
      <Price />
      <FindGroup />
      <Study />
      <Footer />
    </div>
  );
};

export default StartSeite;
