import React from "react";

const Price = () => {
  return (
    <div className="lg:flex justify-center items-center ">
      <div className="lg:flex lg:flex-col justify-center items-center w-4/5 h-[30rem] bg-[#F9F5E6] ">
        <div className="lg:flex lg:flex-col justify-center items-center w-1/2 pt-10 space-y-5">
          <p className="text-2xl font-medium left-5 text-left">
            Ein monatlicher Preis - unlimitierter Zugang zu Gruppen
          </p>
          <p className="text-xl font-normal leading-8 text-left">
            Teste 5 Gruppen-Termine jetzt kostenlos, danach kannst Du für 19,95
            € / Monat an unbegrenzt vielen Gruppen teilnehmen.
          </p>

          <div className="lg:flex h-18 p-10 bg-[#FCFCFC] border-[#9AC0D1]">
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

export default Price;
