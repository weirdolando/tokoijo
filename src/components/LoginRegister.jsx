import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function Login({ page = "login" }) {
  return (
    <div className="w-4/5 mx-auto min-h-[90vh] flex items-center">
      <div className="max-w-[300px] w-full mx-auto rounded-md bg-zinc-200/50 p-4">
        {page === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}

export default Login;
