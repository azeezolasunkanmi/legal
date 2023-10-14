import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MultiStepContext = createContext("");

const ConsultFormContext = props => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  return (
    <div>
      <MultiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}
      >
        {props.children}
      </MultiStepContext.Provider>
    </div>
  );
};

ConsultFormContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConsultFormContext;
