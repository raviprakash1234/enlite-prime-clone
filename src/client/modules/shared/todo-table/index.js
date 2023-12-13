import TodoTableView from "./view";

const TodoTable = ({
  isDrawerMargin = true,
  themeColor = "#e35981",
  lightColor = "",
  isTable = false,
}) => {
  return (
    <>
      <TodoTableView
        isTable={isTable}
        isDrawerMargin={isDrawerMargin}
        themeColor={themeColor}
        lightColor={lightColor}
      />
    </>
  );
};
export default TodoTable;
