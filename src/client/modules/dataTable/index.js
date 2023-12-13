import { useState } from "react";
import DataTableView from "./view";

const defaultState = {};

const DataTable = ({
  isDrawerMargin = true,
  themeColor = "#e35981",
  lightColor = "",
}) => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <DataTableView
        isDrawerMargin={isDrawerMargin}
        themeColor={themeColor}
        lightColor={lightColor}
      />
    </>
  );
};

export default DataTable;
