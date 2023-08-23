import React from "react";

const Group = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-4/5">
        <div className="flex justify-start text-2xl font-medium left-7 ">
          <p>So funktioniert we.together</p>
        </div>
        <div>
          <div className="flex space-y-10">
            <img src="/home/old_man.png" width="50%" />
            <div className="">
              <p className="text-4xl font-medium left-6 text-left pt-10">
                Finde deine Gruppe
              </p>
              <p className="text-2xl font-normal left-5 text-left">
                Finde aus zahlreichen Gruppen, die passende(n) für Dich und
                tausche Dich online, in regelmäßigen Terminen, mit anderen
                Betroffene aus, die in der gleichen Situation sind wie Du.
              </p>
              <div className="">
                <button className="text-[#FCFCFC] bg-[#ACD7EB] p-5 rounded-md">
                  Gruppe finden
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <p className="text-4xl font-medium left-6 text-left pt-10">
                Finde deine Gruppe
              </p>
              <p lassName="text-2xl font-normal left-5 text-left">
                Finde aus zahlreichen Gruppen, die passende(n) für Dich und
                tausche Dich online, in regelmäßigen Terminen, mit anderen
                Betroffene aus, die in der gleichen Situation sind wie Du.
              </p>
              <div className="">
                <button className="text-[#FCFCFC] bg-[#ACD7EB] p-5 rounded-md">
                  Gruppe starten
                </button>
              </div>
            </div>
            <img src="/home/gruppe.png" width="50%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
