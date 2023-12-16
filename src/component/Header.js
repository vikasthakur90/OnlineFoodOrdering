import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{
    const [btnName,setbtnName] = useState("Login");
    const {isLogged} = useContext(UserContext);
    const cartItems = useSelector((store) =>store.cart.items);
    const onlineStatus = useOnlineStatus();
    console.log(cartItems);
    return(
        <div className="flex justify-between shadow-lg m-4">
        <div className="">
         <img className="w-24 rounded-md" alt="logo" src={LOGO_URL}/>
         </div>
        <div className="flex items-center">
            <ul className="flex p-2 m-2">
                <li className="px-4"><Link to={"/"}>Home</Link></li>
                <li className="px-4"><Link to={"/about"}>About Us</Link></li>
                <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
                <li className="px-4"><Link to={"/cart"}>Cart-({cartItems?.length} items)</Link></li>
                <li className="px-4">Online Status:{onlineStatus?"✅":"❌"}</li>
                <button className="px-4" onClick={()=>
                {
                    if(btnName === "Login"){
                        setbtnName("Logout")
                    }
                    else{
                        setbtnName("Login")
                    }
                }}>{btnName}</button>
                <li className="px-4 font-bold">{isLogged}</li>
                
            </ul>    
        </div>   
        
        </div>
    )
}
export default Header;