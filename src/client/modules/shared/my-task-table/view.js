import Box from "@mui/system/Box";
import { Grid } from "@client/shared/components";
import { IconButton, Typography } from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
let defaultColor = "#e35981";
const MyTaskTableView = ({
  columnConfigs = [],
  entries = [],
  themeColor = "e35981",
}) => {
  return (
    <>
      <Box sx={{ marginLeft: "16px", marginTop: "64px" }}>
        <Box
          sx={{
            width: "650px",
            height: "600px",
            border: `1px solid ${!!themeColor ? themeColor : defaultColor}`,
            backgroundColor: `${!!themeColor ? themeColor : defaultColor}`,
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "32px",
              marginLeft: "32px",
            }}
          >
            <IconButton
              sx={{
                border: "1px solid white",
                backgroundColor: "white",
                borderRadius: "30px",
              }}
            >
              <PlaylistAddCheckIcon
                sx={{ color: `${!!themeColor ? themeColor : defaultColor}` }}
                fontSize="large"
              />
            </IconButton>
            <Box sx={{ marginLeft: "8px" }}>
              <Typography
                sx={{ fontWeight: "bold", color: "white" }}
                variant="h6"
              >
                My Task
              </Typography>
              <Typography sx={{ color: "white" }} variant="body1">
                All Your to do list. Just check it whenever You done.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              width: "95%",
              height: "430px",
              marginTop: "32px",
              //   marginBottom: "16px",
              marginLeft: "16px",
            }}
          >
            <Grid columns={columnConfigs} rows={entries} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyTaskTableView;
