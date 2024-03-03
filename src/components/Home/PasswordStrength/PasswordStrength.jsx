import React from "react";
import "react-toastify/dist/ReactToastify.css";

const PasswordStrength = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;

    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Very Weak";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "V. Strong";
    }
  };
  const passwordStrength = getPasswordStrength();

  if (!passwordStrength) return <React.Fragment />;
  return (
    <div className="pt-2 flex justify-center">
      <div className="flex space-x-52 bg-[#DCD6F7] pt-2 pb-2 pl-6 pr-6  rounded-md shadow-md w-96 dark:bg-[#1B2937]">
        <div className="font-bold text-[#424874] text-sm  dark:text-white">
          Strength:
        </div>
        <div className="text-[#424874] text-right dark:text-white">
          {passwordStrength}
        </div>
      </div>
    </div>
  );
};

export default PasswordStrength;
