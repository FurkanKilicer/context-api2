import React from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer(props) {
 const contextSlide = React.useContext(ThemeContext);

  const { bgColor, textColor } = contextSlide.changer;
  return (
    <footer
      className={`bg-light text-center text-lg-start jumbotron mk shadow-lg mb-0 ${bgColor} ${textColor}`}
    >
      <div className={`text-center p-3 border-light ${bgColor} ${textColor}`}>
        Coded By Furkan Kılıçer
      </div>
    </footer>
  );
}
