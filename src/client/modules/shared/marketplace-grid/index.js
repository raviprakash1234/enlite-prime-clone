import MarketPlaceGridView from "./view";

const MarketPlaceGrid = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
  lightColor = "",
}) => {
  return (
    <>
      <MarketPlaceGridView
        themeColor={themeColor}
        isDrawerMargin={isDrawerMargin}
        lightColor={lightColor}
      />
    </>
  );
};

export default MarketPlaceGrid;
