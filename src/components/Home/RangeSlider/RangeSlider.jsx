import React from "react";
import "./RangeSlider.css";

const RangeSlider = ({ passwordLength, onChangeHandler, value }) => {
  return (
    <div className="mt-6 flex justify-center items-center">
      <div className="flex flex-col items-start bg-[#DCD6F7] shadow-md pt-4 pb-4 pl-8 pr-8 rounded-lg dark:bg-[#1B2937]">
        <span className=" flex items-center mb-2  ">
          <label className="text-[#424874] mr-4 dark:text-white">
            Character Length:
          </label>
          <h1 className="text-[#424874]  font-extrabold text-3xl dark:text-white">
            {passwordLength}
          </h1>
        </span>
        <div className=" ">
          <input
            type="range"
            min="4"
            max="20"
            value={value}
            onChange={onChangeHandler}
            className="appearance-none w-80 h-4 bg-[#424874] rounded-lg outline-none focus:outline-none  [&::-webkit-slider-thumb]:h-2.5

             [&::-webkit-slider-thumb]:appearance-none
             [&::-webkit-slider-thumb]:bg-white
             [&::-webkit-slider-thumb]:shadow-3xl

             ]
             "
            style={{
              background: "#424874",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
