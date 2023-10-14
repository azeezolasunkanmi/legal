import PropTypes from "prop-types";

const WhyUs = ({ title2, text, linkText, img }) => {
  return (
    <section className="slide-in-left">
      <div className="w-full md:flex items-center gap-20 justify-between">
        <div className="flex flex-col gap-2 mb-4 md:mb-0 lg:gap-4 w-full md:w-[50%]">
          <p className="text-primary text-[18px] font-semibold px-4 ">
            For legal firms
          </p>
          <h3 className="text-dimDark text-[20px] font-semibold px-4 lg:text-[32px]">
            {title2}
          </h3>
          <p className="text-dimDark text-[16px] font-normal px-4 lg:text-[18px">
            {text}
          </p>
          <a
            href="#"
            className="text-lightPrimary text-[16px] px-4 font-normal underline"
          >
            {linkText}
          </a>
        </div>
        <div className="w-full md:w-[50%]">
          <img
            src={img}
            className="rounded-tl-[60px] rounded-br-[60px] w-full h-full px-4 object-contain"
            alt="whyus"
          />
        </div>
      </div>
    </section>
  );
};

WhyUs.propTypes = {
  title2: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default WhyUs;
