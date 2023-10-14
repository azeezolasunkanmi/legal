import { useState } from "react";
import { searchResult } from "../constants";

const SecondSearch = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const onChangeHandler = event => {
    setInput(event.target.value);
    fetchData(event.target.value);
  };
  const fetchData = value => {
    const result = searchResult.filter(res => {
      return (
        value && res && res.title && res.title.toLowerCase().includes(value)
      );
    });
    setResult(result);
  };

  return (
    <div className="w-full flex flex-col gap-2 p-4 bg-white rounded-xl box-shadow md:gap-8">
      <h2 className="text-center text-dimDark text-[13px] font-medium font-poppins md:text-[18px] lg:text-[24px]">
        Enter practice area to find legal practitioners
      </h2>
      <div className="relative flex flex-col gap-2 md:flex-row">
        <input
          className="w-full border outline-none px-2 py-1 md:w-[40%] md:py-2"
          type="search"
          placeholder="Practice area"
          value={input}
          onChange={onChangeHandler}
        />
        <input
          className="w-full border outline-none px-2 py-1 md:w-[40%] md:py-2"
          type="text"
          placeholder="Location"
        />
        <button
          className="w-full bg-primary text-white rounded px-2 py-1 md:w-[20%] md:py-2"
          type="button"
        >
          Search
        </button>
        {result.length >= 1 && (
          <div className="absolute top-12 bg-white w-full md:w-[39.5%] p-2 text-secondary font-poppins">
            <ul className="max-h-[400px] overflow-y-scroll">
              {result.map((res, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-tertiary mt-2 text-[14px]"
                >
                  {res.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondSearch;
