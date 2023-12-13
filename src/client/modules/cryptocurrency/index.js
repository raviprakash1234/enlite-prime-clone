import { useState } from "react";
import CryptocurrencyView from "./view";
const defaultState = {
  isSearchBox: false,
};
const Cryptocurrency = ({ themeColor = "#e35981", isDrawerMargin = true, lightColor="" }) => {
  const [state, setState] = useState(defaultState);
  const handleSearch = () => {
    setState((prevState) => ({
      ...prevState,
      isSearchBox: state.isSearchBox ? false : true,
    }));
  };
  return (
    <>
      <CryptocurrencyView
        themeColor={themeColor}
        handleSearch={handleSearch}
        isSearchBox={state.isSearchBox}
        isDrawerMargin={isDrawerMargin}
        lightColor={lightColor}
      />
    </>
  );
};

export default Cryptocurrency;
