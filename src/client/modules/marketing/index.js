import { useState } from "react";
import MarketingView from "./view";

const defaultState = {};

const Marketing = ({ themeColor = "#e35981", isDrawerMargin = true }) => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <MarketingView isDrawerMargin={isDrawerMargin} themeColor={themeColor} />
    </>
  );
};

export default Marketing;
