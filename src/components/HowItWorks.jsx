import Heading from "./Heading";
import Card from "./Card";
import { legalPracticeLinks } from "../constants";

const HowItWorks = () => {
  return (
    <div className="my-10 md:my-16">
      <Heading
        title="How it works"
        subtitle="Manage your legal process from start to finish either as a Legal firm or a client"
      />
      <div className="flex items-center justify-center">
        <span className="m-6 md:m-10 bg-white rounded-[120px] box-shadow">
          <button className="bg-primary rounded-[68px] text-white font-poppins text-[14px] py-3 px-8 md:text-[20px]">
            Legal practice
          </button>
          <button className="bg-white rounded-[68px] text-dimDark font-poppins text-[14px] py-3 px-10 md:text-[20px]">
            Client
          </button>
        </span>
      </div>
      <h2 className="text-dimDark text-center text-[20px] font-semibold font-poppins p-6 md:text-[28px]">
        Streamline your legal practice with Practise Partner
      </h2>
      <div className="w-full flex flex-col flex-start md:flex-row md:justify-between md:px-10 lg:px-16">
        {legalPracticeLinks.map((link, linkIndex) => (
          <Card
            key={linkIndex}
            img={link.img}
            title={link.title}
            text={link.text}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-primary text-white rounded-lg px-8 py-3">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
