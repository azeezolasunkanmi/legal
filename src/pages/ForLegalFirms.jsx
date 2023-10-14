import { legalHero } from "../assets";
import { todaysStats, practitioners } from "../constants";
import {
  SecondSearch,
  Stats,
  PractCard,
  LetsCollaborate,
  FrequentlyAskedQuestions,
  RequireAssistance,
  Footer,
} from "../components";
import ForLegalSlider from "../container/ForLegalSlider";

const ForLegalFirms = () => {
  return (
    <div className="w-full bg-white">
      <div
        className="bg-no-repeat bg-cover bg-center z-0 relative h-[75vh]"
        style={{ backgroundImage: `url(${legalHero})` }}
      >
        <div className="absolute -bottom-12 w-[90%] left-0 right-0 mx-auto lg:w-[80%]">
          <SecondSearch />
        </div>
      </div>
      <div className="2xl:max-w-[1280px] mx-auto mt-12 md:mt-[84px] xl:mt-[110px]">
        <section className="p-4 lg:px-8">
          <h2 className="text-[24px] font-poppins font-semibold lg:text-[32px]">
            Today&apos;s Stats
          </h2>
          <ForLegalSlider />

          <div className="py-4 hidden md:flex justify-between  mx-auto">
            {todaysStats.map((stat, statIndex) => (
              <Stats
                key={statIndex}
                title={stat.title}
                img={stat.img}
                amount={stat.amount}
              />
            ))}
          </div>
        </section>
        <section className="p-4 mt-20 lg:px-8">
          <h2 className="text-[24px] font-poppins font-semibold lg:text-[32px]">
            Featured practitioners
          </h2>
          <p className="font-poppins text-[13px] md:text-[15px]">
            Meet the exceptional legal practitioners who drive excellence and
            innovation at Practisepartner.
          </p>
          <div className="flex justify-between gap-4 overflow-x-auto md:flex-wrap md:justify-around md:overflow-hidden">
            {practitioners.map((item, index) => (
              <PractCard
                key={index}
                img={item.img}
                name={item.name}
                type={item.type}
                consultation={item.consultation}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-20">
            <button className="text-primary text-[10px] py-3 px-6 border-2 font-bold border-primary rounded-md md:text-[20px] md:py-5 md:px-8">
              View more practitioners
            </button>
          </div>
        </section>
        <section className="p-4 mt-8 lg:px-8">
          <LetsCollaborate />
        </section>
        <section className="p-4 mt-8 lg:px-8">
          <FrequentlyAskedQuestions />
        </section>
      </div>
      <RequireAssistance />
      <Footer />
    </div>
  );
};

export default ForLegalFirms;
