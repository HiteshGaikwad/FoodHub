import { IMG_CDN_URL } from "../../Config";

const RestraurantCard = ({ restraurant }) => {
  console.log(restraurant);
  return (
    <div className="flex flex-col max-sm:h-[300px] max-sm:w-full gap-1 sm:gap-2 p-1">
      <img
        className="w-full sm:w-80 h-3/4 sm:h-56 rounded-lg"
        src={IMG_CDN_URL + restraurant?.data?.cloudinaryImageId}
        alt={restraurant?.data?.name}
      />
      <h2 className="sm:text-2xl text-xl font-bold sm:font-semibold">
        {restraurant?.data?.name}
      </h2>
      <h4 className="sm:text-lg text-sm w-full max-sm:line-clamp-1 line-clamp-2 overflow-hidden font-normal">
        {restraurant?.data?.cuisines.join(", ")}
      </h4>
      <h3 className="text-[10px] sm:text-md ">
        {restraurant?.data?.slaString}
      </h3>
    </div>
  );
};

export default RestraurantCard;
