import React from "react";
import LogInForm from "../components/Forms/LogInForm";

const LogIn = () => {
  return (
    <div className="login_container">
      <div className="image-container">Log In</div>
      <div className="form-container">
        <LogInForm />
      </div>
    </div>
  );
};

export default LogIn;
