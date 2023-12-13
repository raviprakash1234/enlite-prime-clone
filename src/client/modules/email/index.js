import { useState } from "react";
import EmailView from "./view";

const defaultState = {};

const Email = ({
  isDrawerMargin = true,
  themeColor = "#e35981",
  lightColor = "",
}) => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <EmailView
        isDrawerMargin={isDrawerMargin}
        themeColor={themeColor}
        lightColor={lightColor}
      />
    </>
  );
};

export default Email;
