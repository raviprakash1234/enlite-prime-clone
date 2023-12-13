import AnalyticsView from "./view";

const Analytics = ({ themeColor = "#e35981", isDrawerMargin = true }) => {
  return (
    <>
      <AnalyticsView themeColor={themeColor} isDrawerMargin={isDrawerMargin} />
    </>
  );
};

export default Analytics;
