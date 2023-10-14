import ConsultFormFirstStep from "./ConsultFormFirstStep";
import ConsultFormSecondStep from "./ConsultFormSecondStep";
import ConsultFormThirdStep from "./ConsultFormThirdStep";
import ConsultFormSummary from "./ConsultFormSummary";
import { useContext } from "react";
import { MultiStepContext } from "../ConsultFormContext";

const ConsultForm = () => {
  const { currentStep } = useContext(MultiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <ConsultFormFirstStep />;
      case 2:
        return <ConsultFormSecondStep />;
      case 3:
        return <ConsultFormThirdStep />;
      case 4:
        return <ConsultFormSummary />;
    }
  }

  return (
    <div className="w-full mx-auto bg-tertiary">
      <div className="flex justify-center items-center w-[90%] mx-auto mt-12">
        {showStep(currentStep)}
      </div>
    </div>
  );
};

export default ConsultForm;
