import EmailFirebaseView from "./view";

const EmailFirebase = ({
  isDrawerMargin = true,
  themeColor = "#e35981",
  lightColor = "",
}) => {
  return (
    <>
      <EmailFirebaseView
        themeColor={themeColor}
        isDrawerMargin={isDrawerMargin}
        lightColor={lightColor}
      />
    </>
  );
};

export default EmailFirebase;
