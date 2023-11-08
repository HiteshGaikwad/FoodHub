import {Link} from "react-router-dom"
import {useState} from "react";
import { IMG_LOGO_URL } from "../../Config";

const Section=({title, discription, isVisible, setIsVisible})=>{
    
    return(
        <div className="my-4 shadow-md rounded-xl p-3 shadow-gray-300">
            <h1 className="font-bold text-xl sm:text-2xl">{title}</h1>
            {
               !isVisible ?<button className="sm:text-lg text-md italic text-blue-700 font-bold" onClick={()=>{
                setIsVisible(true);
            }}>Show</button> : <><button className="sm:text-lg text-md italic text-blue-700 font-bold" onClick={()=>{
                setIsVisible(false);
            }}>Hide</button>  
            <p className="sm:text-lg text-sm font-semibold">{discription}</p>
            </>
            }
            
        <p></p>
        </div>
    )
}

const About=()=>{
    const [visibleSection, setVisibleSection] = useState("about");
    return (
    <div className="flex flex-col max-sm:gap-1 items-center">
        <div  className="h-80 m-3 py-5 px-12 flex flex-col items-center gap-5 ">
        <h1 className="sm:text-5xl text-2xl w-11/12 sm:w-96 font-bold">What’s the FoodHub story?</h1>
        <p className="sm:text-xl text-md max-w-xl font-semibold sm:leading-7 mx-7">With love and support from consumers, FoodHub expanded far and wide, first through the entire city of Mumbai and then across the entire country. Today, FoodHub is the leading food ordering and delivery platform in India.</p>
        <div className="max-sm:my-4"> 
            <h3 className="text-lg sm:text-2xl font-bold">This site is created by: <Link className="text-lg sm:text-2xl text-blue-800" to={"/profile"}>Hitesh Gaikwad</Link></h3>
        </div>
        
        </div>

        <div className="sm:m-7 max-sm:mt-20  w-4/5 sm:w-2/4">
        <Section title={"About"} discription={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum"} isVisible={visibleSection==="about"} 
        setIsVisible={()=>{
           setVisibleSection(visibleSection === "about" ? "" : "about");
        }}
        />

        
        <Section title={"Team"} discription={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum"} isVisible={visibleSection==="team"} 
        setIsVisible={()=>{
            setVisibleSection(visibleSection === "team" ? "" : "team");
        }}/>
      
        <Section title={"Product"} discription={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum"}isVisible={visibleSection==="product"} 
        setIsVisible={()=>{
            setVisibleSection(visibleSection === "product" ? "" : "product");
        }}/>
        </div>
    </div>
    )
}

export default About;