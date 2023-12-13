import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MarketPlaceGrid from "../shared/marketplace-grid";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useLocation } from "react-router-dom";

let defaultColor = "#e35981";
let defaultLightColor = "#f6dbe9";
const BasicView = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
  lightColor = "",
}) => {
  const location = useLocation();
  return (
    <>
      <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ color: `${!!themeColor ? themeColor : defaultColor}` }}
            variant="h4"
          >
            Basic Table
          </Typography>
          <Typography sx={{ marginLeft: "16px" }} variant="body1">
            {location.pathname.split("/")[1] +
              " / " +
              location.pathname.split("/")[2]}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "16px" }}>
          <Paper
            sx={{
              height: "530px",
              "& .MuiPaper-root": {
                position: "absolute",
                top: "360px",
                width: `${!isDrawerMargin ? "82%" : "95%"}`,
              },
            }}
            elevation={2}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: "6px",
              }}
            >
              <Box>
                <IconButton>
                  <MonetizationOnIcon
                    sx={{ color: "#fba630", fontSize: "40px" }}
                  />
                </IconButton>
              </Box>
              <Box sx={{ marginTop: "12px" }}>
                <Typography variant="h6">Stripped Table</Typography>
                <Typography variant="body1">
                  They (allegedly) aid usability in reading tabular data by
                  offering the user a coloured means of separating and
                  differentiating rows from one another
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                border: "1px solid #f8e4ec",
                background: `${!!themeColor ? lightColor : defaultLightColor}`,
                marginLeft: "10px",
                marginRight: "10px",
                borderRadius: "10px",
                height: "50px",
                marginTop: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "8px",
                  marginLeft: "16px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: `${!!themeColor ? themeColor : defaultColor}`,
                  }}
                  variant="h6"
                >
                  Nutrition
                </Typography>
              </Box>
            </Box>
            <MarketPlaceGrid
              themeColor={themeColor}
              lightColor={lightColor}
              isDrawerMargin={isDrawerMargin}
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default BasicView;
