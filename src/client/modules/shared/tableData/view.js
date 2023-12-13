import Box from "@mui/system/Box";
import { Grid } from "@client/shared/components";
import { IconButton, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import FilterListIcon from '@mui/icons-material/FilterList';



let defaultColor = "#e35981";
let defaultLightColor = "#f6dbe9";
const TableDataView = ({
  columnConfigs = [],
  entries = [],
  themeColor = "e35981",
  lightColor=""
}) => {
  return (
    <>
      <Box sx={{  marginTop: "64px" }}>
        <Box
          sx={{
         
            height: "600px",
            border: `1px solid ${!!themeColor ? lightColor : defaultLightColor}`,
            backgroundColor: `${!!themeColor ? lightColor : defaultLightColor}`,
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "32px",
              marginLeft: "16px",
              backgroundColor: "white",
              height:100
            }}
          >
          
            <Box sx={{ marginLeft: "8px",display :"flex",flexDirection:"row" }}>
              <Typography
                sx={{ fontWeight: "bold" ,ml:3}}
                variant="h6"
              >
                Employee List
              </Typography>

              <IconButton
              sx={{
                border: "1px solid white",
                backgroundColor: "white",
                borderRadius: "30px",
                ml:130
              }}
            >
              <SearchIcon sx={{ }} />
            </IconButton>
            <IconButton
              sx={{
                border: "1px solid white",
                backgroundColor: "white",
                borderRadius: "30px",
              }}
            >
              <CloudDownloadIcon sx={{  }}  />
            </IconButton>
            <IconButton
              sx={{
                border: "1px solid white",
                backgroundColor: "white",
                borderRadius: "30px",
              }}
            >
              <LocalPrintshopIcon sx={{ }}  />
            </IconButton>
            <IconButton
              sx={{
                border: "1px solid white",
                backgroundColor: "white",
                borderRadius: "30px",
              }}
            >
              <ViewColumnIcon sx={{ }} />
            </IconButton>
            <IconButton
              sx={{
                border: "1px solid white",
                backgroundColor: "white",
                borderRadius: "30px",
              }}
            >
              <FilterListIcon sx={{}} />
            </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
             
              height: "430px",
              
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

export default TableDataView;
