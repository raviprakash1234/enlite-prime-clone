import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import IconButton from "@mui/material/IconButton";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CreateIcon from "@mui/icons-material/Create";
import FilterIcon from "@mui/icons-material/Filter";
import ChartBar from "../shared/bar-chart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];
let defaultColor = "#e35981";
const MarketingView = ({ themeColor = "#e35981", isDrawerMargin = true }) => {
  return (
    <>
      <Box sx={!isDrawerMargin && { marginLeft: "255px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#b22362" }} variant="h4">
            Marketing
          </Typography>
          <Typography sx={{ marginLeft: "16px" }} variant="body1">
            App / Dashboard / Marketing
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <Box
            sx={{
              border: `1px solid ${!!themeColor ? themeColor : defaultColor}`,
              height: "120px",
              width: `${!isDrawerMargin ? "350px" : "420px"}`,
              borderRadius: "10px",
              backgroundColor: `${!!themeColor ? themeColor : defaultColor}`,
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
              width: `${!isDrawerMargin ? "350px" : "420px"}`,
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
              width: `${!isDrawerMargin ? "350px" : "420px"}`,
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
              width: `${!isDrawerMargin ? "350px" : "420px"}`,
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
        <Box sx={{ marginTop: "48px" }}>
          <ChartBar themeColor={themeColor} />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell>Products</TableCell>
                  <TableCell>Buyer</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Stock</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <Box
                        sx={{ display: "flex", flexDirection: "row", gap: 4 }}
                      >
                        <img
                          style={{ width: "80px" }}
                          src="https://res.cloudinary.com/walden-global-services/image/upload/v1544584556/dandelion/21.jpg"
                          alt="Profile"
                        />

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Box>QWE123</Box>
                          <Box> Women Bag</Box>
                          <Box
                            sx={{
                              color: "#d38daa",
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <ArrowDownwardIcon fontSize="5px" />
                            <Typography fontSize="10px">
                              {" "}
                              Invoice_QWE123
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{ display: "flex", flexDirection: "row", gap: 4 }}
                      >
                        <img
                          style={{
                            width: "40px",
                            height: "30px",
                            borderRadius: "50%",
                          }}
                          src="https://randomuser.me/api/portraits/men/75.jpg"
                        />

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Box>John Doe</Box>

                          <Typography fontSize="10px">
                            {" "}
                            Purchased date: 23 Oct 2018
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>$300,00</TableCell>
                    <TableCell>
                      {" "}
                      <button
                        style={{
                          backgroundColor: "#e57373",
                          color: "white",
                          borderRadius: "15px",
                          border: "none",
                          width: "80px",
                          height: "30px",
                        }}
                      >
                        Cancelled
                      </button>
                    </TableCell>
                    <TableCell>{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default MarketingView;
