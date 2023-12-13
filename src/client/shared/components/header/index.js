import React, {
  useState,
  useCallback,
  useEffect,
  useContext,
  useRef,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import { About } from "@client/shared/components";
import { decodeToken, getToken, removeToken } from "@client/utils";
import { AppService } from "@client/shared/services";
import { AppContext } from "@client/shared/contexts";
import {
  globalStyles,
  THEME_VARIANT,
  sessionExpireMsg,
} from "@client/shared/constants";

import style from "./style";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import PaletteIcon from "@mui/icons-material/Palette";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import Switch from "@mui/material/Switch";
import FormatTextdirectionLToRIcon from "@mui/icons-material/FormatTextdirectionLToR";
import CloseIcon from "@mui/icons-material/Close";
let defaultColor = "#e35981";
const defaultState = {
  open: false,
  version: {},
  role: {},
  licenseExpiresOn: "",
  fullScreen: false,
  type: "",
  checked: false,
  checked1: false,
};

export default function Header({
  elements = [],
  position = "sticky",
  responsive = true,
  isDrawerOpen = false,
  handlThemeChange = () => {},
  handleLoginPage = () => {},
  themeColor = "#e35981",
}) {
  const navigate = useNavigate();
  const currentPath = useLocation();
  const { themeVariant, setThemeVariant } = useContext(AppContext);
  const token = getToken();
  const userData = decodeToken(token);
  const [state, setState] = useState({
    ...defaultState,
    open: isDrawerOpen,
  });
  const { firstName = "", lastName = "", profileImageUri = "" } = userData;
  const handleDrawerClose = () => {
    setState((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      checked: event.target.checked,
    }));
  };
  const handleChange1 = (event) => {
    setState((prevState) => ({
      ...prevState,
      checked1: event.target.checked,
    }));
  };
  const Lanuages = [
    { label: "English" },
    { label: "Hindi" },
    { label: "Telugu" },
    { label: "Kannada" },
  ];

  const handleNavigation = () => {
    navigate("/login");
    handleLoginPage();
  };
  const handleLogout = async () => {
    // const { error } = await AppService.logoutUser(getToken());
    // if (!error) {
    //   sessionStorage.removeItem("selectedUserId");
    //   removeToken();
    //   navigate("/");
    // } else {
    //   toast.error(sessionExpireMsg);
    // }
  };
  // const getUserDetails = useCallback(async () => {
  //   const { data, error } = await AppService.getUserDetails();
  //   if (error) {
  //     return;
  //   } else {
  //     setState((prevState) => ({
  //       ...prevState,
  //       role: data.user.roleAccess,
  //       licenseExpiresOn: data.user?.licenseExpiresOn,
  //     }));
  //   }
  // }, []);
  // useEffect(() => {
  //   if (token) {
  //     getUserDetails();
  //   }
  // }, [getUserDetails]);
  const THRESHOLD = 0;

  const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("up");

    const blocking = useRef(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
      prevScrollY.current = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;

        if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
          const newScrollDirection =
            scrollY > prevScrollY.current ? "down" : "up";

          setScrollDirection(newScrollDirection);

          prevScrollY.current = scrollY > 0 ? scrollY : 0;
        }

        blocking.current = false;
      };

      const onScroll = () => {
        if (!blocking.current) {
          blocking.current = true;
          window.requestAnimationFrame(updateScrollDirection);
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDirection]);

    return scrollDirection;
  };
  return (
    <AppBar position={position} color="default" elevation={2}>
      <Toolbar
        sx={
          !!elements
            ? globalStyles.flex.justify.between
            : globalStyles.flex.justify.end
        }
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: 5, width: "150px" }}>Enlite Prime</Typography>
          {useScrollDirection() !== "up" ? (
            <Box sx={{ width: "340px" }}>
              <Typography
                sx={{ color: `${!!themeColor ? themeColor : defaultColor}` }}
                variant="h4"
              >
                {currentPath.pathname.split("/")[2] == "analytics"
                  ? "APP"
                  : (currentPath.pathname.split("/")[2] || "app").toUpperCase()}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={() =>
                  setState((prevState) => ({
                    ...prevState,
                    fullScreen: !state.fullScreen,
                  }))
                }
              >
                {!state.fullScreen ? (
                  <FullscreenIcon fontSize="medium"></FullscreenIcon>
                ) : (
                  <FullscreenExitIcon fontSize="medium"></FullscreenExitIcon>
                )}
              </IconButton>

              <IconButton
                onClick={() => {
                  const newThemeType =
                    themeVariant === THEME_VARIANT.LIGHT
                      ? THEME_VARIANT.DARK
                      : THEME_VARIANT.LIGHT;
                  setThemeVariant(newThemeType);
                }}
              >
                {themeVariant === THEME_VARIANT.LIGHT ? (
                  <InvertColorsIcon
                    fontSize="medium"
                    sx={{ color: "primary.dark" }}
                  />
                ) : (
                  <InvertColorsIcon fontSize="medium" />
                )}
              </IconButton>
              <HelpOutlineIcon
                fontSize="medium"
                sx={{ color: "grey", marginRight: "920px" }}
              />
            </Box>
          )}

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: `${useScrollDirection() !== "up" && "684px"}`,
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        sx={{
                          color: `${
                            themeVariant == "dark" ? "white" : "black"
                          }`,
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                placeholder="search..."
                sx={{
                  width: "150px",
                  mr: "20px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: `${
                      themeVariant == "dark" ? "black" : "white"
                    }`,
                    color: "black",
                    //  "&:hover": {
                    //    borderColor:"1px solid red",
                    //    width:"280px",

                    //  },
                  },
                  "& .MuiInputBase-root": {
                    color: `${themeVariant == "dark" ? "white" : "black"}`,
                  },
                }}
              />

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Lanuages}
                size="small"
                sx={{ width: 150, mr: "20px" }}
                defaultValue="English"
                disableClearable="true"
                renderInput={(params) => <TextField {...params} />}
              />

              <Button
                variant="contained"
                sx={{
                  backgroundColor: `${
                    !!themeColor ? themeColor : defaultColor
                  }`,
                  width: "110px",
                }}
                onClick={handleNavigation}
              >
                Login
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #fafafa",
              background: "#fafafa",
              width: "65px",
              height: "60px",
              bottom: 50,
              position: "relative",
              top: "400px",
              padding: "10px",
              borderTopLeftRadius: "30px",
              borderBottomLeftRadius: "30px",
            }}
          >
            <IconButton
              sx={{
                backgroundColor: `${!!themeColor ? themeColor : defaultColor}`,
                borderRadius: "30px",
              }}
              onClick={() => {
                setState((prevState) => ({
                  ...prevState,
                  open: !prevState.open,
                }));
              }}
            >
              <PaletteIcon
                sx={{
                  bottom: 50,
                  color: "white",
                }}
              />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          {" "}
          {state.open && (
            <Box
              sx={{
                border: "1px solid #fafafa",
                background: "#fafafa",
                width: "72px",
                height: "60px",
                bottom: 50,
                padding: "10px",
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px",
                position: "absolute",
                top: "400px",
                zIndex: 1,
                left: "1348px",
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: `${
                    !!themeColor ? themeColor : defaultColor
                  }`,
                  borderRadius: "30px",
                }}
                onClick={() => {
                  setState((prevState) => ({
                    ...prevState,
                    open: !prevState.open,
                  }));
                }}
              >
                <CloseIcon
                  sx={{
                    bottom: 50,
                    color: "white",
                  }}
                />
              </IconButton>
            </Box>
          )}
          <Drawer
            open={state.open}
            onClose={handleDrawerClose}
            variant="persistent"
            anchor="right"
            transitionDuration={180}
          >
            <Box sx={style.drawerPaper}>
              <Box sx={{ backgroundColor: "#fafafa" }}>
                <Typography
                  sx={{
                    paddingTop: 3,
                    paddingLeft: 9,
                    paddingBottom: 3,
                    color: "black",
                  }}
                >
                  TEMPLATE SETTINGS
                </Typography>
              </Box>
              <Box sx={{ backgroundColor: "#ffffff" }}>
                <Box sx={{ ...style.themeColor, ml: "30px" }}>
                  <PaletteIcon sx={{ color: "#757575", mr: "6px" }} />
                  <Typography sx={{ color: "#757575" }}>
                    Theme Colour
                  </Typography>
                </Box>
                <Box sx={style.themeColor}>
                  <Box
                    onClick={() => handlThemeChange("#f14f6f", "#f6dbe9")}
                    sx={{
                      ...style.themeBox,
                      backgroundColor: "#f14f6f",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                  </Box>
                  <Box
                    onClick={() => handlThemeChange("#40a291", "#cffaf4")}
                    sx={{
                      ...style.themeBox,
                      backgroundColor: "#40a291",
                      cursor: "pointer",
                    }}
                  ></Box>
                  <Box
                    onClick={() => handlThemeChange("#3d53c8", "#e2e5fe")}
                    sx={{
                      ...style.themeBox,
                      backgroundColor: "#3d53c8",
                      cursor: "pointer",
                    }}
                  ></Box>
                  <Box
                    onClick={() => handlThemeChange("#a45ac5", "#f3d6fe")}
                    sx={{
                      ...style.themeBox,
                      backgroundColor: "#a45ac5",
                      cursor: "pointer",
                    }}
                  ></Box>
                  <Box
                    onClick={() => handlThemeChange("#f24724", "#f9e5de")}
                    sx={{
                      ...style.themeBox,
                      backgroundColor: "#f24724",
                      cursor: "pointer",
                    }}
                  ></Box>
                  <Box
                    onClick={() => handlThemeChange("#607c89", "#ebecec")}
                    sx={{
                      ...style.themeBox,
                      backgroundColor: "#607c89",
                      cursor: "pointer",
                    }}
                  ></Box>
                  <Box
                    onClick={() => handlThemeChange("#70cb34", "#f0f3c9")}
                    sx={{
                      ...style.themeBox,
                      backgroundColor: "#70cb34",
                      cursor: "pointer",
                    }}
                  ></Box>
                  <Box
                    onClick={() => handlThemeChange("#00a2f1", "#d6f4f9")}
                    sx={{
                      ...style.themeBox,
                      backgroundColor: "#00a2f1",
                      cursor: "pointer",
                    }}
                  ></Box>
                  <Box
                    onClick={() => handlThemeChange("#795048", "#f0e7e7")}
                    sx={{
                      ...style.themeBox,
                      backgroundColor: "#795048",
                      cursor: "pointer",
                    }}
                  ></Box>
                </Box>
              </Box>

              <Box sx={{ backgroundColor: "#ffffff" }}>
                <Box sx={{ ...style.themeColor, ml: "30px" }}>
                  <FactCheckIcon
                    sx={{ color: "#757575", mr: "6px" }}
                  ></FactCheckIcon>
                  <Typography sx={{ color: "#757575" }}>
                    NAVIGATION LAYOUT
                  </Typography>
                </Box>
                <Box sx={style.themeColor}>
                  <Box sx={{ ...style.themeBox, backgroundColor: "#f14f6f" }}>
                    {" "}
                  </Box>
                  <Box
                    sx={{ ...style.themeBox, backgroundColor: "#40a291" }}
                  ></Box>
                  <Box
                    sx={{ ...style.themeBox, backgroundColor: "#3d53c8" }}
                  ></Box>
                  <Box
                    sx={{ ...style.themeBox, backgroundColor: "#a45ac5" }}
                  ></Box>
                  <Box
                    sx={{ ...style.themeBox, backgroundColor: "#f24724" }}
                  ></Box>
                  <Box
                    sx={{ ...style.themeBox, backgroundColor: "#607c89" }}
                  ></Box>
                </Box>
              </Box>

              <Box sx={{ backgroundColor: "#ffffff" }}>
                <Box sx={{ ...style.themeColor, ml: "30px" }}>
                  <InvertColorsIcon
                    fontSize="small"
                    sx={{ color: "#757575", mr: "6px" }}
                  />
                  <Typography sx={{ color: "#757575" }}>Theme Mode</Typography>
                </Box>
                <Box sx={{ ...style.themeColor, ml: "30px" }}>
                  <Typography sx={{ mr: "10px", color: "black" }}>
                    Light Mode
                  </Typography>
                  <Switch
                    size="large"
                    checked={state.checked}
                    onChange={(event) => {
                      const newThemeType =
                        themeVariant === THEME_VARIANT.LIGHT
                          ? THEME_VARIANT.DARK
                          : THEME_VARIANT.LIGHT;
                      setThemeVariant(newThemeType);

                      setState((prevState) => ({
                        ...prevState,
                        checked: event.target.checked,
                      }));
                    }}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Typography sx={{ ml: "10px", color: "black" }}>
                    Dark Mode
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ backgroundColor: "#ffffff" }}>
                <Box sx={{ ...style.themeColor, ml: "30px" }}>
                  <FormatTextdirectionLToRIcon
                    fontSize="small"
                    sx={{ color: "#757575", mr: "6px" }}
                  />
                  <Typography sx={{ color: "#757575" }}>
                    LAYOUT DIRECTION
                  </Typography>
                </Box>
                <Box sx={{ ...style.themeColor, ml: "30px" }}>
                  <Typography sx={{ mr: "10px", color: "black" }}>
                    LTR
                  </Typography>
                  <Switch
                    size="large"
                    checked={state.checked1}
                    onChange={handleChange1}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Typography sx={{ ml: "10px", color: "black" }}>
                    RTL
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
