import { useState } from "react";
import LoginView from "./view"; 

const defaultState = {};

const Login = () => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <LoginView />
    </>
  );
};

export default Login;