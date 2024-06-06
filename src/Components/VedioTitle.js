import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[17%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="py-6 text-md w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-2 px-10 text-lg rounded-lg hover:bg-opacity-80">
          {" "}
          ▷ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-8 text-lg opacity-80 hover:bg-opacity-60 rounded-lg">
          {" "}
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
