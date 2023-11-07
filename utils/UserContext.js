import { createContext } from "react";

const UserContext= createContext({user:{
    name:"DummyName",
    email:"Dummy@gmail.com"
}})

export default UserContext;