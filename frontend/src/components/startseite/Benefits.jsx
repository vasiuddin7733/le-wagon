import React from "react";
import data from "./benefits-data";
import BenefitsComp from "./BenefitsComp";

const data1 = data.slice(0, 3);
const data2 = data.slice(3);

const Benefits = () => {
  return (
    <div className="lg:flex lg:flex-col justify-center items-center">
      <div>
        <p>Deine Vorteile mit we.together</p>
      </div>
      <div className="lg:flex justify-center items-center w-4/5 pt-10 space-x-10">
        {data1?.map((item, ind) => (
          <BenefitsComp
            number={item?.number}
            title={item?.title}
            content={item?.content}
          />
        ))}
      </div>
      <div className="lg:flex justify-center items-center w-4/5 space-x-10 pt-10">
        {data2?.map((item, ind) => (
          <BenefitsComp
            number={item?.number}
            title={item?.title}
            content={item?.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
