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
    <div className="bg-#FCFCFC space-y-24 break-normal">
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
