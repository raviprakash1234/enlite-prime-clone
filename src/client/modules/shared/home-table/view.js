import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
let noop = () => {};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f5f5f5",
    height: "80px",
    color: "grey",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    contact: "Jamse doe",
    message: "hello world",
    notification: "sadsadsdsdsdsadsad",
    date: "11 Jan 2023",
  },
  {
    contact: "Jamse doe",
    message: "hello world",
    notification: "sadsadsdsdsdsadsad",
    date: "11 Jan 2023",
  },
  {
    contact: "Jamse doe",
    message: "hello world",
    notification: "sadsadsdsdsdsadsad",
    date: "11 Jan 2023",
  },
  {
    contact: "Jamse doe",
    message: "hello world",
    notification: "sadsadsdsdsdsadsad",
    date: "11 Jan 2023",
  },
  {
    contact: "Jamse doe",
    message: "hello world",
    notification: "sadsadsdsdsdsadsad",
    date: "11 Jan 2023",
  },
];
let defaultColor = "#e35981";
const HomeTableView = ({
  handleOpenContacts = noop,
  isContact = false,
  isMessage = false,
  isNotifications = false,
  handleOpenMessage = noop,
  handleOpenNotifications = noop,
  themeColor = "#e35981",
}) => {
  const defaultContact = isMessage || isNotifications ? false : true;
  return (
    <>
      <Box sx={{ width: "54%", marginTop: "32px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell
                  sx={
                    (isContact || defaultContact) && {
                      cursor: "pointer",
                      borderBottom: `3px solid ${
                        !!themeColor ? themeColor : defaultColor
                      }`,
                    }
                  }
                  onClick={handleOpenContacts}
                  align="center"
                >
                  <Box>
                    <PermContactCalendarIcon
                      sx={
                        (isContact || defaultContact) && {
                          color: `${!!themeColor ? themeColor : defaultColor}`,
                        }
                      }
                    />
                  </Box>
                  <Typography
                    sx={
                      (isContact || defaultContact) && {
                        color: `${!!themeColor ? themeColor : defaultColor}`,
                        fontWeight: "bold",
                      }
                    }
                    variant="body2"
                  >
                    Contact
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  sx={
                    isMessage && {
                      cursor: "pointer",
                      borderBottom: `3px solid ${
                        !!themeColor ? themeColor : defaultColor
                      }`,
                    }
                  }
                  onClick={handleOpenMessage}
                  align="center"
                >
                  {" "}
                  <Box>
                    <MessageIcon
                      sx={
                        isMessage && {
                          color: `${!!themeColor ? themeColor : defaultColor}`,
                        }
                      }
                    />
                  </Box>
                  <Box>Massage</Box>
                </StyledTableCell>
                <StyledTableCell
                  sx={
                    isNotifications && {
                      cursor: "pointer",
                      borderBottom: `3px solid ${
                        !!themeColor ? themeColor : defaultColor
                      }`,
                    }
                  }
                  onClick={handleOpenNotifications}
                  align="center"
                >
                  {" "}
                  <Box>
                    <NotificationsActiveIcon
                      sx={
                        isNotifications && {
                          color: `${!!themeColor ? themeColor : defaultColor}`,
                        }
                      }
                    />
                  </Box>
                  <Box>Notification</Box>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            {isNotifications ? (
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell align="left" component="th" scope="row">
                      <IconButton>
                        <ErrorOutlineIcon
                          sx={{
                            border: "1px solid pink",
                            borderRadius: "30px",
                            background: "pink",
                            fontSize: "32px",
                            color: "white",
                          }}
                        />
                      </IconButton>
                      {row.notification}
                      <Typography variant="body1">{row.date}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.calories}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      <Button
                        sx={{
                          marginRight: "10px",
                          color: `${!!themeColor ? themeColor : defaultColor}`,
                          "& .MuiButton-outlined": {
                            color: "red"
                          }
                        }}
                        variant="outlined"
                      >
                        FIX IT
                      </Button>
                      <Button variant="outlined" color="inherit">
                        SKIP
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            ) : isMessage ? (
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="left" component="th" scope="row">
                      <IconButton>
                        <AccountCircleIcon
                          sx={{
                            border: "1px solid pink",
                            borderRadius: "30px",
                            background: "pink",
                            fontSize: "32px",
                            color: "white",
                          }}
                        />
                      </IconButton>
                      {row.contact}
                      <Typography variant="body1">{row.message}</Typography>
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="right">
                      <Typography>
                        {new Date().getHours() + ":" + new Date().getMinutes()}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="left" component="th" scope="row">
                      <IconButton>
                        <AccountCircleIcon
                          sx={{
                            border: "1px solid pink",
                            borderRadius: "30px",
                            background: "pink",
                            fontSize: "32px",
                            color: "white",
                          }}
                        />
                      </IconButton>
                      {row.contact}
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>

                    <TableCell align="right">
                      <Box>
                        <Tooltip title="Chat">
                          <MessageIcon />
                        </Tooltip>
                        <Tooltip title="Email">
                          <EmailIcon
                            sx={{ marginLeft: "16px", marginRight: "16px" }}
                            color="error"
                          />
                        </Tooltip>
                        <Tooltip title="Call">
                          <CallIcon />
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
export default HomeTableView;
