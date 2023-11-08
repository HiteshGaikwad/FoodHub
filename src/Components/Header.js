import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import { IMG_LOGO_URL , IMG_MENU_ICON_URL, IMG_CLOSE_ICON_URL } from "../../Config";
// import UserContext from "../../utils/UserContext";
import {useSelector} from "react-redux";
import useOnline from "../../utils/useOnline";

const Logo=()=>{
    return <img className="w-12 h-12 sm:w-20 sm:h-20 ml-1 sm:ml-3" src={IMG_LOGO_URL} alt="logo"/>;
}


const Header=()=>{  
  const [logIn, setLogIn]= useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOnline= useOnline();

  const items= useSelector((store)=> store.cart.items);
// console.log(items);

    return (
      <div className="p-3 shadow-md sticky top-0 z-50 bg-white flex justify-between">
        <Logo/>
        {
          (!isOnline)?<div className="sm:hidden m-6 p-1 w-5 h-5 rounded-full bg-red-500"></div>: <div className="sm:hidden m-6 p-1 w-5 h-5 rounded-full bg-green-500"></div> 
        }
        <div className="hidden gap-10 items-center sm:flex">
        {
          (!isOnline)?<div className=" p-1 w-5 h-5 rounded-full bg-red-500"></div>: <div className=" p-1 w-5 h-5 rounded-full bg-green-500"></div> 
          
        }
        <ul className="flex space-x-5 py-4 items-center text-lg">
        
          <li key="home"><Link className="hover:text-blue-600" to={"/"}>Home</Link></li>
          <li key="about"><Link className="hover:text-blue-600" to={"/about"}>About Us</Link></li>
          <li key="contact"><Link className="hover:text-blue-600" to={"/contact"}>Contact Us</Link></li>
           </ul>
           
           <div key="cart"><Link className=" hover:text-blue-600 flex w-12 h-14 justify-center items-center relative text-xl mr-5" to={"/cart"}>Cart <div className="m-1 w-7 rounded-full flex items-center justify-center h-7 text-lg text-white bg-red-500 hover:bg-red-700 absolute bottom-6 left-8">{items.length}</div></Link></div>
        {(!logIn)?
        <button className=" w-24 h-11 p-1 border-rad text-white rounded-full text-lg font-medium bg-indigo-500 shadow-lg shadow-indigo-500/80 hover:bg-indigo-700" onClick={()=>{setLogIn(true)}}>Log In</button>:
        <button className=" w-24 h-11 p-1 border-rad text-white rounded-full text-lg font-medium bg-indigo-500 shadow-lg shadow-indigo-500/80 hover:bg-indigo-700" onClick={()=>{
          setLogIn(false)
        }}>Log Out</button>
        }
        </div>
        <div className="sm:hidden" key="cart"><Link className=" hover:text-blue-600 sm:hidden flex w-12 h-14 justify-center items-center relative text-xl font-bold mt-3 mr-5" to={"/cart"}>Cart <div className="m-1 w-7 sm:hidden rounded-full flex items-center justify-center h-7 text-lg text-white bg-red-500 hover:bg-red-700 absolute bottom-6 left-8">{items.length}</div></Link></div>
        { (!isMenuOpen) ? 
        <img src={IMG_MENU_ICON_URL} className="bg-blend-darken w-16 flex sm:hidden"  onClick={()=>setIsMenuOpen(true)}/> :
        <div className="sm:hidden h-screen absolute top-0 right-0 z-50 bg-white shadow-xl shadow-gray-500 w-2/4 rounded-tl-xl rounded-bl-xl">
        <img src={IMG_CLOSE_ICON_URL} className="bg-blend-darken w-12 h-12 flex sm:hidden mt-5"  onClick={()=>setIsMenuOpen(false)}/>
        <div className="flex flex-col justify-center items-center gap-10 mt-16">
        <ul className="flex flex-col mt-9 gap-3 space-x-5 py-4 items-center text-lg font-bold">
        <li key="home"><Link onClick={()=>setIsMenuOpen(false)} className="hover:text-blue-600" to={"/"}>Home</Link></li>
        <li key="about"><Link onClick={()=>setIsMenuOpen(false)} className="hover:text-blue-600" to={"/about"}>About Us</Link></li>
        <li key="contact"><Link onClick={()=>setIsMenuOpen(false)} className="hover:text-blue-600" to={"/contact"}>Contact Us</Link></li>
         </ul>
         {(!logIn)?
        <button  className=" w-24 h-11 p-1 border-rad text-white rounded-full text-lg font-medium bg-indigo-500 shadow-lg shadow-indigo-500/80 hover:bg-indigo-700" onClick={()=>{setLogIn(true)}}>Log In</button>:
        <button className=" w-24 h-11 p-1 border-rad text-white rounded-full text-lg font-medium bg-indigo-500 shadow-lg shadow-indigo-500/80 hover:bg-indigo-700" onClick={()=>{
          setLogIn(false)
        }}>Log Out</button>
        }
        </div>
        </div>
        }
      </div>
    )
}

 export default Header;