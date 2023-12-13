import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { IconButton, Paper } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import { useLocation } from "react-router-dom";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import "./MyCalender.css";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import "./MyClock.css";
import WbCloudyOutlinedIcon from "@mui/icons-material/WbCloudyOutlined";
import axios from "axios";

const defaultColor = "#e45566";

const StatusView = ({ isDrawerMargin = true, themeColor = "#e35981" }) => {
  const [state, setState] = useState({
    date: new Date(),
    value: new Date(),
    weatherData: null,
  });
  const onChange = (value) => {
    setState((p) => ({
      ...p,
      date: value,
    }));
  };
  const currentPath = useLocation();

  useEffect(() => {
    const interval = setInterval(
      () => setState((p) => ({ ...p, value: new Date() })),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey =process.env.WETHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Noida, Uttar Pradesh, India&appid=${apiKey}&units=metric`
        );
        setState((p) => ({
          ...p,
          weatherData: response.data,
        }));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);
  return (
    <>
      <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ color: `${!!themeColor ? themeColor : defaultColor}` }}
            variant="h4"
          >
            Status
          </Typography>
          <Typography sx={{ marginLeft: "16px" }} variant="body1">
            {currentPath.pathname.split("/")[1] +
              " / " +
              currentPath.pathname.split("/")[2]}
          </Typography>
        </Box>
        <Paper elevation={2}>
          <Box sx={{ padding: "16px", width: "98%" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <IconButton sx={{ backgroundColor: "#fafafa" }}>
                <WatchLaterOutlinedIcon
                  sx={{
                    color: `${!!themeColor ? themeColor : defaultColor}`,
                    fontSize: "24px",
                  }}
                />
              </IconButton>
              <Box>
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  Date & Time
                </Typography>
                <Typography variant="body2">
                  Show current time in analog and digital format, and also
                  current date with calendar
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "30%",
                marginTop: "24px",
                border: "1px solid black",
                width: "700px",
                borderRadius: "8px",
              }}
            >
              <Calendar
                defaultValue="year"
                className="react-calendar react-calendar--selectRange react-calendar-background-color"
                onChange={onChange}
                value={state.date}
              />
              <Box
                sx={{
                  backgroundColor: `${
                    !!themeColor ? themeColor : defaultColor
                  }`,
                  width: "400px",
                  height: "260px",
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                <Clock
                  className="react-clock react-clock--selectRange"
                  // formatHour={(locale, hour) => formatHour(hour, "HH")}
                  renderNumbers={true}
                  value={state.value}
                />
              </Box>
            </Box>
          </Box>
        </Paper>
        <Box sx={{ marginTop: "24px" }}>
          <Paper elevation={2}>
            <Box sx={{ padding: "16px", width: "98%" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <IconButton sx={{ backgroundColor: "#fafafa" }}>
                  <WbCloudyOutlinedIcon
                    sx={{
                      color: `${!!themeColor ? themeColor : defaultColor}`,
                      fontSize: "24px",
                    }}
                  />
                </IconButton>
                <Box>
                  <Typography sx={{ fontWeight: "bold" }} variant="h6">
                    Weather
                  </Typography>
                  <Typography variant="body2">
                    No need to go outside for check weather condition, just stay
                    in the room then this widget will do that
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "inline-block",
                  marginLeft: "5%",
                  marginTop: "24px",
                  borderRadius: "8px",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    width: "700px",
                    height: "300px",
                    borderRadius: "8px",
                    boxShadow: "-5px -5px 5px rgba(0, 0, 0, 0.2)",
                  }}
                  src="/assets/wether.jpg"
                  alt="Wether"
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: " 180px",
                    left: "10px",
                    color: "white",
                    fontSize: "60px",
                    fontWeight: "bold",
                  }}
                  variant="h3"
                >
                  {state.weatherData?.main?.temp}
                  {"\u00b0"}C
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    top: " 220px",
                    left: "10px",
                    color: "white",
                    fontSize: "60px",
                  }}
                >
                  {" "}
                  {state.weatherData?.name}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default StatusView;
