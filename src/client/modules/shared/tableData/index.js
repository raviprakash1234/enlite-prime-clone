import TableDataView from "./view";
import MessageIcon from "@mui/icons-material/Message";
import Box from "@mui/system/Box";
import { Button, Divider } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";


let defaultColor = "#e35981";
let defaultLightColor = "#f6dbe9";
const TableData = ({isDrawerMargin = true,
  themeColor = "#e35981",
  lightColor = "",
  isTable = false,}) => {

    const dummyData = [
      {
        name: "Gabby George",
        title : "Business Analyst",
        subName: "task description 1",
        kpi: <LinearProgress variant="determinate" value={30} color="primary" />,
        button : <Button  sx={{backgroundColor : `${!!themeColor ? themeColor : defaultColor}`,color :"white",borderRadius:"20px"}}>Active</Button>,
        salary : "$10,000.00",
      },
      {
        name: "Aiden Lloyd",
        title : "Business Consultant",
        subName: "task description 1",
        kpi: <LinearProgress variant="determinate" value={10} color="primary" />,
        button : <Button  sx={{backgroundColor :`${!!themeColor ? themeColor : defaultColor}`,color :"white",borderRadius:"20px"}}>Active</Button>,
        salary : "$20,000.00",
      },
      {
        name: "Jaden Collins",
        title : "Attorney",
        subName: "task description 1",
        kpi: <LinearProgress variant="determinate" value={15} color="primary" />,
        button : <Button  sx={{backgroundColor :`${!!themeColor ? themeColor : defaultColor}`,color :"white",borderRadius:"20px"}}>Active</Button>,
        salary : "$20,000.00",
      },
      {
        name: "Franky Rees",
        title : "Business Consultant",
        subName: "task description 1",
        kpi: <LinearProgress variant="determinate" value={30} color="primary" />,
        button : <Button  sx={{backgroundColor :`${!!themeColor ? themeColor : defaultColor}`,color :"white",borderRadius:"20px"}}>Non Active</Button>,
        salary : "$10,000.00",
      },
      {
        name: "Aaren Rose",
        title : "Business Consultant",
        subName: "task description 1",
        kpi: <LinearProgress variant="determinate" value={2} color="primary" />,
        button : <Button  sx={{backgroundColor :`${!!themeColor ? themeColor : defaultColor}`,color :"white",borderRadius:"20px"}}>Active</Button>,
        salary : "$40,000.00",
      },
      {
        name: "Aiden Lloyd",
        title : "Business Consultant",
        subName: "task description 1",
        kpi: <LinearProgress variant="determinate" value={10} color="primary" />,
        button : <Button  sx={{backgroundColor :`${!!themeColor ? themeColor : defaultColor}`,color :"white",borderRadius:"20px"}}>Non Active</Button>,
        salary : "$40,000.00",
      },
      {
        name: "Aiden Lloyd",
        title : "Business Consultant",
        subName: "task description 1",
        kpi: <LinearProgress variant="determinate" value={15} color="primary" />,
        button : <Button  sx={{backgroundColor :`${!!themeColor ? themeColor : defaultColor}`,color :"white",borderRadius:"20px"}}>Active</Button>,
        salary : "$70,000.00",
      },
    
      
    ];




  const columnConfigs = [
    {
      id: "name",
      label: "Name",
      field: "name",
      canSort: false,
      noResize: false,
    },
    {
      id: "title",
      label: "Title",
      field: "title",
      canSort: false,
      noResize: false,
    },
    {
      id: "kpi",
      label: "KPI",
      field: "kpi",
      canSort: false,
      noResize: false,
    },
    {
      id: "button",
      label: "Status",
      field: "button",
      canSort: false,
      noResize: false,
    },
    {
      id: "salary",
      label: "Salary",
      field: "salary",
      canSort: false,
      noResize: false,
    },
 
  ];
  return (
    <>
      <TableDataView
        columnConfigs={columnConfigs}
        entries={dummyData}
        themeColor={themeColor}
      />
    </>
  );
};

export default TableData;
