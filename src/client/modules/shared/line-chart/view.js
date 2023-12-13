import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import MovingIcon from "@mui/icons-material/Moving";
const data = [
  {
    name: "Page A",
    uv: 2000,
    pv: 400,
    amt: 400,
  },
  {
    name: "Page B",
    uv: 1000,
    pv: 298,
    amt: 210,
  },
  {
    name: "Page C",
    uv: 500,
    pv: 6800,
    amt: 290,
  },
  {
    name: "Page D",
    uv: 780,
    pv: 1908,
    amt: 500,
  },
  {
    name: "Page E",
    uv: 790,
    pv: 2800,
    amt: 181,
  },
];
const LineChartView = ({ isDrawerMargin = true, bg_color = "a152b0" }) => {
  return (
    <>
      <Paper
        sx={{
          height: "200px",
          width: `${!isDrawerMargin ? "720px" : "850px"}`,
          marginTop: "12px",
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
            <IconButton
              sx={{
                border: "1px solid #fba630",
                background: "#fba630",
              }}
            >
              <CurrencyBitcoinIcon sx={{ color: "white", fontSize: "40px" }} />
            </IconButton>
          </Box>
          <Box sx={{ marginTop: "12px" }}>
            <Typography variant="h6">Bitcoin</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <MovingIcon sx={{ color: "#56b35a" }} />
              </IconButton>
              <Typography
                sx={{ fontWeight: "bold", color: "#56b35a" }}
                variant="body1"
              >
                5.6%
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ marginLeft: "200px" }} variant="h3">
              $ 216
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: `${!isDrawerMargin ? "720px" : "850px"}`,
            height: "100px",
            backgroundColor: `#${bg_color}`,
            position: "relative",
            top: 10,
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        >
          <ResponsiveContainer width="50%" height="100%">
            <LineChart width={100} height={100} data={data}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#fff"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </>
  );
};

export default LineChartView;
