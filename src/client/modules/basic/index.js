import BasicView from "./view";

const Basic = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
  lightColor = "",
}) => {
  return (
    <>
      <BasicView
        themeColor={themeColor}
        isDrawerMargin={isDrawerMargin}
        lightColor={lightColor}
      />
    </>
  );
};
export default Basic;
