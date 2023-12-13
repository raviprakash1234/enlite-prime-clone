import LineChartView from "./view";

const LineChartBox = ({ isDrawerMargin = true, bg_color = "a152b0" }) => {
  return (
    <>
      <LineChartView isDrawerMargin={isDrawerMargin} bg_color={bg_color} />
    </>
  );
};

export default LineChartBox;
