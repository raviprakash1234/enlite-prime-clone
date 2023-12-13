import { createContext, useState } from "react";
import { THEME_VARIANT, noop, DefaultTheme } from "@client/shared/constants";

const defaultState = {
  theme: DefaultTheme,
  themeVariant: THEME_VARIANT.LIGHT,
  appData: {},
  setAppData: noop,
  setTheme: noop,
  setThemeVariant: noop,
  appLanguage: "English",
};

export const AppContext = createContext(defaultState);

export const AppContextConsumer = AppContext.Consumer;

export const AppContextProvider = ({ children }) => {
  const setAppData = (key, data) => {
    setState((prevState) => ({
      ...prevState,
      appData: {
        ...prevState.appData,
        [key]: data,
      },
    }));
  };

  const setTheme = (theme) => {
    setState((prevState) => ({
      ...prevState,
      theme,
    }));
  };

  const setThemeVariant = (themeVariant) => {
    setState((prevState) => ({
      ...prevState,
      themeVariant,
    }));
  };

  const setLanguage = (appLanguage) => {
    setState((prevState) => ({
      ...prevState,
      appLanguage,
    }));
  };

  const [state, setState] = useState({
    ...defaultState,
    setAppData,
    setTheme,
    setThemeVariant,
    setLanguage,
  });

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
