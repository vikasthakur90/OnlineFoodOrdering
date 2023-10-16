import ResCard,{ PromotedResCard} from "./ResCard";
import { restaurants } from "../utils/mockData";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Body =()=>{
    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    const [filteredRestaurants,setfilteredRestaurants] = useState([]);
    const [searchText,setsearchText] = useState("");
    
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //setlistOfRestaurants(restaurants);
        //setfilteredRestaurants(restaurants);
        setfilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const {isLogged,setUsername} = useContext(UserContext)
    //Conditional Rendering
    const PromotedRestCard = PromotedResCard(filteredRestaurants);
    return (listOfRestaurants.length===0 && filteredRestaurants.length===0)?(<Shimmer />) : (
        <div className="body">
        <div className="text-center px-4">
            <input className="border border-solid border-black" value={searchText} onChange={(e)=>{
                setsearchText(e.target.value);
                
            }}></input>
            <button className="px-4 py-2 bg-green-100 m-4 rounded-md" onClick={()=>{
                const filter1 = listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setfilteredRestaurants(filter1);
            }}>Search</button>

           <button className="px-4 py-2 bg-green-100 m-4 rounded-md" onClick={()=>{
            const filteredData = listOfRestaurants.filter(res=>res.info.avgRating>4);
            setfilteredRestaurants(filteredData);
           }}>Top rated restaurants</button>
            <label className="p-2">Username</label>
            <input className="p-2 border border-solid border-black" value={isLogged} onChange={(e)=>
                {setUsername(e.target.value);
                }}></input>
        </div>
        <div className="flex flex-wrap">
         {filteredRestaurants.map(res =>(<Link to={"/restaurants/"+res.info.id} key ={res.info.id}> 
        { res.info?.promoted ? <PromotedRestCard resData = {res} />:<ResCard  resData = {res}/>}</Link>
         ))}
        </div>

        </div>
    )
}
export default Body;