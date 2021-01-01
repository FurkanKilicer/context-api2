import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function Button(props) {
  const contextSlide = React.useContext(ThemeContext);

  const {
    bgColor,
    textColor,
    btnColor,
    changeText,
  } = contextSlide.changer;

  const {themeChange} = contextSlide;

  return (
    <div className={`mt-5 border-light ${bgColor} ${textColor}`}>
      <h1 className={`text-center ${textColor}`}>Light-Dark Mode Changer</h1>
      <div class="text-center mt-5">
        <button
          className={`btn text-center btn-lg ${btnColor}`}
          onClick={themeChange}
        >
          {changeText}
        </button>
      </div>
    </div>
  );
}

export default Button;
