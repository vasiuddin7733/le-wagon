import React from "react";
import "../../styles/home/homeComponent1.css";

const Intro = () => {
  return (
    <div className="intro1">
      <div className="intro2">
        <div className="intro3">
          <div className="intro4">
            <div className="introtitle">Online Selbsthilfegruppen</div>
            <div className="introcontent">
              Tausche Dich mit anderen Betroffenen aus oder starte eine neue
              Gruppe. Unabhängig von deinem Wohnort und passend zu deiner
              Lebenssituation.
            </div>
            <div className="">
              <button className="introbutton">Jetzt starten</button>
            </div>
          </div>
          <div className="introbild">
            <div>
              <div className="introcol"></div>
              <div className="img1">
                <img src="/home/intro-frau1.png"></img>
              </div>
              <div className="img2">
                <img src="/home/intro-frau2.png"></img>
              </div>
            </div>
            <div className="img2">
              <img src="/home/intro-mann1.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
