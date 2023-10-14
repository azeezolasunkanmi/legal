import PropTypes from "prop-types";

const Stats = ({ img, title, amount }) => {
  return (
    <div className="bg-primary my-2 px-4 py-6 rounded-xl w-full flex flex-col md:w-[30%]">
      <img
        src={img}
        alt="shake hands"
        className="cursor-pointer mx-auto bg-white p-2 rounded-full"
      />

      <p className="text-white text-center text-[26px] font-medium shrink-0 md:text-[32px]">
        {amount}
      </p>
      <p className="text-white text-center shrink-0 text-[16px]">{title}</p>
    </div>
  );
};

Stats.propTypes = {
  amount: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Stats;
