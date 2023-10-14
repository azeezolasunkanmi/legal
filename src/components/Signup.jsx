import { logo, authimage, google, facebook } from "../assets";
import { useState } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== "";

const isValidEmail = email => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};
const isStrongPassword = password => {
  // Define regular expressions for different password requirements
  const minLength = 8; // Minimum password length
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;

  // Check if the password meets each requirement
  const hasMinLength = password.length >= minLength;
  const hasUppercase = uppercaseRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasDigit = digitRegex.test(password);

  // Check if all requirements are met
  const isStrong = hasMinLength && hasUppercase && hasLowercase && hasDigit;
  return isStrong;
};

const Signup = ({ submitFormHandler, enterLoginPageHandler }) => {
  const [accType, setAccType] = useState(true);

  const setClientHandler = () => {
    setAccType(true);
  };

  const setAttorneyHandler = () => {
    setAccType(false);
  };

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isValidEmail);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isStrongPassword);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    submitFormHandler();
    resetFirstName();
    resetLastName();
    resetPassword();
    resetEmail();
  };

  return (
    <div className="w-full bg-tertiary">
      <div className="flex h-screen w-full items-start">
        <div className="w-1/2 h-screen">
          <img
            src={authimage}
            alt="auth image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-4 justify-center h-screen w-1/2">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <p className="font-poppins text-[16px] text-secondary font-semibold md:text-[18px] text-center px-4">
            Create an account
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={setClientHandler}
              className={`${
                accType
                  ? "border-primary text-primary"
                  : "border-[#d9d9d9] text-secondary"
              } bg-transparent border-2 px-5 py-2 rounded-lg`}
            >
              Sign up as a client
            </button>
            <button
              onClick={setAttorneyHandler}
              className={`${
                accType
                  ? "border-[#d9d9d9] text-secondary"
                  : "border-primary text-primary"
              } bg-transparent border-2 px-5 py-2 rounded-lg`}
            >
              Sign up as an attorney
            </button>
          </div>
          <div className="flex items-start gap-2 justify-center w-[50%]">
            <span className="w-[50%] flex flex-col gap-2">
              <input
                type="text"
                className={`${
                  firstNameHasError ? "border-red-600" : "border-[#d9d9d9]"
                } border outline-none bg-transparent px-4 py-4 placeholder-dimDark`}
                placeholder="First name"
                id="firstname"
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && (
                <p className="text-red-600 text-[13px]">Enter your firstname</p>
              )}
            </span>
            <span className="w-[50%] flex flex-col gap-2">
              <input
                type="text"
                className={`${
                  lastNameHasError ? "border-red-600" : "border-[#d9d9d9]"
                } border outline-none bg-transparent px-4 py-4 placeholder-dimDark`}
                placeholder="Last name"
                id="lastname"
                value={lastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
              />
              {lastNameHasError && (
                <p className="text-red-600 text-[13px]">Enter lastname</p>
              )}
            </span>
          </div>
          {!accType && (
            <select
              name="practice"
              id="practice"
              className="border outline-none border-[#d9d9d9] bg-transparent px-4 py-3 w-[50%]"
            >
              <option value="practicearea">Practice Area</option>
              <option value="practicearea2">Practice Area Two</option>
              <option value="practicearea3">Practice Area Three</option>
            </select>
          )}
          <span className="w-[50%] flex flex-col gap-2">
            <input
              type="email"
              className={`${
                emailHasError ? "border-red-600" : "border-[#d9d9d9]"
              } border outline-none bg-transparent px-4 py-4 placeholder-dimDark`}
              placeholder="Email address"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className="text-red-600 text-[13px]">Email not valid</p>
            )}
          </span>
          <span className="w-[50%] flex flex-col gap-2">
            <input
              type="password"
              className={`${
                passwordHasError ? "border-red-600" : "border-[#d9d9d9]"
              } border outline-none bg-transparent px-4 py-4 w-full placeholder-dimDark`}
              placeholder="Password"
              id="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            <p className="text-secondary text-[13px] self-end">
              At least 8 characters
            </p>
          </span>
          <div className="flex gap-3 items-center w-[50%]">
            <span className="inline-block h-[1px] bg-secondary w-full"></span>
            <span className="text-secondary text-[13px] shrink-0">
              or continue with
            </span>
            <span className="inline-block h-[1px] bg-secondary w-full"></span>
          </div>
          <div className="flex items-center gap-2 w-[50%]">
            <button className="bg-transparent border-2 border-[#d9d9d9] px-5 py-2 rounded-lg text-secondary flex justify-between items-center  w-[50%]">
              <span>
                <img src={google} alt="facebook" />
              </span>
              <span>Google</span>
            </button>
            <button className="bg-transparent border-2  border-[#d9d9d9] px-5 py-2 rounded-lg text-secondary flex justify-between items-center  w-[50%]">
              <span>
                <img src={facebook} alt="facebook" />
              </span>
              <span>Facebook</span>
            </button>
          </div>
          <button
            type="submit"
            className="bg-primary px-6 py-2 rounded-lg text-white w-[50%] text-[18px]"
            onClick={submitHandler}
          >
            Sign up
          </button>
          <p className="font-poppins text-[12px] text-dimDark md:text-[12px] text-center px-4">
            Already have an account?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={enterLoginPageHandler}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  submitFormHandler: PropTypes.func.isRequired,
  enterLoginPageHandler: PropTypes.func.isRequired,
};

export default Signup;
