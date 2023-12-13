import { useState } from "react";
import HomeView from "./view";

const defaultState = {};

const Home = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
  lightColor = "",
}) => {
  const [state, setState] = useState(defaultState);
  return (
    <>
      <HomeView
        themeColor={themeColor}
        isDrawerMargin={isDrawerMargin}
        lightColor={lightColor}
      />
    </>
  );
};

export default Home;
