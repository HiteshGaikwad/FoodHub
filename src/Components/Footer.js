import Google from "./assets/Images/Google-Play-Store.jpg";
import Apple from "./assets/Images/Apple App Store.png";
import { Link } from "react-router-dom";

const Footer=()=>{
    return (
      <div className="flex flex-col max-sm:items-center gap-5 sm:flex-row justify-around pt-8 bg-black text-white h-fit py-4">
         <div className="flex max-sm:items-center flex-col g-1 sm:gap-3">
            <h3 className="text-lg max-sm:text-sm font-semibold">COMPANY</h3>
            <Link className="text-md hover:text-gray-400 w-fit" to={"/"}>Home</Link>
            <Link className="text-md hover:text-gray-400 w-fit" to={"/about"}>About Us</Link>
            <Link className="text-md hover:text-gray-400 w-fit" to={"/privacyPolicy"}>Privacy Policy</Link>
            <Link className="text-md hover:text-gray-400 w-fit" to={"/terms&Conditions"}>Terms & Conditions</Link>
        </div>
        <div className="flex max-sm:items-center flex-col g-1 sm:gap-3">
            <h3 className="text-lg max-sm:text-sm font-semibold">CONTACT</h3>
            <Link className="text-md hover:text-gray-400 w-fit" to={"/contact"}>Contact Us</Link>
           
        </div>
        <div className="flex max-sm:items-center flex-col g-1 sm:gap-3">
            <h3 className="text-lg max-sm:text-sm font-semibold">PROFILE</h3>
            <Link className="text-md hover:text-gray-400 w-fit" to={"/profile"}>Profile</Link>
            
        </div>
        <div className="flex max-sm:items-center sm:flex-col gap-2 sm:gap-5">
            <img className="w-40 max-sm:w-32  rounded-xl transition-transform ease-linear duration-100 hover:scale-105" src={Google} alt="" width="150px"/>
            <img className="w-40 h-16 max-sm:w-32 sm:h-20 rounded-xl transition-transform ease-linear duration-100 hover:scale-105" src={Apple} alt="" width="150px"/>
        </div>
      </div>
    )
  }

  export default Footer;