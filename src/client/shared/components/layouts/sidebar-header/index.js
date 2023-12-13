import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "@client/shared/contexts";
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
let defaultColor = "#e35981";
let defaultLightColor = "#f6dbe9";
export default function SidebarHeader({
  drawerList = [],
  children = <></>,
  isSideDrawerOpen = false,
  isOpen = false,
  themeColor = "#e35981",
  lightColor = "#f6dbe9",
  handleLoginPage = () => {},
}) {
  const { themeVariant, setThemeVariant } = React.useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const isActiveItem = (itemRoute) => {
    let isActive = false;
    if (currentPath === itemRoute || currentPath === `${itemRoute}/`) {
      isActive = true;
    }
    return isActive;
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              left: "80px",
              top: "65px",
              background: `${themeVariant == "dark" ? "black" : "#EAEAEA"}`,
            },
          }}
          variant="persistent"
          anchor="left"
          open={JSON.parse(localStorage.getItem("isDrawer"))}
        >
          {drawerList.map((item, index) => {
            return (
              <Box sx={{ p: "8px" }}>
                <Typography
                  sx={{
                    marginRight: "110px",
                    color: `${!!themeColor ? themeColor : defaultColor}`,
                    width: "100%",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                  variant="body1"
                >
                  {item.heading}
                </Typography>
                {item.subHeading1.subHeading !== "" && (
                  <Box>
                    <IconButton>{item.subHeading1.icon}</IconButton>
                    <Button
                      sx={
                        isActiveItem(item.subHeading1.to)
                          ? {
                              color: "black",
                              backgroundColor: `${
                                !!themeColor ? lightColor : defaultLightColor
                              }`,
                              fontSize: "12px",
                            }
                          : {
                              color: `${
                                themeVariant == "dark" ? "white" : "black"
                              }`,
                              fontSize: "12px",
                            }
                      }
                      variant="text"
                      onClick={(e) => {
                        navigate(`${item.subHeading1.to}`);
                        // isActiveItem(item.subHeading1.to)
                        e.preventDefault();
                        e.stopPropagation();
                        if(item.subHeading1.subHeading == "Login"){
                          handleLoginPage()
                        }
                       
                      }}
                    >
                      {item.subHeading1.subHeading &&
                        item.subHeading1.subHeading}
                    </Button>
                  </Box>
                )}
                {item.subHeading2.subHeading !== "" && (
                  <Box>
                    <IconButton>{item.subHeading2.icon}</IconButton>
                    <Button
                      sx={
                        isActiveItem(item.subHeading2.to)
                          ? {
                              color: "black",
                              backgroundColor: `${
                                !!themeColor ? lightColor : defaultLightColor
                              }`,
                              fontSize: "12px",
                            }
                          : {
                              color: `${
                                themeVariant == "dark" ? "white" : "black"
                              }`,
                              fontSize: "12px",
                            }
                      }
                      variant="text"
                      onClick={(e) => {
                        navigate(`${item.subHeading2.to}`);
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      {item.subHeading2.subHeading}
                    </Button>
                  </Box>
                )}
                {item.subHeading3.subHeading !== "" && (
                  <Box>
                    <IconButton>{item.subHeading3.icon}</IconButton>
                    <Button
                      sx={
                        isActiveItem(item.subHeading3.to)
                          ? {
                              color: "black",
                              backgroundColor: `${
                                !!themeColor ? lightColor : defaultLightColor
                              }`,
                              fontSize: "12px",
                            }
                          : {
                              color: `${
                                themeVariant == "dark" ? "white" : "black"
                              }`,
                              fontSize: "12px",
                            }
                      }
                      variant="text"
                      onClick={(e) => {
                        navigate(`${item.subHeading3.to}`);
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      {item.subHeading3.subHeading}
                    </Button>
                  </Box>
                )}
              </Box>
            );
          })}
        </Drawer>
      </Box>
    </>
  );
}
