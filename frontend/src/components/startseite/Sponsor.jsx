import React from "react";
import "../../styles/home/homeComponent2.css";

const Sponsor = () => {
  return (
    <div>
      <div className="durchtop">
        <div className="durchtitle">
          <p>Gefördert durch</p>
        </div>
        <div className="durchbild">
          <img src="/home/bildschirmfoto.png" width="100%" />
        </div>
      </div>
      <div className="torstentop">
        <div className="torstentitletop">
          <p className="torstentitle">
            In der von Adrian gegründeten Gruppe, spricht Torsten über seine
            Panikattacken und Merve fühlt sich endlich verstanden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
