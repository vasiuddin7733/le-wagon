import React from "react";

const FindGroupComp = () => {
  return (
    <div className="lg:flex space-x-5">
      <div className="lg:flex lg:flex-col w-1/4">
        <img src="/home/min-an4.png" />
        <div className="lg:flex justify-around">
          <p>Depressionsgruppen</p>
          <img src="/home/arrow.png" />
        </div>
      </div>
      <div className="lg:flex lg:flex-col w-1/4">
        <img src="/home/lil-artsy.png" />
        <div className="lg:flex justify-around">
          <p>Trauergruppen</p>
          <img src="/home/arrow.png" />
        </div>
      </div>
      <div className="lg:flex lg:flex-col w-1/4">
        <img src="/home/liza-summer.png" />
        <div className="lg:flex justify-around">
          <p>Gruppen für Angehörige </p>
          <img src="/home/arrow.png" />
        </div>
      </div>
      <div className="lg:flex lg:flex-col w-1/4 h-full">
        <img src="/home/min-an1.png" />
        <div className="lg:flex justify-around">
          <p>Alle Gruppen anzeigen</p>
          <img src="/home/arrow.png" />
        </div>
      </div>
    </div>
  );
};

export default FindGroupComp;
