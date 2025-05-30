import React from "react";

export const BlackWall = ({ imageSrc: BlackComponent }) => {
  return (
    <div className="relative">
      <BlackComponent className="w-full h-36 object-cover" />
      <div className="absolute top-2 right-2 bg-white/20 rounded-full p-1"></div>
    </div>
  );
};
