import React from "react";

const BenefitsComp = ({ number, title, content }) => {
  return (
    <div className="flex space-x-10 w-1/3">
      <p className="text-4xl font-medium left-14 text-left text-[#A64D79]">
        {number}
      </p>
      <div className="space-y-5">
        <p>{title}</p>
        <p className="">{content}</p>
      </div>
    </div>
  );
};

export default BenefitsComp;
