import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@client/shared/contexts";
import {
  globalStyles,
  THEME_VARIANT,
  sessionExpireMsg,
} from "@client/shared/constants";
const defaultData = [
  {
    id: 1,
    phone: "+23132213",
    secondaryPhone: "+432434324",
    personalEmail: "johndoe@mail.com",
    companyEmail: "johndoe@company.com",
    address: "Ipsum Street no.77 Block A/5A, New York",
    website: "http://doeclans.net",
  },
];
const defaultProfileName = [
  {
    id: 1,
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "James Doe",
    designation: "Admin",
  },
];

const contactData = [
  {
    id: 1,
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "James Doe",
    designation: "Admin",
  },
  {
    id: 2,
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "Jim Doe",
    designation: "System Engineer",
  },
  {
    id: 3,
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "jen Doe",
    designation: "Executive",
  },
  {
    id: 4,
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "Jin Doe",
    designation: "Security",
  },
  {
    id: 5,
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "Jin Doe",
    designation: "Marketing",
  },
  {
    id: 6,
    profileImg: <AccountCircleIcon fontSize="large" />,
    profileName: "Joney Doe",
    designation: "Actor",
  },
];
let defaultColor = "#e35981";
let defaultLightColor = "#f6dbe9";
const defaultState = {
  userData: [],
  profileId: 1,
  profileName: [],
  entries: [],
  isDefault: false,
};
const ContactView = ({
  userData = [],
  themeColor = "#e35981",
  isDrawerMargin = true,
  lightColor = "",
}) => {
  const { themeVariant, setThemeVariant } = useContext(AppContext);
  const [state, setState] = useState(defaultState);
  const location = useLocation();
  const handleProfile = (id, index) => {
    setState((prevState) => ({
      ...prevState,
      userData:
        userData.filter((profileId) => {
          return id == profileId.id;
        }) || defaultData,
      profileName: contactData.filter((item) => {
        return item.id == id;
      }),
      profileId: index + 1,
      isDefault: true,
    }));
  };

  const isActiveItem = (id, index) => {
    let isActive = false;
    if (index === id) {
      isActive = true;
    }
    return isActive;
  };

  return (
    <>
      <Box sx={!isDrawerMargin && { marginLeft: "255px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ color: `${!!themeColor ? themeColor : defaultColor}` }}
            variant="h4"
          >
            Contact
          </Typography>
          <Typography sx={{ marginLeft: "16px" }} variant="body1">
            {location.pathname.split("/")[1] +
              " / " +
              location.pathname.split("/")[2]}
          </Typography>
        </Box>
        <Paper
          sx={{
            backgroundColor: `${!!themeColor ? lightColor : defaultLightColor}`,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box>
              <Box
                sx={{ overflowY: "scroll", width: "300px", height: "500px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "16px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      placeholder="Search"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          width: "200px",
                          height: "32px",
                          background: `${
                            themeVariant == "dark" ? "grey" : "white"
                          }`,
                        },
                      }}
                    />
                    <IconButton>
                      <AddIcon
                        sx={{
                          fontSize: "40px",
                          color: `${!!themeColor ? themeColor : defaultColor}`,
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>
                <Typography
                  sx={{ marginLeft: "100px", color: "grey" }}
                  variant="body1"
                >
                  {contactData.length} Contact
                </Typography>

                {contactData.map((item, index) => {
                  return (
                    <>
                      <Box
                        sx={
                          isActiveItem(item.id, state.profileId)
                            ? {
                                width: "275px",
                                maxWidth: "250px",
                                height: "68px",
                                backgroundColor: `white`,
                                borderRadius: "8px",
                                marginLeft: "24px",
                                marginTop: "12px",
                                cursor: "pointer",
                              }
                            : {
                                width: "275px",
                                maxWidth: "250px",
                                height: "68px",
                                borderRadius: "8px",
                                marginLeft: "24px",
                                marginTop: "12px",
                                cursor: "pointer",
                              }
                        }
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "8px",
                          }}
                        >
                          {item.profileImg}
                          <Box
                            onClick={() => handleProfile(item.id, index)}
                            sx={{
                              width: "100%",
                              marginLeft: "8px",
                              color: "grey",
                            }}
                          >
                            <Typography
                              sx={{
                                color: `${
                                  !!themeColor ? themeColor : defaultColor
                                }`,
                              }}
                              variant="body1"
                            >
                              {item.profileName}
                            </Typography>
                            <Typography variant="body2">
                              {item.designation}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Box>
            <Box>
              {(state.isDefault ? state.profileName : defaultProfileName).map(
                (item) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px",
                      }}
                    >
                      <AccountCircleIcon
                        sx={{
                          color: `${themeVariant == "dark" && "grey"}`,
                        }}
                        fontSize="large"
                      />
                      <Box
                        sx={{
                          width: "100%",
                          marginLeft: "8px",
                          color: `${themeVariant == "dark" && "black"}`,
                        }}
                      >
                        <Typography sx={{ fontWeight: "bold" }} variant="h6">
                          {item.profileName}
                        </Typography>
                        <Typography variant="body2">
                          {item.designation}
                        </Typography>
                      </Box>
                    </Box>
                  );
                }
              )}
              {(state.isDefault ? state.userData : defaultData).map((item) => {
                return (
                  <>
                    <Paper
                      sx={{
                        backgroundColor: `${
                          themeVariant == "dark" ? "grey" : "white"
                        }`,
                        width: `${!isDrawerMargin ? "1200px" : "1455px"}`,
                        marginBottom: "16px",
                      }}
                      elevation={0}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <IconButton sx={{ background: "#e3f2fd" }}>
                          <PhoneIcon sx={{ color: "#2d96f3" }} />
                        </IconButton>
                        <Box sx={{ width: "100%", marginLeft: "8px" }}>
                          <Typography variant="h6">{item.phone}</Typography>
                          <Typography variant="body2">Phone</Typography>
                        </Box>
                      </Box>
                      <hr />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <IconButton sx={{ background: "#fff8e1" }}>
                          <SmartphoneIcon sx={{ color: "#f7c00f" }} />
                        </IconButton>
                        <Box sx={{ width: "100%", marginLeft: "8px" }}>
                          <Typography variant="h6">
                            {item.secondaryPhone}
                          </Typography>
                          <Typography variant="body2">
                            Secondary Phone
                          </Typography>
                        </Box>
                      </Box>
                      <hr />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <IconButton sx={{ background: "#e0f2f1" }}>
                          <MailIcon sx={{ color: "#519888" }} />
                        </IconButton>
                        <Box sx={{ width: "100%", marginLeft: "8px" }}>
                          <Typography variant="h6">
                            {item.personalEmail}
                          </Typography>
                          <Typography variant="body2">
                            Personal Email
                          </Typography>
                        </Box>
                      </Box>
                      <hr />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <IconButton sx={{ background: "#efebe9" }}>
                          <WorkIcon sx={{ color: "#795548" }} />
                        </IconButton>
                        <Box sx={{ width: "100%", marginLeft: "8px" }}>
                          <Typography variant="h6">
                            {item.companyEmail}
                          </Typography>
                          <Typography variant="body2">Company Email</Typography>
                        </Box>
                      </Box>
                      <hr />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <IconButton sx={{ background: "#faebee" }}>
                          <LocationOnIcon sx={{ color: "#e44f37" }} />
                        </IconButton>
                        <Box sx={{ width: "100%", marginLeft: "8px" }}>
                          <Typography variant="h6">{item.address}</Typography>
                          <Typography variant="body2">Address</Typography>
                        </Box>
                      </Box>
                      <hr />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <IconButton sx={{ background: "#ede7f6" }}>
                          <LanguageIcon sx={{ color: "#6a4bb7" }} />
                        </IconButton>
                        <Box sx={{ width: "100%", marginLeft: "8px" }}>
                          <Typography variant="h6">{item.website}</Typography>
                          <Typography variant="body2">Website</Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </>
                );
              })}
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default ContactView;
