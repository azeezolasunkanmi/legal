import { searchResult } from "../constants";
import { useContext } from "react";
import { MultiStepContext } from "../ConsultFormContext";

const ConsultFormSecondStep = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(MultiStepContext);

  return (
    <div className=" w-full my-20 md:w-[70%] lg:w-[45%]">
      <form className="flex flex-col gap-10 mb-10">
        <input
          type="text"
          placeholder="Matter title"
          className="border w-full p-2 rounded-lg outline-none border-[#d9d9d9]"
          value={userData["title"]}
          onChange={e => setUserData({ ...userData, title: e.target.value })}
        />
        <select
          name="practice"
          id="practice"
          className="border outline-none border-[#d9d9d9] p-2 w-full rounded-lg"
          value={userData["practice"]}
          onChange={e => setUserData({ ...userData, practice: e.target.value })}
        >
          <option value="Practice area">Practice area</option>
          {searchResult.map((res, i) => (
            <option key={i} value={res.title}>
              {res.title}
            </option>
          ))}
        </select>
        <textarea
          id="textarea"
          name="textarea"
          rows="5"
          placeholder="Description"
          className="border w-full p-2 rounded-lg outline-none border-[#d9d9d9]"
          value={userData["description"]}
          onChange={e =>
            setUserData({ ...userData, description: e.target.value })
          }
        />
        <div className="flex justify-between">
          <button
            type="button"
            className="w-[47%] text-center p-2 border-2 border-primary text-primary font-bold rounded-lg"
            onClick={() => setCurrentStep(1)}
          >
            Back
          </button>
          <button
            type="button"
            className="w-[47%] text-center p-2 bg-primary text-white rounded-lg"
            onClick={() => setCurrentStep(3)}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConsultFormSecondStep;
