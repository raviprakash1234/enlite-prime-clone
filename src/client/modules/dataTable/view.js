import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import TableData from "../shared/tableData";
import { useLocation } from "react-router-dom";

let defaultColor = "#e35981";
let defaultLightColor = "#f6dbe9";

const DataTableView = ({
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
          Data Table
        </Typography>
        <Typography sx={{ marginLeft: "16px" }} variant="body1">
          {currentPath.pathname.split("/")[1] +
            " / " +
            currentPath.pathname.split("/")[2]}
        </Typography>
      </Box>
      <TableData
        isDrawerMargin={isDrawerMargin}
        themeColor={themeColor}
        lightColor={lightColor}
      />
    </Box>
  );
};

export default DataTableView;
