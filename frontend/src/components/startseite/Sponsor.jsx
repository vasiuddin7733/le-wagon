import React from "react";

const Sponsor = () => {
  return (
    <div className="px-5 lg:px-0 ">
      <div className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center pb-12 lg:pb-24">
        <div className="w-full lg:w-4/5 lg:flex lg:justify-start lg:items-start text-left text-[#000000] text-lg md:text-xl lg:text-3xl font-medium lg:leading-6">
          <p>Gefördert durch</p>
        </div>
        <div className="w-full lg:w-4/5">
          <img src="/home/bildschirmfoto.png" width="100%" />
        </div>
      </div>
      <div className="lg:flex lg:flex-col justify-center items-center w-full rounded-md">
        <div className="w-full lg:w-4/5 flex flex-col justify-center items-center py-12 lg:py-24 bg-[#ACD7EB]">
          <p className="w-4/5 md:2/3 lg:w-1/2 text-[#FCFCFC] font-normal leading-8 text-lg lg:text-2xl text-center">
            In der von Adrian gegründeten Gruppe, spricht Torsten über seine
            Panikattacken und Merve fühlt sich endlich verstanden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
