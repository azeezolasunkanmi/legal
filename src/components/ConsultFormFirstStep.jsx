import { useContext } from "react";
import { MultiStepContext } from "../ConsultFormContext";

// const isNotEmpty = value => value.trim() !== "";

// const isValidEmail = email => {
//   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return emailPattern.test(email);
// };

const ConsultFormFirstStep = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(MultiStepContext);
  // const firstNameHasError = useState(false);
  // const lastNameHasError = useState(false);
  // const emailHasError = useState(false);
  // const phoneHasError = useState(false);

  // let formIsValid = false;

  // if (firstNameHasError && lastNameHasError && emailHasError && phoneHasError) {
  //   formIsValid = true;
  // }

  // const submitHandler = event => {
  //   event.preventDefault();

  //   if (!formIsValid) {
  //     return;
  //   }
  // };

  return (
    <div className=" w-full my-20 md:w-[70%] lg:w-[40%]">
      <form className="flex flex-col gap-10 mb-10">
        <input
          type="text"
          placeholder="First name"
          className="border w-full p-2 rounded-lg outline-none border-[#d9d9d9]"
          value={userData["firstname"]}
          onChange={e =>
            setUserData({ ...userData, firstname: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last name"
          className="border w-full p-2 rounded-lg outline-none border-[#d9d9d9]"
          value={userData["lastname"]}
          onChange={e => setUserData({ ...userData, lastname: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email address"
          className="border w-full p-2 rounded-lg outline-none border-[#d9d9d9]"
          value={userData["email"]}
          onChange={e => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="border w-full p-2 rounded-lg outline-none border-[#d9d9d9]"
          value={userData["phone"]}
          onChange={e => setUserData({ ...userData, phone: e.target.value })}
        />
        <button
          type="button"
          className="w-full text-center p-2 bg-primary text-white rounded-lg"
          onClick={() => setCurrentStep(2)}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default ConsultFormFirstStep;
