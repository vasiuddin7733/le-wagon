import React from "react";
import { HomeComponent1, HomeComponent2, HomeComponent3 } from "../components";

const Startseite = () => {
  return (
    <div className="bg-#FCFCFC space-y-24">
      <HomeComponent1 />
      <HomeComponent2 />
      <HomeComponent3 />
    </div>
  );
};

export default Startseite;
