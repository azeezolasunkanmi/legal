const ConsultStepper = () => {
  return (
    <section>
      <div className="hidden md:block mt-[180px]">
        <div className="flex justify-center items-center w-[80%] mx-auto mt-1">
          <span className="w-[25%] relative">
            <p className="text-center font-semibold w-[25px] h-[25px] rounded-[100%] bg-primary text-white mx-auto">
              1
            </p>
            <div className="absolute h-[1px] bg-secondary right-0 w-[50%] top-[50%] -z-10"></div>
          </span>

          <span className="w-[25%] relative">
            <p className="text-center font-semibold w-[25px] h-[25px] rounded-[100%] border border-secondary text-dimDark bg-tertiary mx-auto">
              2
            </p>
            <div className="absolute h-[1px] bg-secondary right-0 w-[100%] top-[50%] -z-10"></div>
          </span>
          <span className="w-[25%] relative">
            <p className="text-center font-semibold w-[25px] h-[25px] rounded-[100%] border border-secondary text-dimDark bg-tertiary mx-auto">
              3
            </p>
            <div className="absolute h-[1px] bg-secondary right-0 w-[100%] top-[50%] -z-10"></div>
          </span>
          <span className="w-[25%] relative">
            <p className="text-center font-semibold w-[25px] h-[25px] rounded-[100%] border border-secondary text-dimDark bg-tertiary mx-auto">
              4
            </p>
            <div className="absolute h-[1px] bg-secondary left-0 w-[50%] top-[50%] -z-10"></div>
          </span>
        </div>
        <div className="flex justify-center items-center w-[80%] mx-auto mt-1">
          <span className="w-[25%]">
            <p className="text-center text-primary font-semibold">
              Personal Information
            </p>
          </span>

          <span className="w-[25%]">
            <p className="text-center font-semibold">Matter Details</p>
          </span>
          <span className="w-[25%]">
            <p className="text-center font-semibold">Availability</p>
          </span>
          <span className="w-[25%]">
            <p className="text-center font-semibold">Summary</p>
          </span>
        </div>
      </div>

      <div className="mt-[180px] mx-4 md:hidden">
        <div className="flex justify-between">
          <h2 className="text-dimDark text-[18px] font-semibold font-poppins self-center">
            Personal Information
          </h2>
          <span className="rounded-full border-t-4 border-primary h-12 w-12 flex justify-center items-center outline outline-slate-200">
            <p className="text-dimDark text-[16px] font-semibold font-poppins text-center">
              25%
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ConsultStepper;
