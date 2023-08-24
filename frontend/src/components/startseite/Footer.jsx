import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <hr className="bg-black h-0.5 w-4/5" />
      <div className="flex justify-between space-x-20 md:space-x-60 lg:space-x-[70rem]">
        <div className="w-1/2 flex justify-start items-center">
          <img src="/home/together.png" width="100%" />
        </div>
        <div className="w-1/3 space-y-5 flex flex-col justify-end text-right py-5 lg:pb-10">
          <p>Rechtliches</p>
          <a>Über uns</a>
          <a>Impressum</a>
          <a>Datenschutz</a>
          <a>AGB</a>
          <a>Wiederufsrecht</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
