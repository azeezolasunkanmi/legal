import { practimg1, phone, mail, webIcon, star } from "../assets";
import { Footer, Publications } from "../components";

const PractitionerProfile = () => {
  return (
    <div className="w-full bg-white font-poppins">
      <div className="bg-[#242426] z-0 relative mt-12 h-[200px] md:h-[280px] md:mt-[84px] lg:h-[280px] lg:mt-[110px]">
        <p className="absolute top-[67%] right-[12.6%] text-white text-[13px] italic md:text-[20px] lg:text-[24px]">
          The law is reason, free from passion..
        </p>
      </div>
      <section className="relative w-full">
        <div className="w-[80px] h-[80px] ml-5 -mt-[40px] rounded-full border-4 border-[#53389E] bg-[#53389E] overflow-hidden z-50 md:-mt-[60px] md:ml-12 md:w-[120px] md:h-[120px] lg:ml-20 lg:-mt-[90px] lg:w-[180px] lg:h-[180px]">
          <img
            src={practimg1}
            className="w-full h-full object-cover"
            alt="profile picture"
          />
        </div>
        <div className="w-full py-2 flex flex-col gap-2 md:py-5 md:flex-row md:justify-between lg:py-8 lg:px-20">
          <div className="px-5">
            <p className="text-dimDark text-[24px] font-semibold md:text-[28px] lg:text-[36px]">
              Peter Coker
            </p>
            <p className="text-secondary text-[14px] font-normal md:text-[16px] lg:text-[20px]">
              Licensed by Nigerian Bar Association (NBA)
            </p>
            <p className="text-secondary text-[12px] font-normal py-[2px] md:hidden">
              Specialisations: Family law, Criminal law, Shipping and Maritime
              law, Commercial Law
            </p>
          </div>
          <div className="px-5 flex justify-between gap-5">
            <p className="text-dimDark text-[14px] font-normal md:text-[16px] lg:text-[20px] shrink-0 self-center">
              Replies within: 2 hours
            </p>
            <span className="shrink-0 self-center">
              <button className="bg-primary px-6 py-3  text-white rounded-lg text-[10px] cursor-pointer font-medium lg:px-8 lg:py-5 lg:text-[20px]">
                Request consultation
              </button>
            </span>
          </div>
        </div>
        <div className="hidden ml-4 md:block md:px-5 lg:px-20">
          <p className="text-dimDark text-[16px] lg:text-[20px]">
            Specializations
          </p>
          <div>
            <p className="inline-block mr-4 my-2 px-4 py-1 border border-primary specialization-bg rounded-lg text-primary text-[12px] lg:text-[16px] ">
              Family Law
            </p>
            <p className="inline-block mr-4 my-2 px-4 py-1 border border-primary specialization-bg rounded-lg text-primary text-[12px] lg:text-[16px] ">
              Criminal Law
            </p>
            <p className="inline-block mr-4 my-2 px-4 py-1 border border-primary specialization-bg rounded-lg text-primary text-[12px] lg:text-[16px] ">
              Shipping and Maritime Law
            </p>
            <p className="inline-block mr-4 my-2 px-4 py-1 border border-primary specialization-bg rounded-lg text-primary text-[12px] lg:text-[16px] ">
              Commercial Law
            </p>
          </div>
        </div>
        <div className="w-full mt-10 px-5 flex flex-col gap-4 lg:flex-row lg:px-20">
          <div className="p-4 md:p-6 lg:p-8 rounded-xl bg-[#F9F9F9]">
            <p className="text-dimDark text-[18px] font-semibold mb-6 md:text-[22px] lg:text-[26px]">
              About
            </p>
            <p className="text-dimDark text-[14px] md:text-[16px] lg:text-[20px]">
              With years of experience and a profound dedication to upholding
              the law, Peter Coker is a distinguished member of the Nigerian Bar
              Association (NBA) who has earned a stellar reputation for
              providing comprehensive legal counsel. He completed their
              undergraduate studies in law at University of Lagos, where they
              excelled academically and demonstrated exceptional aptitude in
              various legal disciplines.<br></br>
              <br></br> To learn more about their practice areas or to schedule
              a consultation, please don&apos;t hesitate to get in touch. Peter
              looks forward to serving as your trusted legal advocate.
            </p>
          </div>
          <div className="p-4 md:p-6 lg:p-8 rounded-xl bg-[#F9F9F9]">
            <p className="text-dimDark text-[18px] font-semibold mb-6 md:text-[22px] lg:text-[24px]">
              Contact Information
            </p>
            <p className="w-full flex justify-start gap-5 mb-4">
              <span className="bg-white box-shadow p-[6px] rounded-full shrink-0">
                <img src={phone} alt="phone" className="w-full h-full" />
              </span>
              <a
                href="tel:234 903 0022 547"
                className="self-center text-dimDark text-[16px] md:text-[20px]"
              >
                +234 903 0022 547
              </a>
            </p>
            <p className="w-full flex justify-start gap-5 mb-4">
              <span className="bg-white box-shadow p-[6px] rounded-full shrink-0">
                <img src={mail} alt="phone" className="w-full h-full" />
              </span>
              <a
                href="mailto:petercoker@gmail.com"
                className="self-center text-dimDark text-[16px] md:text-[20px]"
              >
                petercoker@gmail.com
              </a>
            </p>
            <p className="w-full flex justify-start gap-5 mb-4">
              <span className="bg-white box-shadow p-[6px] rounded-full shrink-0">
                <img src={webIcon} alt="phone" className="w-full h-full" />
              </span>
              <a
                href="petercoker.xyz.com"
                className="self-center text-dimDark text-[16px] md:text-[20px]"
              >
                petercoker.xyz.com
              </a>
            </p>
            <p className="text-dimDark text-[18px] font-semibold mb-6 md:text-[22px] lg:text-[24px]">
              Overall Rating
            </p>
            <p className="flex gap-1">
              <img
                src={star}
                alt="star"
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
              />
              <img
                src={star}
                alt="star"
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
              />
              <img
                src={star}
                alt="star"
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
              />
              <img
                src={star}
                alt="star"
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
              />
              <img
                src={star}
                alt="star"
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
              />
              <span>(65)</span>
            </p>
          </div>
        </div>
      </section>
      <section className="mt-20 px-4 lg:px-20">
        <Publications />
      </section>
      <Footer />
    </div>
  );
};

export default PractitionerProfile;
