import { useState } from "react";
import RegisterView from "./view"; 

const defaultState = {};

const Register = () => {
  const [state, setState] = useState(defaultState);

  return (
    <>
      <RegisterView />
    </>
  );
};

export default Register;