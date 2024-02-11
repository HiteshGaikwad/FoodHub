import {RestraurantList} from "../../Config";
import {useState, useEffect,useContext} from "react";
import RestraurantCard from "./RestraurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {findSearchText} from "../../utils/helper";
import {FETCH_RESTAURANT_URL} from "../../Config";
import useOnline from "../../utils/useOnline";
import RestaurantContext from "../../utils/RestaurantContext";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurants } from "../../utils/RestaurantsListSlice";
import axios from "axios";

const Restraurant=()=>{


  const restaurantsList= useSelector((store)=>store.restaurantsList.list);
  const dispatch= useDispatch();

   const [searchText, setSearchText]= useState("");
   const [filteredRestraurant, setFilteredRestraurant] = useState([]);
  const [allRestraurants, setAllRestraurant]= useState([]);

  // const {restaurants,setRestaurants}= useContext(RestaurantContext);

    useEffect(()=>{
        getRestraurant();
        
      },[]);


    async function getRestraurant(){
      
      try {
        if(restaurantsList.length!==0){
          setFilteredRestraurant(restaurantsList)
          setAllRestraurant(restaurantsList);
        } else{
          const data= await fetch(FETCH_RESTAURANT_URL);
          
          const result= await data.json();
          console.log(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          let getDatafromRestaurant= result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if(getDatafromRestaurant===undefined){
            getDatafromRestaurant=result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          }
          

        handleSetAllRestraurant(getDatafromRestaurant);
        handleSetFilteredRestraurant(getDatafromRestaurant);
          
          
  
          // storing data in the cache
         dispatch(addRestaurants(getDatafromRestaurant));
      }
      } catch (error) {
        console.log("error ", error);
      }
      // checking data from the cache 
      
    }

    function handleSetAllRestraurant(getDatafromRestaurant){
      setAllRestraurant(getDatafromRestaurant)
    }

    function handleSetFilteredRestraurant(getDatafromRestaurant){
      setFilteredRestraurant(getDatafromRestaurant)
    }

      const isOnline= useOnline();

      if(!isOnline){
        return <h1 className="max-sm:pl-5 text-lg sm:text-3xl  font-bold flex justify-center items-center h-screen">OOPS!! You are offline, check your internet...</h1>
      }

    return ((allRestraurants.length===0)?<Shimmer/>:
      <div className="flex flex-col max-sm:min-h-screen sm:min-h-screen">
      <div className=" m-3 p-4 flex space-x-6 justify-center">
        <input className="max-sm:w-96 w-2/4 h-8 sm:h-12 rounded-xl outline-none p-2 bg-gray-200 focus:bg-white focus:shadow-lg focus:shadow-slate-500 sm:placeholder:text-xl sm:placeholder:p-2" placeholder="Search for restaurant and food" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
           <button className="sm:w-32 w-24 max-sm:h-8 h-12 sm:rounded-full rounded-xl bg-gray-200 text-sm sm:text-xl font-semibold hover:bg-gray-300 shadow-md shadow-gray-500" onClick={ (e)=>{
            const data=findSearchText(searchText, allRestraurants);
           setFilteredRestraurant(data);
          }}>Search</button> 
       </div>
       <div className="flex sm:w-full justify-center">
      <div className="flex sm:w-11/12 p-3 flex-wrap  my-5 gap-5">
        {

          filteredRestraurant.length===0?<h1 className="sm:text-4xl text-xl font-bold w-full sm:h-72 flex justify-center items-center">No Match Found For Your Search...!!</h1>:filteredRestraurant.map((restraurant)=>{
            {console.log(filteredRestraurant.length);}
                return (<Link className="flex w-full sm:w-80 sm:p-1 rounded-lg shadow-lg flex-col shadow-gray-500 flex-wrap gap-2 transition-transform ease-linear hover:scale-105 duration-200" to={"/restaurant/"+restraurant?.info?.id} key={restraurant?.info?.id}><RestraurantCard restraurant={restraurant} /></Link>)
            })
        } 

      </div>

      </div>
      </div>
    )
  }

  export default Restraurant;


