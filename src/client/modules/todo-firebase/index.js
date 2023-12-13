import TodoFirebaseView from "./view";

const TodoFirebase = ({
  isDrawerMargin = true,
  themeColor = "#e35981",
  lightColor = "",
}) => {
  return (
    <>
      <TodoFirebaseView
        isDrawerMargin={isDrawerMargin}
        themeColor={themeColor}
        lightColor={lightColor}
      />
    </>
  );
};

export default TodoFirebase;
