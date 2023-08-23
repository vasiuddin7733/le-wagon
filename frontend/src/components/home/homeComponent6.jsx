import React from "react";
import "../../styles/home/homeComponent6.css";

const HomeComponent6 = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="kostenlostop">
        <div className="kostenlos space-y-5">
          <p className="ein">
            Ein monatlicher Preis - unlimitierter Zugang zu Gruppen
          </p>
          <p className="teste">
            Teste 5 Gruppen-Termine jetzt kostenlos, danach kannst Du für 19,95
            € / Monat an unbegrenzt vielen Gruppen teilnehmen.
          </p>
          <div className="kostenlosbox">
            <div>
              <img src="/home/small-tree.png" />
            </div>
            <div>
              <p>5 Teilnahmen kostenlos</p>
              <p>Danach 19,95 € / Monat. Jederzeit kündbar</p>
            </div>
          </div>
          <p>
            We.together ist kostenlos für Gruppenmoderatoren
            <span className="text-[#A64D79]">-Jetzt mehr erfahren.</span>
          </p>
          <div className="pt-10">
            <button className="introbutton">Jetzt testen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent6;
