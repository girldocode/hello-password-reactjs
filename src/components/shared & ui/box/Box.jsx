import React from "react";

const Box = ({ title, state, onChange }) => {
  return (
    <div className="flex space-x-4 items-center">
      <div className="  dark:bg-black/10 ">
        <label className="text-white ">
          <input
            className="  dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4  accent-[#424874]"
            type="checkbox"
            onChange={onChange}
            checked={state}
          />
        </label>
      </div>

      <div>
        <h1 className="text-[#424874] text-lg dark:text-white">{title}</h1>
      </div>
    </div>
  );
};

export default Box;
