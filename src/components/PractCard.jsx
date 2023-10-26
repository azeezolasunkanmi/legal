import { star } from "../assets";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PractCard = ({ img, type, name, consultation }) => {
  return (
    <div className="rounded-2xl border border-[#C4C4C4] mt-20 min-w-[250px]">
      <img src={img} alt="practitional image" className="w-[100%]" />
      <div className="px-4 py-3 font-poppins">
        <p className="text-[8px] text-secondary md:text-[10px]">{type}</p>
        <p className="text-[16px] text-dimDark md:text-[20px]">{name}</p>
        <p className="flex justify-start items-center gap-1 text-secondary text-[11px] mb-2 md:text-[12px]">
          <span className="shrink-0">
            <img src={star} alt="star" />
          </span>
          <span className="font-medium shrink-0">
            <span className="text-dimDark">5.0v</span> (65){consultation}
          </span>
        </p>
        <div className="flex justify-between my-4 gap-2">
          <Link to="/practitionerProfile">
            <button className="py-2 px-4 border border-primary text-primary text-[11px] rounded-lg shrink-0 md:px-5 md:text-[13px] lg:text-[14px]">
              View Profile
            </button>
          </Link>
          <Link to="/consult">
            <button className="py-2 px-4 bg-primary text-white text-[11px]  rounded-lg shrink-0 md:text-[13px] md:px-5 lg:text-[14px]">
              Consult
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

PractCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  consultation: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default PractCard;
