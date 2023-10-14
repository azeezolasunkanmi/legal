import PropTypes from "prop-types";

const Card = ({ img, title, text }) => {
  return (
    <div className="px-4 my-6 lg:px-10">
      <img
        src={img}
        className="object-cover w-[150px] h-[150px] rounded-full my-2 mx-auto"
      />
      <h3 className="text-dimDark text-center text-[16px] my-4 font-poppins font-semibold">
        {title}
      </h3>
      <p className="text-dimDark text-center px-2 text-[14px] my-4 font-poppins sm:px-8 md:px-2">
        {text}
      </p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
