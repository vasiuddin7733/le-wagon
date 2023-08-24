import React from "react";

const FindGroupComp = () => {
  const FindGroupComp1 = ({ imgUrl, title, cssClass }) => (
    <div className={`lg:flex lg:flex-col w-full lg:w-1/4 ${cssClass}`}>
      <img src={imgUrl} />
      <div className="flex lg:justify-around">
        <p>{title}</p>
        <img src="/home/arrow.png" />
      </div>
    </div>
  );

  return (
    <div className="w-full flex lg:space-x-5">
      <FindGroupComp1 imgUrl="/home/min-an4.png" title="Depressionsgruppen" />
      <FindGroupComp1
        imgUrl="/home/lil-artsy.png"
        title="Trauergruppen"
        cssClass="hidden md:flex"
      />
      <FindGroupComp1
        imgUrl="/home/liza-summer.png"
        title="Angehörige"
        cssClass="hidden lg:flex"
      />
      <FindGroupComp1
        imgUrl="/home/min-an1.png"
        title="anzeigen"
        cssClass="hidden lg:flex"
      />
    </div>
  );
};

export default FindGroupComp;
