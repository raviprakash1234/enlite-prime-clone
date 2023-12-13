import { globalStyles } from "@client/shared/constants";
const { display, background, flex, text } = globalStyles;

const styles = {
  drawerClose: {
    // ...background.color.primary.dark,
    backgroundColor: "#EAEAEA",
    ...flex.justify.between,
    maxWidth: "200px",
    minWidth: "56px",
    cursor: "pointer",
  },
  content: {
    marginLeft: "80px",
  },
  drawerOpen: {
    width: "248px",
    ...background.color.primary.dark,
    ...flex.justify.between,
    zIndex: (theme) => theme.zIndex.drawer + 2,
    cursor: "pointer",
  },
  iconContainer: {
    width: "100%",
    ...text.align.center,
  },
  container: {
    width: "100%",
    flexDirection: "column",
    ...display.flex,
    ...flex.align.center,
  },
  drawerList: {
    ...display.flex,
    flexDirection: "column",
    marginTop: "14px",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "start",
  },
  drawerButtonActive: {
    backgroundColor: "white",
    padding: "8px 20px",
    color: "primary.dark",
    marginTop: "18px",
    "&:hover": {
      backgroundColor: "#E32D46 !important",
    },
    minWidth: "168px",
    justifyContent: "start",
  },
  drawerButtonClose: {
    backgroundColor: "#E32D46",
    minWidth: "40px",
    minHeight: "40px",
    margin: "10px",
  },
  drawerButton: {
    marginTop: "12px",
    color: "white",
  },
  drawerButtonInActive: {
    padding: "8px 20px",
    marginTop: "16px",
    color: "white",
    justifyContent: "start",
  },
  logoOpen: {
    // marginTop: "8px",
    height: "44px",
    width: "114px",
  },
  logo: {
    width: "28px",
    height: "28px",
    // marginTop: "12px",
  },
};

export default styles;
