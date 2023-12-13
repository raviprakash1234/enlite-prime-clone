import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CreateIcon from "@mui/icons-material/Create";
import FilterIcon from "@mui/icons-material/Filter";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
let defaultColor = "#e35981";
const TopHeadingView = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
  heading = "Icon",
}) => {
  return (
    <>
      <Paper elevation={0}>
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
              <RadioButtonUncheckedIcon
                sx={{
                  color: `${!!themeColor ? themeColor : defaultColor}`,
                  fontSize: "40px",
                }}
              />
            </IconButton>
          </Box>
          <Box sx={{ marginTop: "12px" }}>
            <Typography variant="h6">{heading}</Typography>
            <Typography variant="body1">
              Infographic with icon illustration to represent summary of the
              calculation
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "8px", padding: "16px" }}>
          <Box
            sx={{
              border: `1px solid ${!!themeColor ? themeColor : defaultColor}`,
              height: "120px",
              width: `${!isDrawerMargin ? "350px" : "480px"}`,
              borderRadius: "10px",
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
                <IconButton>
                  <OndemandVideoIcon
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
              width: `${!isDrawerMargin ? "350px" : "390px"}`,
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
              width: `${!isDrawerMargin ? "350px" : "390px"}`,
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
              width: `${!isDrawerMargin ? "350px" : "390px"}`,
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
      </Paper>
    </>
  );
};

export default TopHeadingView;
