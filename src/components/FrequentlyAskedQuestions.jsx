import Heading from "./Heading";
import Question from "./Question";
import { faqLinksOne, faqLinksTwo } from "../constants";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="mt-6 mx-4 md:mt-16 lg:mx-16">
      <Heading title="Frequently asked questions" />
      <div className="w-full  flex flex-col justify-start md:flex-row">
        <div className="w-full mt-8 flex flex-col gap-4 justify-start flex-wrap">
          {faqLinksOne.map((link, linkIndex) => (
            <Question
              key={linkIndex}
              title={link.title}
              description={link.description}
            />
          ))}
        </div>
        <div className="w-full hidden lg:mt-8 lg:flex flex-col gap-4 justify-start flex-wrap">
          {faqLinksTwo.map((link, linkIndex) => (
            <Question
              key={linkIndex}
              title={link.title}
              description={link.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
