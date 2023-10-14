import { useContext } from "react";
import { MultiStepContext } from "../ConsultFormContext";

const ConsultFormSummary = () => {
  const { setCurrentStep, userData } = useContext(MultiStepContext);

  return (
    <div className="w-full my-20 md:w-[80%]">
      <div className="flex flex-col gap-10 mb-20">
        <div className="flex justify-between">
          <h2 className="text-dimDark text-[16px] font-semibold font-poppins md:text-[24px]">
            Personal Information
          </h2>
          <p
            className="text-lightPrimary text-[16px] font-medium font-poppins md:text-[24px] cursor-pointer"
            onClick={() => setCurrentStep(1)}
          >
            Edit
          </p>
        </div>
        <span>
          <p className="text-dimDark text-[14px] font-normal font-poppins md:text-[16px]">
            First name
          </p>
          <p className="text-dimDark text-[16px] font-normal font-poppins md:text-[24px]">
            {userData["firstname"]}
          </p>
        </span>
        <span>
          <p className="text-dimDark text-[14px] font-normal font-poppins md:text-[16px]">
            Last name
          </p>
          <p className="text-dimDark text-[16px] font-normal font-poppins md:text-[24px]">
            {userData["lastname"]}
          </p>
        </span>
        <span>
          <p className="text-dimDark text-[14px] font-normal font-poppins md:text-[16px]">
            Email address
          </p>
          <p className="text-dimDark text-[16px] font-normal font-poppins md:text-[24px]">
            {userData["email"]}
          </p>
        </span>
        <span>
          <p className="text-dimDark text-[14px] font-normal font-poppins md:text-[16px]">
            Phone number
          </p>
          <p className="text-dimDark text-[16px] font-normal font-poppins md:text-[24px]">
            {userData["phone"]}
          </p>
        </span>
      </div>
      <div className="flex flex-col gap-10 mb-20">
        <div className="flex justify-between">
          <h2 className="text-dimDark text-[16px] font-semibold font-poppins md:text-[24px]">
            Matter Details
          </h2>
          <p
            className="text-lightPrimary text-[16px] font-medium font-poppins md:text-[24px] cursor-pointer"
            onClick={() => setCurrentStep(2)}
          >
            Edit
          </p>
        </div>
        <span>
          <p className="text-dimDark text-[14px] font-normal font-poppins md:text-[16px]">
            Matter details
          </p>
          <p className="text-dimDark text-[16px] font-normal font-poppins md:text-[24px]">
            {userData["title"]}
          </p>
        </span>
        <span>
          <p className="text-dimDark text-[14px] font-normal font-poppins md:text-[16px]">
            Practice area
          </p>
          <p className="text-dimDark text-[16px] font-normal font-poppins md:text-[24px]">
            {userData["practice"]}
          </p>
        </span>
        <span>
          <p className="text-dimDark text-[14px] font-normal font-poppins md:text-[16px]">
            Description
          </p>
          <p className="text-dimDark text-[16px] font-normal font-poppins md:text-[20px]">
            {userData["description"]}
          </p>
        </span>
      </div>
      <div className="flex flex-col gap-10 mb-20">
        <div className="flex justify-between ">
          <h2 className="text-dimDark text-[16px] font-semibold font-poppins md:text-[24px]">
            Availability
          </h2>
          <p
            className="text-lightPrimary text-[16px] font-medium font-poppins md:text-[24px] cursor-pointer"
            onClick={() => setCurrentStep(3)}
          >
            Edit
          </p>
        </div>
        <span>
          <p className="text-dimDark text-[14px] font-normal font-poppins md:text-[16px]">
            Scheduled date
          </p>
          <p className="text-dimDark text-[16px] font-normal font-poppins md:text-[24px]">
            {userData["day"]}
          </p>
        </span>
        <span>
          <p className="text-dimDark text-[14px] font-normal font-poppins md:text-[16px]">
            Scheduled time
          </p>
          <p className="text-dimDark text-[16px] font-normal font-poppins md:text-[24px]">
            {userData["time"]}
          </p>
        </span>
      </div>
      <div className="flex justify-between md:w-[60%] mx-auto">
        <button
          type="button"
          className="w-[47%] text-center p-2 border-2 border-primary text-primary font-bold rounded-lg"
          onClick={() => setCurrentStep(3)}
        >
          Back
        </button>
        <button
          type="button"
          className="w-[47%] text-center p-2 bg-primary text-white rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ConsultFormSummary;
