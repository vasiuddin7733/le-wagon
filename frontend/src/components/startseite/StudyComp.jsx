import React from "react";

const StudyComp = ({ imgUrl, title, content }) => {
  return (
    <div>
      <img src={imgUrl} />
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default StudyComp;
