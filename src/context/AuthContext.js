import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
    const [currentUser, setCurrentUser]=useState(JSON.parse(localStorage.getItem("currentUser")) || null);

const login=()=>{
    setCurrentUser({
        id:1,
        user:"Jude Gita",
        profileImg:"https://static.wixstatic.com/media/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg/v1/fill/w_740,h_494,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7fa9fc_20b81982b5174c6087d2c12fc071058e~mv2.jpg",


    })
}

useEffect(()=>{

    // converting to a string because, we can only store stuffs in local storage as a string
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    // we want to update our localStorage, ea ch time user changes

},[currentUser])

return(
    <AuthContext.Provider value={{currentUser, login}} >{children}
    
    </AuthContext.Provider>
)

}