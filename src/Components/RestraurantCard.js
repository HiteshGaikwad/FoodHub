import {IMG_CDN_URL} from "../../Config";

const RestraurantCard=({restraurant})=>{

  // console.log(restraurant);
    return (
      <div className="flex flex-col max-sm:h-44 max-sm:w-24 gap-1 sm:gap-2 p-1">
        <img className="w-24 sm:w-80 h-20 sm:h-56 rounded-lg" src={IMG_CDN_URL+restraurant?.info?.cloudinaryImageId} alt={restraurant?.info?.name}/>
        <h2 className="sm:text-2xl text-xs font-bold sm:font-semibold" >{restraurant?.info?.name}</h2>
        <h4 className="sm:text-lg text-[10px] max-sm:text-ellipsis max-sm:whitespace-normal max-sm:overflow-hidden font-normal">{restraurant?.info?.cuisines.join(", ")}</h4>
        <h3 className="text-[10px] sm:text-md ">{restraurant?.info?.sla?.slaString}</h3>
      </div>
    )
  }
  
  export default RestraurantCard;