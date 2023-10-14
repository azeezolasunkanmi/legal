import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";

const Question = ({ title, description }) => {
  const [toggle, setToggle] = useState(false);

  const openQuestionHandler = () => {
    setToggle(prev => !prev);
  };

  return (
    <div
      className="p-4  mx-2 border-2 border-slate-200 rounded-xl h-auto shrink-0 cursor-pointer"
      onClick={openQuestionHandler}
    >
      <div className="flex justify-between items-center">
        <p>{title}</p>
        <IoIosArrowDown />
      </div>

      <div
        className={`${
          toggle ? "h-auto mt-4" : "h-0 mt-0"
        }  text-secondary overflow-hidden transition-all duration-200 ease-in`}
      >
        {description}
      </div>
    </div>
  );
};

Question.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Question;
