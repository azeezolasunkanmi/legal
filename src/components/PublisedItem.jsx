import { share } from "../assets";
import PropTypes from "prop-types";

const PublisedItem = ({ img, title, time, content }) => {
  return (
    <div className="min-w-[300px] h-[350px] my-4 rounded-xl bg-[#F9F9F9] border border-secondary overflow-hidden md:max-w-[30%]">
      <div className="w-full h-[42%]">
        <img src={img} className="w-full h-full object-cover rounded-t-xl" />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-dimDark text-[15px] md:text-[18px] font-medium">
              {title}
            </p>
            <p className="text-dimDark text-[10px] md:text-[12px] font-medium">
              {time}
            </p>
          </div>
          <span className="p-1 bg-white rounded-full box-shadow">
            <img src={share} alt="share" />
          </span>
        </div>
        <p className="text-dimDark text-[15px] md:text-[18px] text-ellipsis my-2 overflow-hidden">
          {content}
        </p>
      </div>
    </div>
  );
};

PublisedItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PublisedItem;
