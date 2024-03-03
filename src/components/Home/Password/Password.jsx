import React from "react";
import { NAME_NAME } from "../../../constants/index.js";
const Password = ({ password, onClick, copied }) => {
  return (
    <div className="pt-6 flex items-center justify-center ">
      <div className=" flex items-center  justify-between rounded-xl shadow-md bg-[#DCD6F7]   pl-12 pt-5 pb-5 pr-12 dark:bg-[#1B2937] dark:border-[#1B2937] dark:shadow-xl">
        <input
          id="input"
          className="bg-[#DCD6F7] font-bold text-[#424874] outline-none border-none dark:bg-[#1B2937] dark:text-white "
          name="password"
          placeholder={NAME_NAME}
          type="text"
          readOnly
          value={password}
        />

        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="17.5"
            viewBox="0 0 448 512"
            className=" text-[#424874]  dark:text-white"
          >
            <path
              fill="currentcolor"
              d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"
            />
          </svg>
          <h4 className="text-[#424874] dark:text-white">
            {copied ? "copied" : "copy"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Password;
