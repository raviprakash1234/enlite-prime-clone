import { Box } from "@mui/system";
import { Typography, IconButton, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { useContext, useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LabelIcon from "@mui/icons-material/Label";
import { AppContext } from "@client/shared/contexts";
let defaultColor = "#e35981";
let defaultLightColor = "#f6dbe9";

const EmailView = ({
  isDrawerMargin = true,
  themeColor = "#e35981",
  lightColor = "",
}) => {
  const { themeVariant, setThemeVariant } = useContext(AppContext);
  const [div, setDiv] = useState(false);
  const [mainId, setMainid] = useState([]);
  const [id, setId] = useState("");
  const showDiv = () => {
    if (div === true) {
      setDiv(false);
    } else {
      setDiv(true);
    }
  };

  const profiles = [
    { id: 1, name: "john" },
    { id: 2, name: "sam" },
    { id: 3, name: "wan" },
    { id: 4, name: "king" },
    { id: 5, name: "john" },
    { id: 6, name: "sam" },
    { id: 7, name: "wan" },
    { id: 8, name: "king" },
  ];

  const data1 = [
    { id: 1, name: "Inbox", icon: <MoveToInboxOutlinedIcon sx={{ mr: 2 }} /> },
    {
      id: 2,
      name: "Stared",
      icon: <StarPurple500OutlinedIcon sx={{ mr: 2 }} />,
    },
    {
      id: 3,
      name: "Sent",
      icon: <SendOutlinedIcon sx={{ mr: 2 }} />,
    },
    { id: 4, name: "Spam", icon: <NewReleasesOutlinedIcon sx={{ mr: 2 }} /> },
  ];

  const data2 = [
    {
      id: 5,
      name: "Updates",
      icon: <FlagRoundedIcon sx={{ mr: 2, color: "yellow" }} />,
    },
    {
      id: 6,
      name: "Social",
      icon: <GroupRoundedIcon sx={{ mr: 2, color: "#f24636" }} />,
    },
    {
      id: 7,
      name: "Promos",
      icon: <LabelIcon sx={{ mr: 2, color: "#3f51b5" }} />,
    },
    {
      id: 8,
      name: "Forums",
      icon: <QuestionAnswerIcon sx={{ mr: 2, color: "#3dbdd4" }} />,
    },
  ];
  const dataHandle = (id, index) => {
    setMainid(
      profiles.filter((item) => {
        return item.id == id;
      })
    );
    setId(id);
  };
  const isActiveItem = (id, index) => {
    let isActive = false;
    if (index === id) {
      isActive = true;
    }
    return isActive;
  };
  console.log(mainId);
    
  useEffect(() => {
    setMainid([profiles[0]])
    setId(1)
  }, []);

  return (
    <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ color: "#b22362" }} variant="h4">
          Email
        </Typography>
        <Typography sx={{ marginLeft: "16px" }} variant="body1">
          App / Pages / Email
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: `${!!themeColor ? lightColor : defaultLightColor}`,
          padding: 3,
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // backgroundColor: `${!!themeColor ? themeColor : defaultColor}`,

            gap: 10,
          }}
        >
          <Box>
            <Button
              sx={{
                color: "white",
                width: 150,
                mr: 4,
                mt: 0.7,
                backgroundColor: `${!!themeColor ? themeColor : defaultColor}`,
              }}
            >
              COMPOSE EMAIL
            </Button>
          </Box>
          <Box sx={{ ml: 5 }}>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: `${!isDrawerMargin ? "1148px" : "1400px"}`,
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Email"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            {data1.map((item, index) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    width: 190,
                    mt: 3,
                  }}
                >
                  <Button
                    sx={
                      isActiveItem(item.id, id)
                        ? {
                            width: "100%",
                            backgroundColor: "white",
                            color: `${
                              !!themeColor ? themeColor : defaultColor
                            }`,
                          }
                        : {
                            width: "100%",

                            color: `${
                              !!themeColor ? themeColor : defaultColor
                            }`,
                          }
                    }
                    onClick={() => dataHandle(item.id)}
                  >
                    {item.icon}

                    {item.name}
                  </Button>
                </Box>
              );
            })}
            {data2.map((item) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    width: 190,
                    mt: 3,
                  }}
                >
                  <Button
                    sx={
                      isActiveItem(item.id, id)
                        ? {
                            width: "100%",
                            backgroundColor: "white",
                            color: `${
                              !!themeColor ? themeColor : defaultColor
                            }`,
                          }
                        : {
                            width: "100%",

                            color: `${
                              !!themeColor ? themeColor : defaultColor
                            }`,
                          }
                    }
                    onClick={() => dataHandle(item.id)}
                  >
                    {item.icon}
                    {item.name}
                  </Button>
                </Box>
              );
            })}
          </Box>
          {mainId.map((item) => {
            return (
              <Box>
                <Box
                  sx={{
                    width: `${!isDrawerMargin ? "1150px" : "1400px"}`,
                    backgroundColor: `${
                      themeVariant == "dark" ? "grey" : "white"
                    }`,
                    ml: 15,
                    borderRadius: "16px",
                  }}
                >
                  <Box sx={{ borderBottom: "0.5px solid gray" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        p: 4,
                        gap: 3,
                      }}
                    >
                      <StarBorderIcon />
                      <AccountCircleIcon />

                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography>{item.name}</Typography>
                        <Typography variant="caption">may, 07 2021</Typography>
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography>Vivamus sit amet interdum elit</Typography>
                        <Box
                          sx={{ display: "flex", flexDirection: "row", gap: 1 }}
                        >
                          <FlagRoundedIcon sx={{ color: "#f9982d" }} />
                          <Typography
                            sx={{ fontSize: "13px", color: "#f9982d" }}
                          >
                            Updates
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ ml: 70, height: 0.2 }} onClick={showDiv}>
                        {!div && <KeyboardArrowDownIcon />}
                        {div && <KeyboardArrowUpIcon />}
                      </Box>
                    </Box>

                    {div && (
                      <Box>
                        <Paper
                          component="form"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            width: `${!isDrawerMargin ? "1100px" : "1350px"}`,
                            backgroundColor: `${
                              themeVariant == "dark" ? "black" : "#f5f5f5"
                            }`,
                            ml: 2.5,
                          }}
                        >
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            value="From John Doe to me"
                            inputProps={{ "aria-label": "search google maps" }}
                          />
                          <IconButton
                            type="button"
                            sx={{ p: "10px" }}
                            aria-label="search"
                          >
                            <StarBorderIcon />
                          </IconButton>
                          <IconButton
                            type="button"
                            sx={{ p: "10px" }}
                            aria-label="search"
                          >
                            <BookmarkIcon />
                          </IconButton>

                          <IconButton
                            type="button"
                            sx={{ p: "10px" }}
                            aria-label="search"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Paper>

                        <Typography
                          sx={{
                            ml: 3,
                            mt: 3,
                            color: "black",
                            fontSize: "22px",
                          }}
                          variant="caption"
                        >
                          Vivamus sit amet interdum elit
                        </Typography>
                        <Typography
                          sx={{
                            ml: 3,
                            mt: 0,
                            color: "black",
                            fontSize: "15px",
                          }}
                        >
                          Integer orci justo, fringilla at faucibus vel,
                          pulvinar in eros.
                        </Typography>

                        <Divider orientation="vertical" />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "end",
                          }}
                        >
                          <Button
                            sx={{ backgroundColor: "white", color: "gray" }}
                          >
                            Forward
                          </Button>
                          <Button
                            sx={{ backgroundColor: "white", color: "blue" }}
                          >
                            Reply
                          </Button>
                        </Box>
                      </Box>
                    )}
                  </Box>

                  {/* <Button onClick={showDiv}>sdsd</Button> */}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default EmailView;
