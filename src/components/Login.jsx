import { logo, authimage } from "../assets";
import PropTypes from "prop-types";
import useInput from "../hooks/use-input";

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

const Login = ({ submitFormHandler, enterSignupPageHandler }) => {
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

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    submitFormHandler();
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
        <form
          onSubmit={submitHandler}
          className=" h-screen w-1/2 flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6 justify-center w-full">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <p className="font-poppins text-[16px] text-secondary font-semibold md:text-[18px] text-center px-4">
              Welcome Back
            </p>
            <span className="w-[50%] flex flex-col gap-2">
              <input
                type="email"
                className={`${
                  emailHasError ? "border-red-600" : "border  border-[#d9d9d9]"
                } border outline-none bg-transparent px-6 py-4 min-w-[50%]`}
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
                  passwordHasError
                    ? "border-red-600 outline"
                    : "border  border-[#d9d9d9]"
                } border outline-none bg-transparent px-6 py-4 min-w-[50%]`}
                placeholder="Password"
                id="password"
                value={passwordValue}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordHasError && (
                <p className="text-red-600 text-[13px] self-end">
                  At least 8 characters, must contain uppercase, lowercase and a
                  number.
                </p>
              )}
            </span>
            <button
              type="submit"
              className="bg-primary px-6 py-2 rounded-lg text-white w-[50%] text-[18px]"
              onClick={submitHandler}
            >
              Login
            </button>
            <p className="font-poppins text-[12px] text-dimDark md:text-[12px] text-center px-4">
              Don’t have an account yet?{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={enterSignupPageHandler}
              >
                Sign up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  submitFormHandler: PropTypes.func.isRequired,
  enterSignupPageHandler: PropTypes.func.isRequired,
};

export default Login;
