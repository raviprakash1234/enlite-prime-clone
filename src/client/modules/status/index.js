import StatusView from "./view";

const Status = ({ isDrawerMargin = true, themeColor = "#e35981" }) => {
  return (
    <>
      <StatusView isDrawerMargin={isDrawerMargin} themeColor={themeColor} />
    </>
  );
};

export default Status;
