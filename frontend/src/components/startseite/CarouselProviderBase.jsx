import React from "react";

const CarouselProviderBase = () => {
  return (
    <div className="flex space-x-5">
      <div className="flex flex-col w-1/4">
        <img src="/home/min-an4.png" />
        <div className="flex justify-around">
          <p>Depressionsgruppen</p>
          <img src="/home/arrow.png" />
        </div>
      </div>
      <div className="flex flex-col w-1/4">
        <img src="/home/lil-artsy.png" />
        <div className="flex justify-around">
          <p>Trauergruppen</p>
          <img src="/home/arrow.png" />
        </div>
      </div>
      <div className="flex flex-col w-1/4">
        <img src="/home/liza-summer.png" />
        <div className="flex justify-around">
          <p>Gruppen für Angehörige </p>
          <img src="/home/arrow.png" />
        </div>
      </div>
      <div className="flex flex-col w-1/4 h-full">
        <img src="/home/min-an1.png" />
        <div className="flex justify-around">
          <p>Alle Gruppen anzeigen</p>
          <img src="/home/arrow.png" />
        </div>
      </div>
    </div>
  );
};

export default CarouselProviderBase;
