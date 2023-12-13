import Box from "@mui/material/Box";
import Todo from "../todo";

const TodoFirebaseView = ({
  isDrawerMargin = true,
  themeColor = "#e35981",
  lightColor = "",
}) => {
  return (
    <>
      <Box>
        <Todo
          isDrawerMargin={isDrawerMargin}
          themeColor={themeColor}
          lightColor={lightColor}
          isTable= {false}
        />
      </Box>
    </>
  );
};

export default TodoFirebaseView;
