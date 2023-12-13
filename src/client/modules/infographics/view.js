import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TopHeading from "../shared/top-heading";
import LineChartBox from "../shared/line-chart";
let defaultColor = "#e35981";
const InfographicsView = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
}) => {
  return (
    <>
      <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ color: `${!!themeColor ? themeColor : defaultColor}` }}
            variant="h4"
          >
            Infographics
          </Typography>
          <Typography sx={{ marginLeft: "16px" }} variant="body1">
            App / Dashboard / Infographics
          </Typography>
        </Box>
        <TopHeading
          themeColor={themeColor}
          isDrawerMargin={isDrawerMargin}
          heading="Icon"
        />
        <Box sx={{ marginTop: "32px" }}>
          <TopHeading
            themeColor={themeColor}
            isDrawerMargin={isDrawerMargin}
            heading="Chart"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginTop: "32px",
          }}
        >
          <Box>
            <LineChartBox
              themeColor={themeColor}
              isDrawerMargin={isDrawerMargin}
              bg_color="a152b0"
            />
            <LineChartBox
              themeColor={themeColor}
              isDrawerMargin={isDrawerMargin}
              bg_color="e35981"
            />
          </Box>
          <Box>
            <LineChartBox
              themeColor={themeColor}
              isDrawerMargin={isDrawerMargin}
              bg_color="7cb342"
            />
            <LineChartBox
              themeColor={themeColor}
              isDrawerMargin={isDrawerMargin}
              bg_color="536dfe"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InfographicsView;
