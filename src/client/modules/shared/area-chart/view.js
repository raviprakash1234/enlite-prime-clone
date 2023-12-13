import React, { PureComponent } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import TimelineIcon from "@mui/icons-material/Timeline";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import IconButton from "@mui/material/IconButton";
import DvrIcon from "@mui/icons-material/Dvr";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HealingIcon from "@mui/icons-material/Healing";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LinearProgress from "@mui/material/LinearProgress";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
let defaultColor = "#e35981";
const AreaChartView = ({ themeColor = "#e35981", isDrawerMargin = true }) => {
  // console.log(`themeColor`, themeColor);
  return (
    <>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <IconButton sx={{ background: "#E2E3E3" }}>
          <TimelineIcon
            sx={{
              color: `${!!themeColor ? themeColor : defaultColor}`,
              fontSize: "40px",
            }}
          />
        </IconButton>
        <Typography sx={{ fontWeight: "bold" }} variant="h6">
          Performance Indicator
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "150px" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}
            >
              <Box sx={{ border: "1px solid purple", borderRadius: "30px" }}>
                <IconButton>
                  <DvrIcon
                    sx={{
                      fontSize: "35px",
                      color: `${!!themeColor ? themeColor : defaultColor}`,
                    }}
                  />
                </IconButton>
              </Box>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{ fontWeight: "bold", color: "purple" }}
                  variant="body1"
                >
                  40
                </Typography>
                <Typography variant="body1">Attends</Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}
            >
              <Box sx={{ border: "1px solid #7cb342", borderRadius: "30px" }}>
                <IconButton>
                  <CheckCircleIcon
                    sx={{
                      fontSize: "35px",
                      color: `${!!themeColor ? themeColor : defaultColor}`,
                    }}
                  />
                </IconButton>
              </Box>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{ fontWeight: "bold", color: "#7cb342" }}
                  variant="body1"
                >
                  125
                </Typography>
                <Typography variant="body1">Attends</Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}
            >
              <Box sx={{ border: "1px solid #e35981", borderRadius: "30px" }}>
                <IconButton>
                  <HealingIcon
                    sx={{
                      fontSize: "35px",
                      color: `${!!themeColor ? themeColor : defaultColor}`,
                    }}
                  />
                </IconButton>
              </Box>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{ fontWeight: "bold", color: "#e35981" }}
                  variant="body1"
                >
                  17
                </Typography>
                <Typography variant="body1">Attends</Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}
            >
              <Box sx={{ border: "1px solid #536dfe", borderRadius: "30px" }}>
                <IconButton>
                  <LocalActivityIcon
                    sx={{
                      fontSize: "35px",
                      color: `${!!themeColor ? themeColor : defaultColor}`,
                    }}
                  />
                </IconButton>
              </Box>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{ fontWeight: "bold", color: "#536dfe" }}
                  variant="body1"
                >
                  18
                </Typography>
                <Typography variant="body1">Referrals</Typography>
              </Box>
            </Box>
          </Box>
          <AreaChart
            width={800}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#5b96e5"
              fill="#5b96e5"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#bf83cf"
              fill="#bf83cf"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#8273eb"
              fill="#8273eb"
            />
          </AreaChart>
        </Box>
        <Box sx={{ width: "100%", paddingRight: "16px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton>
              <FilterCenterFocusIcon />
            </IconButton>
            <Typography variant="body2">ACHIEVEMENT TARGET</Typography>
          </Box>

          <hr />
          <Typography sx={{ paddingTop: "32px" }} variant="body1">
            Finish 100 Tasks
          </Typography>
          <LinearProgress variant="determinate" value={20} color="error" />
          <Typography sx={{ paddingTop: "32px" }} variant="body1">
            Get 10 attending
          </Typography>

          <LinearProgress variant="determinate" value={30} color="primary" />
          <Typography sx={{ paddingTop: "32px" }} variant="body1">
            Get less than 10 complaint
          </Typography>
          <LinearProgress variant="determinate" value={80} color="inherit" />
          <Typography sx={{ paddingTop: "32px" }} variant="body1">
            Upload 5 videos or articles
          </Typography>
          <LinearProgress variant="determinate" value={60} color="info" />
          <Typography sx={{ paddingTop: "32px" }} variant="body1">
            Completing profile
          </Typography>
          <LinearProgress variant="determinate" value={10} color="success" />
        </Box>
      </Box>
    </>
  );
};

export default AreaChartView;
