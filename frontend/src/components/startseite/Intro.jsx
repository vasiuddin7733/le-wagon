import React from "react";

const Intro = () => {
  return (
    <div>
      <div>
        <div>
          <a>Startseite</a>
          <a>Gruppen</a>
          <a>Blog</a>
          <a>Preisübersicht</a>
          <a>Über uns</a>
        </div>
        <div>
          <p>Gruppe suchen</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-24">
        <div className="w-4/5 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="flex flex-col w-1/2 pr-8 space-y-10">
              <div className="text-5xl font-light	text-[#212529]">
                Online Selbsthilfegruppen
              </div>
              <div className="text-2xl font-extralight text-[#212529] leading-8">
                Tausche Dich mit anderen Betroffenen aus oder starte eine neue
                Gruppe. Unabhängig von deinem Wohnort und passend zu deiner
                Lebenssituation.
              </div>
              <div className="">
                <button className="text-[#FCFCFC] bg-[#A64D79] p-2 rounded-md">
                  Jetzt starten
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center p-2">
              <div>
                <div className="bg-[#ACD7EB] h-24 mb-5 mr-5 rounded-md"></div>
                <div className="img1">
                  <img src="/home/intro-frau1.png"></img>
                </div>
                <div className="pr-5 pb-5">
                  <img src="/home/intro-frau2.png"></img>
                </div>
              </div>
              <div className="pr-5">
                <img src="/home/intro-mann1.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
