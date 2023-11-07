import {useParams} from "react-router-dom";
import {useEffect, useState, useContext} from "react";
import {FETCH_MENU_URL,IMG_CDN_URL,FETCH_RESTAURANT_URL} from "../../Config";
import Shimmer from "./Shimmer";
import{Link} from "react-router-dom";
import useOnline from "../../utils/useOnline";
import RestaurantContext from "../../utils/RestaurantContext";
import {useDispatch} from "react-redux";
import {addItems} from "../../utils/cartSlice"


const RestaurantDetails=()=>{


    const [menu, setMenu]=useState([]);
    const {id}= useParams();

    const {restaurants, setRestaurants}= useContext(RestaurantContext);

    const dispatch= useDispatch();

    const handleAddItems=(menu)=>{
        // console.log(menu)
        dispatch(addItems(menu));
    }

    useEffect(()=>{
        // getRestaurantMenu();
        filterRestaurant(restaurants);
    },[])

    function filterRestaurant(restaurants){
       for(let i=0; i<restaurants.length; i++){
        if(restaurants[i].info.id===id){
            setMenu(restaurants[i]);
            return;
        }
       }
    }

    const isOnline= useOnline();
      if(!isOnline){
        return <h1>OOPS!! You are offline, check your internet...</h1>
      }
    
    return ((menu.length===0)?<Shimmer/>:
        <div className="flex gap-7 mx-12 my-8">
            <div className="w-2/4 h-2/4">
                <img className="sm:w-full w-60 h-56 sm:h-80 rounded-xl" src={IMG_CDN_URL+menu?.info?.cloudinaryImageId}/>  
            </div>
            <div className="flex items-center max-sm:h-fit flex-col sm:w-full">
            <div className="flex flex-col gap-3 w-full sm:h-64 p-2 sm:p-5 rounded-xl shadow-lg shadow-gray-500">
            <h1 className="sm:text-4xl text-xl font-bold">{menu?.info?.name}</h1>
            <div className="flex justify-between align-middle" >
                <div className="flex flex-col gap-1 sm:gap-3 font-normal sm:font-medium text-md sm:text-xl">
                <h3>{menu?.info?.cuisines.join(", ")}</h3>
                <h5>{menu?.info?.areaName}</h5>
                <h4 className={menu?.info?.availability?.opened===true?"text-lime-500 sm:font-medium font-normal text-sm sm:text-lg flex text-center items-center justify-center w-20 h-8 sm:w-28 sm:h-12 rounded-lg shadow-md shadow-gray-600":"text-red-600 sm:font-medium font-normal text-sm sm:text-lg flex text-center items-center justify-center w-20 h-8 sm:w-28 sm:h-12 rounded-lg shadow-md shadow-gray-600"}>{menu?.info?.availability?.opened===true?"Open Now":"Close Now"}</h4>
                </div>
                <div className="sm:w-36 w-28">
                    <h3 className="p-2 max-sm:text-sm text-center shadow shadow-gray-500">{"⭐ "+menu?.info?.avgRating}</h3>
                    <h4 className="p-2 max-sm:text-xs shadow-md shadow-gray-500">{menu?.info?.totalRatingsString+" ratings"}</h4>
                </div>
                </div>
            </div>
            <button className="w-2/3 h-10 sm:h-12 mt-3 sm:mt-5 text-lg sm:text-2xl font-semibold hover:font-bold rounded-xl bg-orange-400 hover:bg-orange-500 border" onClick={()=>
                handleAddItems(menu)} >Add to Cart</button>
            </div>
           
        </div>
    )
}
export default RestaurantDetails;

