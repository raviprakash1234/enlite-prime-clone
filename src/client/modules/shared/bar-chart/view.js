import { Box } from "@mui/system";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import IconButton from "@mui/material/IconButton";
import DvrIcon from "@mui/icons-material/Dvr";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HealingIcon from "@mui/icons-material/Healing";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LinearProgress from "@mui/material/LinearProgress";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import Typography from "@mui/material/Typography";
import TimelineIcon from "@mui/icons-material/Timeline";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ChartPie from "../pie-chart";

const data = [
  {
    date: "2000-01",
    Fashions: 4000,
    Toys: 2400,
    Electronics: 500,
    Vouchers: 800,
    amt: 2400,
  },
  {
    date: "2000-02",
    Fashions: 3000,
    Toys: 1398,
    Electronics: 1000,
    Vouchers: 500,
    amt: 2210,
  },
  {
    date: "2000-03",
    Fashions: 2000,
    Toys: 9800,
    Electronics: 1500,
    Vouchers: 1800,
    amt: 2290,
  },
  {
    date: "2000-04",
    Fashions: 2780,
    Toys: 3908,
    Electronics: 2500,
    Vouchers: 900,
    amt: 2000,
  },
  {
    date: "2000-05",
    Fashions: 1890,
    Toys: 4800,
    Electronics: 500,
    Vouchers: 800,
    amt: 2181,
  },
  {
    date: "2000-06",
    Fashions: 2390,
    Toys: 3800,
    Electronics: 500,
    Vouchers: 800,
    amt: 2500,
  },
  {
    date: "2000-07",
    Fashions: 3490,
    Toys: 4300,
    Electronics: 500,
    Vouchers: 800,
    amt: 2100,
  },
  {
    date: "2000-08",
    Fashions: 4000,
    Toys: 2400,
    Electronics: 500,
    Vouchers: 800,
    amt: 2400,
  },
  {
    date: "2000-09",
    Fashions: 3000,
    Toys: 1398,
    Electronics: 500,
    Vouchers: 800,
    amt: 2210,
  },
  {
    date: "2000-10",
    Fashions: 2000,
    Toys: 9800,
    Electronics: 500,
    Vouchers: 800,
    amt: 2290,
  },
  {
    date: "2000-11",
    Fashions: 2780,
    Toys: 3908,
    Electronics: 500,
    Vouchers: 800,
    amt: 2000,
  },
  {
    date: "2000-12",
    Fashions: 1890,
    Toys: 4800,
    Electronics: 500,
    Vouchers: 800,
    amt: 2181,
  },
];

const monthTickFormatter = (tick) => {
  const date = new Date(tick);

  return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;
  const isMidMonth = month % 3 === 1;

  if (month % 3 === 1) {
    return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};
let defaultColor = "#e35981";
const BarChartView = ({ themeColor = "#e35981", isDrawerMargin = true }) => {
  return (
    <>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <IconButton>
          <EqualizerIcon sx={{ color: "pink", fontSize: "40px" }} />
        </IconButton>
        <Typography sx={{ fontWeight: "bold" }} variant="h6">
          Product Sales Stats
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "150px",
              mb: "40px",
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}
            >
              <Box sx={{ border: "1px solid purple", borderRadius: "30px" }}>
                <IconButton>
                  <DvrIcon sx={{ fontSize: "35px", color: `${!!themeColor ? themeColor : defaultColor}` }} />
                </IconButton>
              </Box>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{ fontWeight: "bold", color: "purple" }}
                  variant="body1"
                >
                  8000
                </Typography>
                <Typography variant="body1">Toys</Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}
            >
              <Box sx={{ border: "1px solid #7cb342", borderRadius: "30px" }}>
                <IconButton>
                  <CheckCircleIcon
                    sx={{ fontSize: "35px", color: `${!!themeColor ? themeColor : defaultColor}` }}
                  />
                </IconButton>
              </Box>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{ fontWeight: "bold", color: "#7cb342" }}
                  variant="body1"
                >
                  6400
                </Typography>
                <Typography variant="body1">Fashions</Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}
            >
              <Box sx={{ border: "1px solid #e35981", borderRadius: "30px" }}>
                <IconButton>
                  <HealingIcon sx={{ fontSize: "35px", color: `${!!themeColor ? themeColor : defaultColor}` }} />
                </IconButton>
              </Box>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{ fontWeight: "bold", color: "#e35981" }}
                  variant="body1"
                >
                  5229
                </Typography>
                <Typography variant="body1">Electronics</Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}
            >
              <Box sx={{ border: "1px solid #536dfe", borderRadius: "30px" }}>
                <IconButton>
                  <LocalActivityIcon
                    sx={{ fontSize: "35px", color: `${!!themeColor ? themeColor : defaultColor}` }}
                  />
                </IconButton>
              </Box>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{ fontWeight: "bold", color: "#536dfe" }}
                  variant="body1"
                >
                  3478
                </Typography>
                <Typography variant="body1">Vouchers</Typography>
              </Box>
            </Box>
          </Box>
          <BarChart
            width={800}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={renderQuarterTick}
              height={1}
              scale="band"
              xAxisId="quarter"
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Toys" fill="#ed507a" />
            <Bar dataKey="Fashions" fill="#546bfa" />
            <Bar dataKey="Electronics" fill="#04a9f4" />
            <Bar dataKey="Vouchers" fill="#3a9689" />
          </BarChart>
        </Box>
        <Box sx={{ width: "100%", paddingRight: "16px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <CardGiftcardIcon sx={{ color: "#ae3958" }} />
            </IconButton>
            <Typography variant="body2">TODAY SALES</Typography>
          </Box>

          <hr />
          <ChartPie />
        </Box>
      </Box>
    </>
  );
};

export default BarChartView;
