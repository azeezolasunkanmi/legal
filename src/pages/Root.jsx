import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Root = () => {
  return (
    <div className="bg-tertiary w-full overflow-hidden z-50 relative">
      <div className="p-4 md:py-5 xl:px-16 xl:py-7 w-full flex justify-center items-center fixed z-20 bg-tertiary">
        <div className="2xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="relative mt-12 md:mt-[84px] xl:mt-[110px]"></div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
