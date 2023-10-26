import heroBackground from "../assets/hero.svg";
import Search from "./Search";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-no-repeat bg-cover bg-center z-0 pb-10 relative"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="flex flex-col lg:pb-4">
        <h2 className="font-poppins font-[500] text-center text-white text-[26px] md:text-[46px] mt-10 md:mt-20 md:max-w-[90%] mx-auto px-4 leading-normal">
          Revolutionize your legal practice with cutting-edge digital solutions
        </h2>
        <p className="text-white my-4 text-center font-poppins text-[16px] md:text-[24px] font-normal">
          Stream line your workflows and boost efficiency
        </p>
        <div className="flex justify-center items-center gap-3 mb-14 mt-6 md:mt-12">
          <Link className="text-white my-4 bg-primary px-5 py-2 md:px-10 md:py-4 rounded-lg text-[10px] md:text-[20px] font-[600] font-poppins">
            Request a demo
          </Link>
          <Link
            to="/auth"
            className="text-white my-4 px-5 py-2 md:px-10 md:py-4 rounded-lg border-2 border-white text-[10px] md:text-[20px] font-[600] font-poppins"
          >
            Sign in
          </Link>
        </div>
      </div>
      <div className="absolute w-full -bottom-8 lg:-bottom-12">
        <Search />
      </div>
    </section>
  );
};

export default Hero;
