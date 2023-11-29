import Google from "./assets/Images/Google-Play-Store.jpg";
import Apple from "./assets/Images/Apple App Store.png";
import { Link } from "react-router-dom";

const Footer=()=>{
    return (
      <div className="flex max-sm:flex-col max-sm:items-center gap-5 sm:flex-row justify-around sm:pt-8 py-4 bg-black text-white h-fit sm:py-4">
        <div className="flex max-sm:w-full w-3/4  justify-between px-4">
         <div className="flex max-sm:items-center flex-col g-1 sm:gap-3">
            <h3 className="text-lg max-sm:text-[16] font-semibold">COMPANY</h3>
            <Link className="text-md max-sm:text-sm hover:text-gray-400 w-fit" to={"/"}>Home</Link>
            <Link className="text-md max-sm:text-sm hover:text-gray-400 w-fit" to={"/about"}>About Us</Link>
            <Link className="text-md max-sm:text-sm hover:text-gray-400 w-fit" to={"/privacyPolicy"}>Privacy Policy</Link>
            <Link className="text-md max-sm:text-sm hover:text-gray-400 w-fit" to={"/terms&Conditions"}>Terms & Conditions</Link>
        </div>
        <div className="flex max-sm:items-center flex-col g-1 sm:gap-3">
            <h3 className="text-lg max-sm:text-[16px] font-semibold">CONTACT</h3>
            <Link className="text-md max-sm:text-sm hover:text-gray-400 w-fit" to={"/contact"}>Contact Us</Link>
        </div>
        <div className="flex max-sm:items-center flex-col g-1 sm:gap-3">
            <h3 className="text-lg max-sm:text-[16px] font-semibold">PROFILE</h3>
            <Link className="text-md max-sm:text-sm hover:text-gray-400 w-fit" to={"/profile"}>Profile</Link>
        </div>
        </div>
        <div className="flex max-sm:items-center sm:flex-col gap-10  sm:gap-5">
            <img className="w-40 max-sm:w-28 rounded-xl transition-transform ease-linear duration-100 hover:scale-105" src={Google} alt="" width="150px"/>
            <img className="w-40 h-14 max-sm:w-28 sm:h-20 rounded-xl transition-transform ease-linear duration-100 hover:scale-105" src={Apple} alt="" width="150px"/>
        </div>
      </div>
    )
  }

  export default Footer;