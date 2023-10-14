import {
  Clients,
  EarlyAccess,
  Footer,
  FrequentlyAskedQuestions,
  Hero,
  HowItWorks,
  Heading,
} from "../components";
import { whyUsLinks, whyUsLinks2 } from "../constants";

import Slider from "../container/Slider";
import SecondSlider from "../container/SecondSlider";

const Home = () => (
  <div className="bg-tertiary w-full overflow-hidden relative">
    <Hero />
    <div>
      <div className="my-[70px] md:my-[100px]">
        <Heading title="Why Practice Partner?" />
        <Slider slidesData={whyUsLinks} />
        <SecondSlider slidesData={whyUsLinks2} />
      </div>
      <Clients />
      <HowItWorks />
      <FrequentlyAskedQuestions />
      <EarlyAccess />
      <div className="mt-10 md:mt-20 ">
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
