import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { useState } from "react";
import "react-day-picker/dist/style.css";
import { dayPickerCss } from "../constants";
import { weekdays } from "../constants";
import { useContext } from "react";
import { MultiStepContext } from "../ConsultFormContext";

const ConsultFormThirdStep = () => {
  const [selected, setSelected] = useState();
  const { setCurrentStep, userData, setUserData } =
    useContext(MultiStepContext);
  const css = dayPickerCss;

  const disabledDays = [
    new Date(2023, 9, 15),
    new Date(2023, 9, 12),
    new Date(2023, 9, 20),
    { from: new Date(2023, 9, 18), to: new Date(2023, 9, 22) },
  ];

  let pickedDay = new Date(selected).getDay();
  let pickedDate = selected ? <p>{format(selected, "PP")}</p> : "";

  return (
    <div className="w-full overflow-hidden my-20">
      <div
        className={`${
          selected ? "md:flex md:justify-between" : "flex justify-center"
        } mb-10`}
      >
        <form className="flex flex-col gap-4 items-center w-full md:w-[80%]">
          <p className="text-dimDark text-[18px] font-medium">
            Select a date and time
          </p>
          <style>{css}</style>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            disabled={disabledDays}
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today",
              disabled: "my-disabled",
            }}
          />
          <button
            type="button"
            className="px-10 text-center py-2 mb-2 border-2 border-primary text-primary font-bold rounded-lg"
            onClick={() => setCurrentStep(4)}
          >
            Next
          </button>
        </form>
        {selected && (
          <div className="w-full my-10 md:my-0 md:w-[20%]">
            <h2 className="text-center text-dimDark text-[18px] font-poppins font-medium md:text-[24px]">
              {weekdays[pickedDay]}
            </h2>
            <div className="p-5 flex flex-col items-center justify-start gap-4">
              <input
                type="button"
                value={`9:30am`}
                className="w-full py-2 border-2 border-primary font-medium text-[20px] font-poppins text-primary rounded-lg cursor-pointer"
                onClick={e =>
                  setUserData({
                    ...userData,
                    time: e.target.value,
                    day: pickedDate,
                  })
                }
              />
              <input
                type="button"
                value={`10:30am`}
                className="w-full py-2 border-2 border-primary font-medium text-[20px] font-poppins text-primary rounded-lg cursor-pointer"
                onClick={e =>
                  setUserData({
                    ...userData,
                    time: e.target.value,
                    day: pickedDate,
                  })
                }
              />
              <input
                type="button"
                value={`11:30am`}
                className="w-full py-2 border-2 border-primary font-medium text-[20px] font-poppins text-primary rounded-lg cursor-pointer"
                onClick={e =>
                  setUserData({
                    ...userData,
                    time: e.target.value,
                    day: pickedDate,
                  })
                }
              />
              <input
                type="button"
                value={`12:30am`}
                className="w-full py-2 border-2 border-primary font-medium text-[20px] font-poppins text-primary rounded-lg cursor-pointer"
                onClick={e =>
                  setUserData({
                    ...userData,
                    time: e.target.value,
                    day: pickedDate,
                  })
                }
              />
              <input
                type="button"
                value={`1:30am`}
                className="w-full py-2 border-2 border-primary font-medium text-[20px] font-poppins text-primary rounded-lg cursor-pointer"
                onClick={e =>
                  setUserData({
                    ...userData,
                    time: e.target.value,
                    day: pickedDate,
                  })
                }
              />
              <input
                type="button"
                value={`2:30am`}
                className="w-full py-2 border-2 border-primary font-medium text-[20px] font-poppins text-primary rounded-lg cursor-pointer"
                onClick={e =>
                  setUserData({
                    ...userData,
                    time: e.target.value,
                    day: pickedDate,
                  })
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultFormThirdStep;
