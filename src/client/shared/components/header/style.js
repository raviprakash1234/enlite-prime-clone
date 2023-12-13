import { globalStyles } from "@client/shared/constants";
const { display, flex } = globalStyles;

const style = {
  drawerPaper: {
    height: "100%",
    width: "350px",
    backgroundColor : "#fafafa",
  },
  nameWrapper: {
    padding: "12px 14px",
    marginBottom: "16px",
    backgroundColor: "primary.dark",
    ...display.flex,
  },
  icon: {
    color: "black",
    ...flex.justify.end,
  },
  role: {
    fontSize: "12px",
  },
  userData: {
    marginLeft: "18px",
    color: "white",
  },
  themeColor : { 
    display: "flex",
    flexDirection: "row",
    flexWrap : "wrap",
    borderRadius: "15px",
    width : "85%",
    marginLeft:"20px",
    alignItems : "centre",
    marginBottom : "15px"
  },
  themeBox:{
    height:"90px",
    width : "80px",
    margin : "7px",
    borderRadius : "15px",
  }
};

export default style;
