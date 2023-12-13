import InfographicsView from "./view";

const Infographics = ({ themeColor = "#e35981", isDrawerMargin = true }) => {
  return (
    <>
      <InfographicsView isDrawerMargin={isDrawerMargin} themeColor={themeColor} />
    </>
  );
};

export default Infographics;
