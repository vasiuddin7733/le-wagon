import React from "react";

const Intro = () => {
  return (
    <div className="w-full bg-[#F8F9FA] text-center lg:text-left">
      <div className="w-full lg:flex justify-between px-5 md:px-7 lg:px-12">
        <div className="pt-10 space-x-5">
          <a>Startseite</a>
          <a>Gruppen</a>
          <a>Blog</a>
          <a>Preisübersicht</a>
          <a>Über uns</a>
        </div>
        <div className="lg:flex space-x-5 pt-10 pb-10 lg:pb-0">
          <p>Anmelden</p>
          <div className="">
            <button className="text-[#FCFCFC] bg-[#A64D79] p-1 rounded-md">
              Jetzt starten
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-col justify-center items-center">
        <div className="w-full lg:w-4/5 lg:flex lg:flex-col justify-center items-center">
          <div className="lg:flex justify-center items-center">
            <div className="lg:flex lg:flex-col w-full lg:w-1/2 pr-8 space-y-10">
              <div className="text-5xl font-light	text-[#212529]">
                Online Selbsthilfegruppen
              </div>
              <div className="w-full text-2xl font-extralight text-[#212529] leading-8">
                Tausche Dich mit anderen Betroffenen aus oder starte eine neue
                Gruppe. Unabhängig von deinem Wohnort und passend zu deiner
                Lebenssituation.
              </div>
              <div className="pb-10 lg:pb-0">
                <button className="text-[#FCFCFC] bg-[#A64D79] p-2 rounded-md">
                  Jetzt starten
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:p-2">
              <div className="flex flex-col">
                <div className="bg-[#ACD7EB] h-20 mb-5 lg:mr-5 rounded-md"></div>
                <div>
                  <img src="/home/intro-frau1.png" width="100%"></img>
                </div>
                <div className="lg:pr-5 py-5">
                  <img src="/home/intro-frau2.png" width="100%"></img>
                </div>
              </div>
              <div className="lg:pr-5">
                <img src="/home/intro-mann1.png" width="100%"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
