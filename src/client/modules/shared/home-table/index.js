import { useState } from "react";
import HomeTableView from "./view";
const defaultState = {
  isContact: false,
  isMessage: false,
  isNotifications: false,
};
const HomeTable = ({themeColor = "#e35981"}) => {
  const [state, setState] = useState(defaultState);
  const handleOpenContacts = () => {
    setState((prevState) => ({
      ...prevState,
      isContact: true,
      isMessage: false,
      isNotifications: false,
    }));
  };

  const handleOpenMessage = () => {
    setState((prevState) => ({
      ...prevState,
      isMessage: true,
      isContact: false,
      isNotifications: false,
    }));
  };
  const handleOpenNotifications = () => {
    setState((prevState) => ({
      ...prevState,
      isNotifications: true,
      isContact: false,
      isMessage: false,
    }));
  };

  return (
    <>
      <HomeTableView
        isContact={state.isContact}
        isMessage={state.isMessage}
        isNotifications={state.isNotifications}
        handleOpenContacts={handleOpenContacts}
        handleOpenMessage={handleOpenMessage}
        handleOpenNotifications={handleOpenNotifications}
        themeColor={themeColor}
      />
    </>
  );
};

export default HomeTable;
