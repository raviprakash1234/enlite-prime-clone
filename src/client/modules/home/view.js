import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import IconButton from "@mui/material/IconButton";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CreateIcon from "@mui/icons-material/Create";
import FilterIcon from "@mui/icons-material/Filter";
import ChartArea from "../shared/area-chart";
import HomeTable from "../shared/home-table";
import { useCallback, useEffect, useRef, useState } from "react";
import MyTaskTable from "../shared/my-task-table";
let defaultColor = "#e35981";
let defaultLightColor = "#f6dbe9";
let defaultMargin = true;
const HomeView = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
  lightColor = "",
}) => {
  // useEffect(() => {
  //   const onScroll = () => pageScrollUP()
  //   // clean up code
  //   window.removeEventListener("scroll", onScroll);
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
  return (
    <>
      <Box
        sx={!isDrawerMargin && defaultMargin && { marginLeft: "255px" }}
        // onScroll={() => onScroll()}
      >
        <Box sx={{ display: "flex", gap: "8px" }}>
          <Box
            sx={{
              border: `1px solid ${!!themeColor ? themeColor : defaultColor}`,
              height: "120px",
              width: `${!isDrawerMargin ? "350px" : "420px"}`,
              borderRadius: "10px",
              backgroundColor: `${!!themeColor ? themeColor : defaultColor}`,
              color: "white",
              marginTop: "8px",
              padding: "4px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ marginTop: "40px" }} variant="h3">
                  207
                </Typography>
                <Typography variant="body1">Subscribes</Typography>
              </Box>
              <Box sx={{ marginTop: "28px" }}>
                <IconButton
                  sx={{
                    ":hover": {
                      background: "red",
                    },
                  }}
                >
                  <OndemandVideoIcon
                    sx={{
                      // color: `${!!themeColor ? themeColor : defaultColor}`,
                      color: "gray",
                      fontSize: "80px",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: `1px solid ${!!themeColor ? themeColor : defaultColor}`,
              height: "120px",
              width: `${!isDrawerMargin ? "350px" : "420px"}`,
              borderRadius: "10px",
              color: `${!!themeColor ? themeColor : defaultColor}`,
              marginTop: "8px",
              padding: "4px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ marginTop: "40px" }} variant="h3">
                  300
                </Typography>
                <Typography variant="body1">Followers</Typography>
              </Box>
              <Box sx={{ marginTop: "28px" }}>
                <IconButton>
                  <CreateIcon
                    sx={{
                      color: `${!!themeColor ? themeColor : defaultColor}`,
                      fontSize: "80px",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: `1px solid ${!!themeColor ? themeColor : defaultColor}`,
              height: "120px",
              width: `${!isDrawerMargin ? "350px" : "420px"}`,
              borderRadius: "10px",
              color: `${!!themeColor ? themeColor : defaultColor}`,
              marginTop: "8px",
              padding: "4px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ marginTop: "40px" }} variant="h3">
                  67
                </Typography>
                <Typography variant="body1">Total Posts</Typography>
              </Box>
              <Box sx={{ marginTop: "28px" }}>
                <IconButton>
                  <PeopleAltIcon
                    sx={{
                      color: `${!!themeColor ? themeColor : defaultColor}`,
                      fontSize: "80px",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: `1px solid ${!!themeColor ? themeColor : defaultColor}`,
              height: "120px",
              width: `${!isDrawerMargin ? "350px" : "420px"}`,
              borderRadius: "10px",
              color: `${!!themeColor ? themeColor : defaultColor}`,
              marginTop: "8px",
              padding: "4px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ marginTop: "40px" }} variant="h3">
                  70
                </Typography>
                <Typography variant="body1">Total Articles</Typography>
              </Box>
              <Box sx={{ marginTop: "24px" }}>
                <IconButton>
                  <FilterIcon
                    sx={{
                      color: `${!!themeColor ? themeColor : defaultColor}`,
                      fontSize: "80px",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: "48px" }}>
          <ChartArea themeColor={themeColor} />
        </Box>
        <Box
          sx={{
            display: "flex",
            marginLeft: `${!isDrawerMargin ? "16px" : "100px"}`,
            alignItems: "center",
            marginTop: "48px",
          }}
        >
          <HomeTable themeColor={themeColor} />
          <MyTaskTable themeColor={themeColor} />
        </Box>
      </Box>
    </>
  );
};

export default HomeView;
