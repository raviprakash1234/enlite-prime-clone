import MyTaskTableView from "./view";
import MessageIcon from "@mui/icons-material/Message";
import Box from "@mui/system/Box";
const dummyData = [
  {
    name: "task 1",
    subName: "task description 1",
  },
  {
    name: "task 2",
    subName: "task description 2",
  },
  {
    name: "task 1",
    subName: "task description 1",
  },
  {
    name: "task 1",
    subName: "task description 1",
  },
];
const MyTaskTable = ({ themeColor = "e35981" }) => {
  const columnConfigs = [
    {
      id: "name",
      field: "name",
      canSort: false,
      noResize: false,
    },
    {
      noResize: false,
      render: () => {
        return (
          <Box sx={{ justifyContent: "end" }}>
            <MessageIcon />
          </Box>
        );
      },
    },
  ];
  return (
    <>
      <MyTaskTableView
        columnConfigs={columnConfigs}
        entries={dummyData}
        themeColor={themeColor}
      />
    </>
  );
};

export default MyTaskTable;
