import React from "react";
import { ThemeSwitcher } from "..";

const Header = () => {
  return (
    <div className="pt-6 flex items-center justify-center   ">
      <div className="flex items-center space-x-40  shadow-md rounded-xl  bg-[#DCD6F7] pl-20 pr-20 pt-6 pb-6 dark:bg-[#1B2937] dark:border-[#1B2937] dark:shadow-xl max-[718px]:space-x-6 max-[718px]:pl-10 max-[718px]:pr-10">
        <div>
          <h1 className="text-xl font-bold text-[#424874] dark:text-white max-[718px]:text-sm ">
            Password Generator
          </h1>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
