import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { useState } from "react";
import "react-day-picker/dist/style.css";
import { dayPickerCss } from "../constants";
import { weekdays, consultTime } from "../constants";
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

  const timeSelectedHandler = e => {
    const previouslySelected = document.querySelector(".timeSelected");
    if (previouslySelected) {
      if (previouslySelected === e.target) {
        previouslySelected.classList.remove("timeSelected");
        setUserData({
          ...userData,
          time: "",
          day: "",
        });
        return;
      } else {
        previouslySelected.classList.remove("timeSelected");
        setUserData({
          ...userData,
          time: "",
          day: "",
        });
      }
    }

    e.target.classList.add("timeSelected");
    setUserData({
      ...userData,
      time: e.target.value,
      day: pickedDate,
    });
  };

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
          <div className="flex justify-between w-[90%]  md:w-[60%] lg:w-[50%]">
            <button
              type="button"
              className="w-[47%] text-center p-2 border-2 border-primary text-primary font-bold rounded-lg"
              onClick={() => setCurrentStep(2)}
            >
              Back
            </button>
            <button
              type="button"
              className="w-[47%] text-center p-2 bg-primary text-white rounded-lg"
              onClick={() => setCurrentStep(4)}
            >
              Continue
            </button>
          </div>
        </form>
        {selected && (
          <div className="w-full my-10 md:my-0 md:w-[20%]">
            <h2 className="text-center text-dimDark text-[18px] font-poppins font-medium md:text-[24px]">
              {weekdays[pickedDay]}
            </h2>
            <div className="p-5 flex flex-col items-center justify-start gap-4">
              {consultTime.map(time => (
                <input
                  key={time.id}
                  type="button"
                  value={time.time}
                  className="w-full py-2 border-2 border-primary font-medium text-[20px] font-poppins text-primary rounded-lg cursor-pointer"
                  onClick={timeSelectedHandler}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultFormThirdStep;
