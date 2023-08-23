import React from "react";
import "../../styles/home/homeComponent5.css";

const Group = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="funktionierttop">
        <div className="funktioniert">
          <p>So funktioniert we.together</p>
        </div>
        <div>
          <div className="flex space-y-10">
            <img src="/home/old_man.png" width="50%" />
            <div className="">
              <p className="funktionierttitle">Finde deine Gruppe</p>
              <p className="funktioniercontent">
                Finde aus zahlreichen Gruppen, die passende(n) für Dich und
                tausche Dich online, in regelmäßigen Terminen, mit anderen
                Betroffene aus, die in der gleichen Situation sind wie Du.
              </p>
              <div className="">
                <button className="funktioniertbutton">Gruppe finden</button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <p className="funktionierttitle">Finde deine Gruppe</p>
              <p lassName="funktioniercontent">
                Finde aus zahlreichen Gruppen, die passende(n) für Dich und
                tausche Dich online, in regelmäßigen Terminen, mit anderen
                Betroffene aus, die in der gleichen Situation sind wie Du.
              </p>
              <div className="">
                <button className="funktioniertbutton">Gruppe starten</button>
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
