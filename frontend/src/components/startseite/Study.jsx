import React from "react";
import StudyComp from "./StudyComp";
import data from "./study-data";

const Study = () => {
  return (
    <div>
      <div>
        <p>Gemeinsam Selbsthilfe ermöglichen</p>
      </div>
      {data?.map((item, index) => (
        <StudyComp
          imgUrl={item?.imgUrl}
          title={item?.title}
          content={item?.content}
        />
      ))}
    </div>
  );
};

export default Study;
