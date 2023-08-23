import React from "react";
import "../../styles/home/homeComponent4.css";

const ComponentBase = ({ number, title, content }) => {
  return (
    <div className="flex">
      <p className="numbers">{number}</p>
      <div>
        <p>{title}</p>
        <p className="">{content}</p>
      </div>
    </div>
  );
};

export default ComponentBase;
