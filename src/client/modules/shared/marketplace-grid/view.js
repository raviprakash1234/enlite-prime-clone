import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
let rows = [
  {
    name: "dsadsd",
  },
  {
    name: "dsadsd",
  },
  {
    name: "dsadsd",
  },
  {
    name: "dsadsd",
  },
];

let columns = [
  {
    label: "Market USD",
    canSort: true,
    id: 1,
  },
  {
    label: "Price(USD)",
    id: 2,
  },
  {
    label: "Change(%)",
    id: 3,
  },
  {
    label: "12th Stats",
    id: 4,
  },
];
let defaultColor = "rgb(248,228,236)";
const MarketPlaceGridView = ({
  themeColor = "#e35981",
  isDrawerMargin = true,
  lightColor=""
}) => {
  let isSort = false;
  const handleSort = (value) => {
    console.log(`done`);
    if (value) {
      isSort = false;
    } else {
      isSort = true;
    }
    return isSort;
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((item, index) => {
                return (
                  <TableCell>
                    {item.label}
                    {item.canSort && (
                      <ArrowDownwardIcon
                        onClick={() => handleSort(true)}
                        fontSize="small"
                      />
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{
                    ":hover": {
                      background: `${!!themeColor ? lightColor : defaultColor}`,
                    },
                    height: "80px !important",
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <SignalCellularAltIcon
                      sx={{
                        color: `${!!themeColor ? themeColor : defaultColor}`,
                        fontSize: "40px",
                      }}
                    />
                    ,
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MarketPlaceGridView;
