import React from "react";
import data from "./benefits-data";
import BenefitsComp from "./BenefitsComp";

const data1 = data.slice(0, 3);
const data2 = data.slice(3);

const Benefits = () => {
  return (
    <div>
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center text-2xl lg:text-3xl font-medium px-5 lg:px-0">
        <p className="w-full lg:w-4/5 px-5 lg:px-0">
          Deine Vorteile mit we.together
        </p>
      </div>
      <div className="w-full lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div className="w-full lg:w-4/5 lg:flex lg:justify-center lg:items-center pt-5 lg:pt-10 lg:space-x-10">
          {data1?.map((item, ind) => (
            <BenefitsComp
              number={item?.number}
              title={item?.title}
              content={item?.content}
            />
          ))}
        </div>
        <div className="w-full lg:w-4/5 lg:flex lg:justify-center lg:items-center space-y-5 lg:space-y-0 lg:space-x-10 lg:pt-10">
          {data2?.map((item, ind) => (
            <BenefitsComp
              number={item?.number}
              title={item?.title}
              content={item?.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
