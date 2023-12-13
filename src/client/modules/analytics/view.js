import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import Home from "../home";
import ChartArea from "../shared/area-chart";
import ChartBar from "../shared/bar-chart";
let defaultColor = "#e35981";
let defaultLightColor = "#f6dbe9";
const AnalyticsView = ({ themeColor = "#e35981", isDrawerMargin = true }) => {
  const location = useLocation();

  return (
    <>
      <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ color: `${!!themeColor ? themeColor : defaultColor}` }}
            variant="h4"
          >
            Analytics
          </Typography>
          <Typography sx={{ marginLeft: "16px" }} variant="body1">
            {location.pathname.split("/")[1] +
              " / " +
              location.pathname.split("/")[2]}
          </Typography>
        </Box>
        <ChartArea themeColor={themeColor} isDrawerMargin={isDrawerMargin} />
        <Box sx={{ marginTop: "48px" }}>
          <ChartBar themeColor={themeColor} isDrawerMargin={isDrawerMargin} />
        </Box>
      </Box>
    </>
  );
};

export default AnalyticsView;
