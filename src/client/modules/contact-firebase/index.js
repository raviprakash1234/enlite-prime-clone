import ContactFirebaseView from "./view";

const ContactFireBase = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
  lightColor = "",
}) => {
  return (
    <>
      <ContactFirebaseView
        themeColor={themeColor}
        isDrawerMargin={isDrawerMargin}
        lightColor={lightColor}
      />
    </>
  );
};

export default ContactFireBase;
