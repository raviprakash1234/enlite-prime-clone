import TopHeadingView from "./view";

const TopHeading = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
  heading = "Icon",
}) => {
  return (
    <>
      <TopHeadingView
        themeColor={themeColor}
        isDrawerMargin={isDrawerMargin}
        heading={heading}
      />
    </>
  );
};

export default TopHeading;
