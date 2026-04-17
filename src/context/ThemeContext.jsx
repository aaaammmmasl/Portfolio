import { Children, createContext, useContext } from "react";

const ThemeContext = createContext();

const theme = {
  colors: {
    navbar: "black",
    secondery: "#0f172a",
    text: "#ffffff",
    p: "gray",
    background: "black",
    card: "",
  },
};

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};
