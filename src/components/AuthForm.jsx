import { useState } from "react";
import { Login, Signup } from "../components";
import { logo, authimage } from "../assets";

const AuthForm = () => {
  const [count, setCount] = useState(0);

  const submitFormHandler = () => {
    setCount(3);
  };

  const enterLoginPageHandler = () => {
    setCount(1);
  };

  const enterSignupPageHandler = () => {
    setCount(2);
  };

  const desktop1 = (
    <div className="w-full bg-tertiary">
      <div className="flex flex-col items-center gap-6 justify-center h-screen">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <p className="font-poppins text-[16px] text-dimDark md:text-[18px] text-center px-4">
          Welcome to PractisePartner for Legal Practitioners
        </p>
        <p className="font-poppins text-[16px] text-dimDark md:text-[18px] text-center px-4">
          Login or sign up to continue
        </p>
        <div className="flex items-center gap-2">
          <button
            className="bg-primary px-6 py-2 rounded-lg text-white"
            onClick={enterLoginPageHandler}
          >
            Login
          </button>
          <button
            className="bg-primary px-6 py-2 rounded-lg text-white"
            onClick={enterSignupPageHandler}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );

  const desktop2 = (
    <Login
      submitFormHandler={submitFormHandler}
      enterSignupPageHandler={enterSignupPageHandler}
    />
  );

  const desktop3 = (
    <Signup
      enterLoginPageHandler={enterLoginPageHandler}
      submitFormHandler={submitFormHandler}
    />
  );

  const desktop4 = (
    <div className="w-full bg-tertiary">
      <div className="flex h-screen w-full items-start">
        <div className="w-1/2 h-screen">
          <img
            src={authimage}
            alt="auth image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-6 justify-center h-screen w-1/2">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <p className="text-[16px] font-poppins mt-5">
            Thanks for registering.
          </p>
          <p className="text-[16px] font-poppins">
            Kindly check your email for a verification status.
          </p>
        </div>
      </div>
    </div>
  );

  const screens = [desktop1, desktop2, desktop3, desktop4];

  return screens[count];
};

export default AuthForm;
