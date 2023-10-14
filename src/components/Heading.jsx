import PropTypes from "prop-types";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="w-full mt-6">
      <h2 className="text-dimDark text-center font-poppins font-semibold text-[25px] md:text-[35px] w-full p-4">
        {title}
      </h2>
      <p className="text-secondary font-poppins text-center text-[14px] px-6 md:px-16">
        {subtitle}
      </p>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Heading;
