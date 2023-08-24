import React from "react";

const StudyComp = ({ imgUrl, title, content }) => {
  return (
    <div className="lg:flex lg:flex-col lg:w-1/3 space-y-5">
      <img src={imgUrl} className="h-96" width="100%" />
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default StudyComp;
