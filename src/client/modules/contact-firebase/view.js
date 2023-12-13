import Contact from "../contact";

const ContactFirebaseView = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
  lightColor = "",
}) => {
  return (
    <>
      <Contact
        themeColor={themeColor}
        isDrawerMargin={isDrawerMargin}
        lightColor={lightColor}
      />
    </>
  );
};

export default ContactFirebaseView;
