import React from "react";
import StudyComp from "./StudyComp";
import data from "./study-data";

const Study = () => {
  return (
    <div>
      <div className="lg:flex lg:flex-col justify-start items-start">
        <p>Gemeinsam Selbsthilfe ermöglichen</p>
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
