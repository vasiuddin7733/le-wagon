import React from "react";
import StudyComp from "./StudyComp";
import data from "./study-data";

const Study = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start text=center text-[#000000] text-lg md:text-xl lg:text-3xl font-medium">
        <div className="lg:pl-48 pb-5">
          <p>Gemeinsam Selbsthilfe ermöglichen</p>
        </div>
      </div>
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div className="lg:flex lg:w-4/5 lg:space-x-20 px-5 lg:px-0">
          {data?.map((item, index) => (
            <StudyComp
              imgUrl={item?.imgUrl}
              title={item?.title}
              content={item?.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Study;
