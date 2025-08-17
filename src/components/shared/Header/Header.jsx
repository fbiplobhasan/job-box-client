import React from "react";

const Header = ({ title, subTitle }) => {
  return (
    <div className="py-8 px-4 text-center rounded-b-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
      {subTitle && (
        <p className="text-sm md:text-lg text-gray-600">{subTitle}</p>
      )}
    </div>
  );
};

export default Header;
