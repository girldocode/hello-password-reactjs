import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usePassword from "../../../hook/usePassword";
import Box from "../../shared & ui/box/Box";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Password from "../Password/Password";
import PasswordStrength from "../PasswordStrength/PasswordStrength";
import RangeSlider from "../RangeSlider/RangeSlider";

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(10);
  const [checkboxContent, setCheckboxContent] = useState([
    { title: "Uppercase ", state: true },
    { title: "Lowercase", state: false },
    { title: "Numbers", state: false },
    { title: "Symbols", state: true },
  ]);

  const [copied, setCopied] = useState(false);

  const checkboxHandler = (i) => {
    const updated = [...checkboxContent];
    updated[i].state = !updated[i].state;
    setCheckboxContent(updated);
  };

  const onChangeHandler = (e) => {
    setPasswordLength(e.target.value);
  };

  const { password, getPassword } = usePassword(passwordLength);

  const copy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    if (setCopied) {
      toast.success("password copied to clipboard!");
    }
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const generatePassword = () => {
    const errorMessage = getPassword(checkboxContent, passwordLength);
    if (errorMessage) {
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    getPassword(checkboxContent, passwordLength);
  }, [passwordLength]);

  return (
    <div className="">
      <Header />
      <Password password={password} onClick={copy} copied={copied} />
      <RangeSlider
        passwordLength={passwordLength}
        onChangeHandler={onChangeHandler}
        value={passwordLength}
        password={password}
      />
      <div className="pt-4 flex justify-center items-center ">
        <div className="grid grid-cols-2  gap-x-28 gap-y-10 bg-[#DCD6F7] shadow-md  dark:bg-[#1B2937] p-4 rounded-lg ">
          {checkboxContent.map((checkbox, index) => (
            <Box
              key={index}
              title={checkbox.title}
              onChange={() => checkboxHandler(index)}
              state={checkbox.state}
            />
          ))}
        </div>
      </div>
      <PasswordStrength password={password} />
      <Button onClick={generatePassword} />
    </div>
  );
};

export default PasswordGenerator;
