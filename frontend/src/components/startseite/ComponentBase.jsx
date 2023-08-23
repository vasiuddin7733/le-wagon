import React from "react";
import "../../styles/home/homeComponent4.css";

const ComponentBase = ({ number, title, content }) => {
  return (
    <div className="flex space-x-10 w-1/3">
      <p className="numbers">{number}</p>
      <div className="space-y-5">
        <p>{title}</p>
        <p className="">{content}</p>
      </div>
    </div>
  );
};

export default ComponentBase;
