import { useState } from "react";

const usePassword = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getPassword = (checkboxContent, passwordLength) => {
    let charset = "",
      generatedPassword = "";
    const selectedOptions = checkboxContent.filter(
      (checkbox) => checkbox.state
    );

    if (selectedOptions.length === 0) {
      setErrorMessage("Select an option");
      setPassword("");
      return "you have to select atleast one checkbox to generate password";
    }

    selectedOptions.forEach((options) => {
      switch (options.title) {
        case "Uppercase":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Lowercase":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Numbers":
          charset += "0123456789";
          break;
        case "Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomNumber];
    }
    setPassword(generatedPassword);
    setErrorMessage("");
    return "";
  };

  return { password, errorMessage, getPassword };
};

export default usePassword;
