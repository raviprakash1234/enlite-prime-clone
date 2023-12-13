import { Typography, IconButton, Button, Box } from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import TodoTable from "../shared/todo-table";
import { useLocation } from "react-router-dom";
let defaultColor = "#e35981";
let defaultLightColor = "#f6dbe9";
const TodoView = ({
  isDrawerMargin = true,
  themeColor = "#e35981",
  lightColor = "",
  isTable = false,
}) => {
  const currentPath = useLocation();
 
  return (
    <Box sx={!isDrawerMargin && { marginLeft: "250px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{ color: `${!!themeColor ? themeColor : defaultColor}` }}
          variant="h4"
        >
          Todo
        </Typography>
        <Typography sx={{ marginLeft: "16px" }} variant="body1">
          {currentPath.pathname.split("/")[1] +
            " / " +
            currentPath.pathname.split("/")[2]}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "97%",
          backgroundColor: `${!!themeColor ? lightColor : defaultLightColor}`,
          padding: 3,
          borderRadius: "12px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
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
            <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "20px",
                  color: `${!!themeColor ? themeColor : defaultColor}`,
                }}
              >
                To Do Apps
              </Typography>
              <Typography>
                󠁥󠁮󠁧󠁿All Your to do list. Just check it whenever You done.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            mt: 3,
            height: 70,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="What needs to be done?"
          />

          <Button
            sx={{
              p: "10px",
              backgroundColor: "#ececec",
              color: "gray",
              borderRadius: "20px",
              fontSize: "12px",
            }}
          >
            Press enter to submit task
          </Button>
        </Paper>

        <Box align="right" sx={{ display: "flex", gap: 1, ml: "75%", mt: 1 }}>
          <Typography variant="body2" sx={{ fontSize: "10px" }}>
            Once you submit, its mean you have agreed with our
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "10px",
              textDecoration: "underline",
              color: "#479bf3",
            }}
          >
            terms and conditions
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button sx={{ color: `${!!themeColor ? themeColor : defaultColor}` }}>
            VIEW ALL
          </Button>
          /<Button sx={{ color: "gray" }}>ACTIVE</Button>/
          <Button sx={{ color: "gray" }}>COMPLETED</Button>
        </Box>
        {currentPath.pathname == "/applications/todo" && (
          <TodoTable
            isDrawerMargin={isDrawerMargin}
            themeColor={themeColor}
            lightColor={lightColor}
          />
        )}
      </Box>
    </Box>
  );
};

export default TodoView;
