import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import {
  FETCH_MENU_URL,
  IMG_CDN_URL,
  FETCH_RESTAURANT_URL,
  RestraurantList,
} from "../../Config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import RestaurantContext from "../../utils/RestaurantContext";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../utils/cartSlice";

const RestaurantDetails = () => {
  const restaurantsList = useSelector((store) => store.restaurantsList.list);
  const [menu, setMenu] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();

  const handleAddItems = (menu) => {
    // console.log(menu)
    dispatch(addItems(menu));
  };

  useEffect(() => {
    filterRestaurant();
  }, []);

  function filterRestaurant() {
    // console.log(restaurantsList[0])
    const list = RestraurantList;
    for (let i = 0; i < list?.length; i++) {
      if (list[i]?.data?.id === id) {
        setMenu(list[i]);
        return;
      }
    }
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>OOPS!! You are offline, check your internet...</h1>;
  }

  return menu.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex max-sm:my-5 max-sm:flex-col max-sm:align-middle max-sm:min-h-screen min-h-[50vh] sm:gap-7 gap-11 sm:mx-12 max-sm:px-2 sm:my-8">
      <div className="w-2/4 max-sm:w-full h-2/4">
        <img
          className="sm:w-full w-[95vw] shadow-md shadow-gray-600 h-64 sm:h-80 rounded-xl"
          src={IMG_CDN_URL + menu?.data?.cloudinaryImageId}
        />
      </div>
      <div className="flex items-center max-sm:w-full max-sm:h-fit flex-col w-full">
        <div className="flex max-sm:p-5 flex-col gap-3 w-full h-fit sm:h-64 p-2 sm:p-5 rounded-xl shadow-lg shadow-gray-500">
          <h1 className="sm:text-4xl text-2xl font-bold">{menu?.data?.name}</h1>
          <div className="flex  max-sm:gap-6 justify-between align-middle">
            <div className="flex flex-col gap-1 sm:gap-3 font-normal sm:font-medium text-lg sm:text-xl">
              <h3 className="font-semibold">
                {menu?.data?.cuisines.join(", ")}
              </h3>
              <h5>{menu?.data?.areaName}</h5>
              <h4
                className={
                  menu?.data?.availability?.opened === true
                    ? "text-lime-500 sm:font-medium font-normal text-sm sm:text-lg flex text-center items-center justify-center w-20 h-8 sm:w-28 sm:h-12 rounded-lg shadow-md shadow-gray-600"
                    : "text-red-600 sm:font-medium font-normal text-sm sm:text-lg flex text-center items-center justify-center w-20 h-8 sm:w-28 sm:h-12 rounded-lg shadow-md shadow-gray-600"
                }
              >
                {menu?.data?.availability?.opened === true
                  ? "Open Now"
                  : "Close Now"}
              </h4>
            </div>
            <div className="sm:w-36 w-32">
              <h3 className="sm:p-2 p-1 max-sm:text-sm text-center shadow shadow-gray-500">
                ⭐{" "}
                {menu?.data?.avgRating === undefined
                  ? " 3.2"
                  : menu?.data?.avgRating}
              </h3>
              <h4 className="sm:p-2 p-1 max-sm:text-xs text-center  shadow-md shadow-gray-500">
                {menu?.data?.totalRatingsString === undefined
                  ? "2.3k+"
                  : menu?.data?.totalRatingsString}{" "}
                ratings
              </h4>
            </div>
          </div>
        </div>
        <button
          className="w-2/3  h-10 sm:h-12 mt-5 sm:mt-5 text-md sm:text-2xl font-semibold hover:font-bold rounded-xl bg-orange-400 hover:bg-orange-500 border"
          onClick={() => handleAddItems(menu)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default RestaurantDetails;
