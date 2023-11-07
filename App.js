import React,{useState, useContext} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Footer from "./src/Components/Footer";
import Restraurant from "./src/Components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error"
import Privacy from "./src/Components/Privacy";
import TremConditions from "./src/Components/TremsConditions";
import Profile from "./src/Components/Profile";
import { lazy, Suspense} from "react";
import Shimmer from "./src/Components/Shimmer";
// import UserContext from "./utils/UserContext";
import RestaurantContext from "./utils/RestaurantContext";
import Cart from "./src/Components/Cart";
import {Provider} from "react-redux";
import store from "./utils/store";

const RestaurantDetails= lazy(()=> import("/src/Components/RestaurantDetails.js"));


const AppLayout=()=> {
  // const [user, setUser]= useState({
  //   name:"Hitesh",
  //   email:"hitesh@gmail.com"
  // });

  // const {name,email}= useContext(UserContext);

  const [restaurants, setRestaurants]= useState([]);
  
  return (
    <>
    <Provider store={store}>
    <RestaurantContext.Provider value={{restaurants:restaurants,setRestaurants:setRestaurants}}>
    <Header/>
    <Outlet/>
    <Footer/>
    </RestaurantContext.Provider>
    </Provider>
    </>
  ) 
}

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/",
        element:<Restraurant/>
      },
      {
        //lazy loading , dynamic loading
        path:"/restaurant/:id",
        element:<Suspense fallback={<Shimmer/>}> <RestaurantDetails/></Suspense>,
        
      },
      {
        path:"/privacyPolicy",
        element:<Privacy/>
      },
      {
        path:"/terms&Conditions",
        element:<TremConditions/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ]
  },
  
]);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);