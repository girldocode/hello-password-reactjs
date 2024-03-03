import React, { useState } from "react";
import useDarkSide from "../../../hook/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="">
        <button checked={darkSide} onChange={toggleDarkMode}>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <span className="mr-4 text-sm font-medium text-[#424874] dark:text-gray-300">
              Bright
            </span>
            <div className="relative w-11 h-6 bg-[#424874] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#DCD6F7] dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-200"></div>
            <span className="ms-3 text-sm font-medium text-[#424874] dark:text-gray-300">
              Dark
            </span>
          </label>
        </button>
      </div>
    </>
  );
}
