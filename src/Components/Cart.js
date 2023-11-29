import {useSelector} from "react-redux";
import {IMG_CDN_URL} from "../../Config"
import {useDispatch} from "react-redux";
import {removeItems,clearCart} from "../../utils/cartSlice"
import { Link } from "react-router-dom";

const Cart=()=>{

    const itemsList= useSelector((store)=> store.cart.items);
    // console.log(itemsList);

    const dispatch= useDispatch();

    const handleRemoveItems=(index)=>{
        dispatch(removeItems(index));
    }
    const handleClearCart= ()=>{
        dispatch(clearCart());
    }
    return (
        <>
        <div className="flex items-center m-3  shadow-md rounded-xl sm:sticky top-0 z-50  bg-white shadow-gray-500 sm:h-24 h-16 gap-6 justify-between ">
           <div></div>
            <h1 className="sm:text-5xl text-2xl font-bold">Your Cart</h1>
            <button className="sm:mr-10 mr-6 sm:w-32 w-24 sm:h-14 h-10 rounded-lg sm:rounded-xl  sm:text-xl text-md font-semibold bg-orange-400 flex justify-center items-center hover:bg-orange-500 hover:font-bold" onClick={()=> handleClearCart()}>Clear Cart</button>
        </div>
        <div className="flex flex-col min-h-[300px]  items-center">
            {
                itemsList?.length===0 ?
                <div className="flex flex-col gap-5 justify-center items-center w-full h-96">
                 <h1 className="text-3xl  font-bold">Your cart is empty..!!</h1> 
                 <Link to={"/"}><button className="shadow-md shadow-gray-900 bg-gradient-to-r hover:from-blue-700 hover:scale-105 from-blue-500 px-4 py-2 text-xl font-bold rounded-full">Go to shop</button></Link>
                 </div>
                 :
                itemsList?.map((item,index)=>{
                    return (
             <div  key={index} className="flex flex-col m-2 sm:w-2/4 p-2 items-center shadow-xl rounded-xl shadow-gray-500">

               <Link to={"/restaurant/"+item?.info?.id} className="w-full ">
                <div className="flex w-full   gap-3 items-center rounded-xl ">
                <img className="w-3/6  sm:h-48 h-32 rounded-2xl shadow-lg shadow-gray-500" src={IMG_CDN_URL+item?.info?.cloudinaryImageId}/>
                <div className="flex flex-col w-3/6  sm:gap-3  max-sm:my-2">
                    <h1 className="sm:text-2xl text-lg font-semibold sm:font-bold">{item?.info?.name}</h1>
                    <h3 className="sm:text-xl text-md flex flex-wrap  font-normal sm:font-semibold">{item?.info?.cuisines.join(", ")}</h3>
                    <h2 className="sm:text-lg text-md font-medium">{item?.info?.costForTwo}</h2>
                </div>
             </div>
             </Link>

             <button className=" sm:w-72 sm:ml-72 ml-28 w-28 sm:mt-2 mt-1 sm:h-9 h-7 text-sm sm:text-lg font-semibold rounded-lg bg-orange-300 hover:bg-orange-400" onClick={()=>handleRemoveItems(index)}>Remove Item</button> 
            </div>
                    )
                })
            }
        </div>
        </>
)
}

export default Cart;