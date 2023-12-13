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
import { IconButton } from "@mui/material";
function createData(name) {
  return { name };
}

const rows = [
  createData("Frozen yoghurt"),
  createData("Ice cream sandwich"),
  createData("Eclair"),
  createData("Cupcake"),
  createData("Gingerbread"),
  createData("Frozen yoghurt"),

  createData("Ice cream sandwich"),
  createData("Eclair"),
  createData("Cupcake"),
  createData("Gingerbread"),
];
const TodoTableView = ({
  isDrawerMargin = true,
  themeColor = "#e35981",
  lightColor = "",
  isTable = false,
}) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <IconButton
                    sx={{
                      color: "gray",
                      height: 40,
                      backgroundColor: "#ededed",
                      mr: 2,
                    }}
                  >
                    <DoneIcon />
                  </IconButton>

                  {row.name}
                </TableCell>
                <TableCell sx={{ width: 200 }}>
                  <IconButton
                    sx={{
                      color: "gray",
                      height: 40,

                      backgroundColor: "#ededed",
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: "gray",
                      height: 40,

                      backgroundColor: "#ededed",
                      ml: 2,
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TodoTableView;
