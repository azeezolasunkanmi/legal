import { logoBotton } from "../assets";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-6  bg-dimSecondary">
      <div className="w-full my-6 flex flex-col items-center gap-8 md:flex-row md:items-start lg:px-10">
        <div className="w-full flex justify-between items-center md:flex-col md:items-start md:gap-6">
          <img src={logoBotton} className="w-[50px] h-[50px]" alt="logo" />
          <button className="bg-primary px-4 py-2 rounded-lg text-white">
            Request a demo
          </button>
        </div>
        <div className="w-full flex flex-col items-center gap-1 text-[16px] text-secondary md:items-start">
          <h3 className="text-white text-[18px]">Quick links</h3>
          <p>Pricing</p>
          <p>Partnership</p>
          <p>Resources</p>
          <p>About Us</p>
        </div>
        <div className="w-full flex flex-col items-center gap-1 text-[16px] text-secondary  md:items-start">
          <h3 className="text-white text-[18px]">Contact Us</h3>
          <p>Address: 4, Partner Road, Lagos, Nigeria</p>
          <p>Email: practisepartnes@gmail.com</p>
        </div>
        <div className="w-full flex justify-center gap-4 items-start  text-secondary">
          <FaLinkedin />
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
        </div>
      </div>
      <div className="flex justify-center items-center my-6 text-[14px] text-secondary  md:mt14">
        <p>Practice Partner. All Rights Reserved 2023.</p>
      </div>
    </div>
  );
};

export default Footer;
