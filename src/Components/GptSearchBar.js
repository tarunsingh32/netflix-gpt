import React, { useState } from "react";
import lang from "../Utils/langChange";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageKey = useSelector((store)=> store.config.lang);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="pt-[13%] flex justify-center">
      <form className="w-1/2 bg-transparent grid grid-cols-12">
        <input
          type="text"
          className={`col-span-9 p-4 m-3 text-lg text-white rounded-lg bg-transparent border-2 ${
            isFocused ? "border-red-700" : "border-gray-400"
          } focus:outline-none`}
          placeholder={lang[languageKey].gptplaceholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button className="col-span-3 m-3 ml-0 px-1 py-2 text-lg bg-red-700 text-white rounded-lg">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
