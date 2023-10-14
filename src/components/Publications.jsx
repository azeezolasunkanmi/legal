import PublisedItem from "./PublisedItem";
import { publications } from "../constants";

const Publications = () => {
  return (
    <div>
      <h2 className="text-dimDark text-[24px] font-semibold mb-6 md:text-[30px] lg:text-[36px]">
        Publications
      </h2>
      <section className="w-full md:flex md:flex-wrap md:justify-around">
        {publications.map((item, itemIndex) => (
          <PublisedItem
            key={itemIndex}
            img={item.img}
            title={item.title}
            content={item.content}
            time={item.time}
          />
        ))}
      </section>
      <div className="flex justify-center items-center my-20">
        <button className="text-primary text-[10px] py-3 px-6 border-2 font-bold border-primary rounded-md md:text-[20px] md:py-5 md:px-8">
          View more publicaions
        </button>
      </div>
    </div>
  );
};

export default Publications;
