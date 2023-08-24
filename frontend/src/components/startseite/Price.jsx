import React from "react";

const Price = () => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center ">
      <div className="w-full lg:w-4/5 lg:flex lg:flex-col lg:justify-center lg:items-center  h-[30rem] bg-[#F9F5E6] ">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center  pt-10 space-y-5">
          <p className="text-lg lg:text-xl font-medium leading-5 text-center lg:text-left">
            Ein monatlicher Preis - unlimitierter Zugang zu Gruppen
          </p>
          <p className="text-md lg:text-lg font-normal leading-8 text-center">
            Teste 5 Gruppen-Termine jetzt kostenlos, danach kannst Du für 19,95
            € / Monat an unbegrenzt vielen Gruppen teilnehmen.
          </p>
          <div className="w-1/2 lg:w-full flex justify-center items-center p-5 bg-[#FCFCFC] border-[#9AC0D1]">
            <div className="pr-10">
              <img src="/home/small-tree.png" />
            </div>
            <div>
              <p className="text-lg lg:text-xl font-medium leading-5 text-left">
                5 Teilnahmen kostenlos
              </p>
              <p className="text-sm lg:text-md font-normal text-center">
                Danach 19,95 € / Monat. Jederzeit kündbar
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <p>
              We.together ist kostenlos für Gruppenmoderatoren
              <span className="text-[#A64D79]">-Jetzt mehr erfahren.</span>
            </p>
            <div className="pt-10">
              <button className="bg-[#A64D79] rounded-md p-2 text-center">
                Jetzt testen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
