import { search, mic } from "../assets";

const Search = () => {
  return (
    <div className="bg-white p-4 max-w-[95%] flex justify-between  items-center rounded-xl box-shadow mx-auto md:max-w-[80%] md:px-8 md:justify-center md:gap-5 lg:px-12">
      <div className="w-[80%] flex justify-between items-center border-[1px] rounded-md  lg:py-2">
        <span className="flex w-[80%] items-center gap-[5px] ml-[5px]">
          <img
            src={search}
            alt="mic"
            className="w-[15px] h-[15px] cursor-pointer"
          />
          <input
            type="search"
            placeholder="Input for a practice area..."
            className="p-1 outline-[0px] cursor-pointer w-full"
          />
        </span>
        <span className="rounded-full bg-primary mr-[5px]">
          <img
            src={mic}
            alt="mic"
            className="w-[20px] h-[20px] p-[2px] cursor-pointer"
          />
        </span>
      </div>
      <button className="text-white bg-primary px-3 shrink-0 py-2  rounded-lg text-[10px] font-[600] font-poppins md:px-5 md:text-[15px] lg:hidden">
        Search
      </button>
      <button className="hidden lg:inline-block text-white bg-primary px-2 shrink-0 py-2 md:px-10 md:py-4 rounded-lg text-[10px] md:text-[20px] font-[600] font-poppins">
        Search for a Practice
      </button>
    </div>
  );
};

export default Search;
