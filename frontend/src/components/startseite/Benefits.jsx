import React from "react";
import "../../styles/home/homeComponent4.css";
import data from "./benefits-data";
import BenefitsComp from "./BenefitsComp";

const data1 = data.slice(0, 3);
const data2 = data.slice(3);

const Benefits = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <p>Deine Vorteile mit we.together</p>
      </div>
      <div className="space-x-10 vorteile pt-10">
        {data1?.map((item, ind) => (
          <BenefitsComp
            number={item?.number}
            title={item?.title}
            content={item?.content}
          />
        ))}
      </div>
      <div className="space-x-10 vorteile pt-10">
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
