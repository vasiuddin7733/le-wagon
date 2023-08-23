import React from "react";

const SelbstHilfeBase = ({ imgUrl, title, content }) => {
  return (
    <div>
      <img src={imgUrl} />
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default SelbstHilfeBase;
