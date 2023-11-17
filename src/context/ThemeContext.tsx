import { createContext, useState } from "react";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../GlobalStyle";

interface ThemeContextProps {
  lightMode: boolean;
  toggleMode: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  lightMode: false,
  toggleMode: () => {},
});

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [lightMode, setLightMode] = useState(false);

  //TOOD: save lightMode to localStorage

  const toggleMode = () => {
    setLightMode((prev) => !prev);
  };

  const lightTheme = {
    bg: "hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
    element: "hsl(0, 0%, 100%)",
    iconBg: "rgba(0, 0, 0, 0.2)",
    iconShadow: "0px 0px 20px -4px rgba(0, 0, 0, 0.8)",
    placeholder: "hsl(0, 0%, 52%)",
    hover: "hsl(0, 0%, 90%)",
  };

  const darkTheme = {
    bg: "hsl(207, 26%, 17%)",
    text: "hsl(0, 0%, 100%)",
    element: "hsl(209, 23%, 22%)",
    iconBg: "rgba(255, 255, 4, 0.2)",
    iconShadow: "0px 0px 20px -4px rgba(255, 255, 4, 0.8)",
    placeholder: "hsl(0, 0%, 100%)",
    hover: "hsl(209, 23%, 27%)",
  };

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{ lightMode, toggleMode }}>
        <GlobalStyle theme={lightMode ? lightTheme : darkTheme} />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
