import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { useState } from "react";
import "react-day-picker/dist/style.css";

const ConsultFormFourthStep = () => {
  const [selected, setSelected] = useState();

  const css = `
  .my-today{
    color: red
  }
  
  .my-selected{
    background-color: #737373
  }`;

  return (
    <div className="w-[80%] p-[5%]">
      <form className="flex flex-col gap-8 items-center">
        <p className="text-dimDark text-[18px]">Select a date and time</p>
        <style>{css}</style>
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          modifiersClassNames={{ selected: "my-selected", today: "my-today" }}
        />
        <button
          type="button"
          className="px-10 text-center py-2 border-2 border-primary text-primary font-bold rounded-lg"
        >
          Next
        </button>
      </form>
      {selected && format(selected, "PP")}
    </div>
  );
};

export default ConsultFormFourthStep;
