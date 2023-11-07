import {IMG_CDN_URL} from "../../Config";

const RestraurantCard=({restraurant})=>{

  // console.log(restraurant);
    return (
      <div className="flex flex-col gap-1 sm:gap-2 p-1">
        <img className="w-32 sm:w-80 h-24 sm:h-56 rounded-lg" src={IMG_CDN_URL+restraurant?.info?.cloudinaryImageId} alt={restraurant?.info?.name}/>
        <h2 className="sm:text-2xl text-sm font-semibold" >{restraurant?.info?.name}</h2>
        <h4 className="sm:text-lg text-sm font-normal">{restraurant?.info?.cuisines.join(", ")}</h4>
        <h3 className="text-xs sm:text-md ">{restraurant?.info?.sla?.slaString}</h3>
      </div>
    )
  }
  
  export default RestraurantCard;