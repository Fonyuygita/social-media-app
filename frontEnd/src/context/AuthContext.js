import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
    const [currentUser, setCurrentUser]=useState(JSON.parse(localStorage.getItem("currentUser")) || null);

const login= async(inputs)=>{
    const res= await axios.post("http://localhost:5000/api/auth/login", inputs, {
        withCredentials:true
    })
setCurrentUser(res.data)

}


useEffect(()=>{

    // converting to a string because, we can only store stuffs in local storage as a string
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    // we want to update our localStorage, ea ch time user changes

},[currentUser])

return(
    <AuthContext.Provider value={{currentUser, login}}>
    {children} 
    </AuthContext.Provider>
    
)

}