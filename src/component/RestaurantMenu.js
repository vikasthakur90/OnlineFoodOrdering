import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
const RestaurantsMenu = ()=> {
    
    const {resId} = useParams();
    const resData = useRestaurantMenu(resId);
    const [showindex,setShowIndex] = useState(0);
    console.log(resData);
    if(resData===null){return <Shimmer />}
    const {name,cuisines,costForTwoMessage,avgRatingString} = resData?.data?.cards[2]?.card?.card?.info;
  
    const item = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(item);
    
    return(
    <div className="text-center">
        <h1 className="text-2xl font-bold m-8">{name}</h1>
        <p className="text-lg font-semibold m-4">{cuisines.join(" , ")} - {costForTwoMessage}</p>
        {item.map((c,index)=><MenuCategory key ={c.card.card.title} data = {c.card.card} 
        showitems={index===showindex?true:false} 
        setShowIndex ={()=>setShowIndex(index)}/>)}
        
       
    </div>);
}
export default RestaurantsMenu;