import React from "react";

const Group = () => {
  return (
    <div>
      <div className="text-2xl leading-7 pb-5 lg:pb-10 lg:flex lg:flex-col lg:justify-center lg:items-center">
        <p className="w-full lg:w-4/5 font-medium px-5 lg:px-0">
          So funktioniert we.together
        </p>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="w-full lg:w-4/5 lg:flex lg:flex-col lg:justify-center lg:items-center">
          <div className="lg:flex lg:justify-center lg:items-center lg:space-x-5">
            <div className="w-full lg:w-1/2 lg:pr-5">
              <img src="/home/old_man.png" width="100%" />
            </div>
            <div className="w-full lg:w-1/2 px-5 lg:px-0 space-y-5 lg:space-y-10">
              <p className="texl-2xl md:text-3xl text-4xl font-medium leading-6 text-left pt-10">
                Finde deine Gruppe
              </p>
              <p className="texl-lg md:text-xl lg:text-2xl leading-4 text-left font-normal">
                Finde aus zahlreichen Gruppen, die passende(n) für Dich und
                tausche Dich online, in regelmäßigen Terminen, mit anderen
                Betroffene aus, die in der gleichen Situation sind wie Du.
              </p>
              <div className="">
                <button className="text-[#FCFCFC] bg-[#ACD7EB] p-2 rounded-md">
                  Gruppe finden
                </button>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-center lg:items-center ">
            <div className="w-full lg:w-1/2 px-5 lg:px-0 space-y-5 lg:space-y-10">
              <p className="texl-2xl md:text-3xl text-4xl font-medium leading-6 text-left pt-10">
                Finde deine Gruppe
              </p>
              <p lassName="texl-lg md:text-xl lg:text-2xl font-normal leading-4 text-left">
                Finde aus zahlreichen Gruppen, die passende(n) für Dich und
                tausche Dich online, in regelmäßigen Terminen, mit anderen
                Betroffene aus, die in der gleichen Situation sind wie Du.
              </p>
              <div className="pb-10 lg:pb-0">
                <button className="text-[#FCFCFC] bg-[#ACD7EB] p-2 rounded-md">
                  Gruppe starten
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-5">
              <img src="/home/gruppe.png" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
