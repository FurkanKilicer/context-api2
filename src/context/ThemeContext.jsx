import React from "react";
import { lighter, darker } from "../theme/theme";

const ThemeContext = React.createContext();

function Context(props) {
  const [changer, setChanger] = React.useState(lighter);

  function themeChange() {
    setChanger(changer.theme === "light" ? darker : lighter);
  }
  return (
    <ThemeContext.Provider value={{ changer, themeChange }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { Context, ThemeContext };
