import { useState,useEffect } from "react";
import MenuItems from "./MenuItems";


const MenuCategory = (props) =>{
    const [showitems,setShowitems] = useState(false);
    const menuToggle = ()=>{
        setShowitems(!showitems);
    }
    console.log(showitems);
    return <div className="bg-gray-50 my-4 p-2 w-6/12 m-auto" >
      <div className="flex justify-between font-bold cursor-pointer" onClick={menuToggle}> 
      <span> {props.title}({props.itemCards.length})</span>
       <span>↓</span>
       </div>
       {showitems && props.itemCards.map(c => <MenuItems key={c.card?.info?.id} {...props = c} />)}

    </div>
}
export default MenuCategory;