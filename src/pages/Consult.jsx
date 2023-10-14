import { ConsultStepper, ConsultForm, Footer } from "../components";
import ConsultFormContext from "../ConsultFormContext";

const Consult = () => {
  return (
    <ConsultFormContext>
      <div>
        <div className="2xl:max-w-[1280px] mx-auto">
          <ConsultStepper />
          <ConsultForm />
        </div>
        <Footer />
      </div>
    </ConsultFormContext>
  );
};

export default Consult;
