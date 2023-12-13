import BarChartView from "./view";


const ChartBar = ({ themeColor = "#e35981", isDrawerMargin = true }) => {
  return (
    <>
      <BarChartView themeColor={themeColor} isDrawerMargin={isDrawerMargin} />
    </>
  );
};

export default ChartBar;