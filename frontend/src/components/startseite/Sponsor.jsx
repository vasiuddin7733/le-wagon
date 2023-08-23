import React from "react";

const Sponsor = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-4/5 flex justify-start items-start text-left text-[#000000] text-3xl font-medium leading-8">
          <p>Gefördert durch</p>
        </div>
        <div className="w-4/5">
          <img src="/home/bildschirmfoto.png" width="100%" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center w-4/5 h-48 pt-24 bg-[#ACD7EB]">
  
          <p className="w-1/2 text-[#FCFCFC] font-normal left-8">
            In der von Adrian gegründeten Gruppe, spricht Torsten über seine
            Panikattacken und Merve fühlt sich endlich verstanden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
