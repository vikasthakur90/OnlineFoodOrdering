import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantsMenu = ()=> {
    const [resData,setresData] = useState(null);
    const {resId} = useParams();
   
    useEffect(()=>{
        fetchData()
    },[]);
    const fetchData =async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setresData(json);
    }
    if(resData===null){return <Shimmer />}
    const {name,cuisines,costForTwoMessage,avgRatingString} = resData?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    return(
    <div>
        <h1>{name}</h1>
        <p>{cuisines.join(" , ")} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
       { itemCards.map((res) =><li key={res.card.info.id}>{res.card.info.name} -{"Rs"} {res.card.info.defaultprice / 100 || res.card.info.price /100}</li>)}
        </ul>
    </div>);
}
export default RestaurantsMenu;