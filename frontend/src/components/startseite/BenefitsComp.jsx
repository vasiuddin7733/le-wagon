import React from "react";

const BenefitsComp = ({ number, title, content }) => {
  return (
    <div className="flex space-x-5 lg:space-x-10 w-full lg:w-1/3 px-10 lg:px-0">
      <p className="text-4xl lg:text-6xl font-medium text-center lg:text-left text-[#A64D79] leading-10 tracking-tight">
        {number}
      </p>
      <div className="lg:space-y-5 ">
        <p className="font-medium text-xl lg:text-2xl">{title}</p>
        <p className="">{content}</p>
      </div>
    </div>
  );
};

export default BenefitsComp;
