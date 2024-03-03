import React from "react";

const Button = ({ onClick }) => {
  return (
    <div className="pt-6 flex justify-center items-center">
      <button
        onClick={onClick}
        className="group relative inline-flex items-center justify-center "
      >
        <span className="relative px-8 py-4  text-[#424874] shadow-md hover:text-[#424874] text-2xl font-extrabold transition-all ease-in duration-75 bg-[#DCD6F7]  dark:bg-[#1B2937] rounded-md   dark:text-white">
          Time to Generate Password
        </span>
        <div className="hidden group-hover:block">
          <div className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
            <div className="rounded-sm bg-[#424874] py-1 px-2">
              <p className="whitespace-nowrap text-[#DCD6F7] dark:text-white">
                Click here to generate Password
              </p>
            </div>
            <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-[#424874]"></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Button;
