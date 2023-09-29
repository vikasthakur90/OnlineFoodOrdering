import ResCard from "./ResCard";
import { restaurants } from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body =()=>{
    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    const [filteredRestaurants,setfilteredRestaurants] = useState([]);
    const [searchText,setsearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async ()=>{
        //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //const json = await data.json();
        //console.log(json);
    //    setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setlistOfRestaurants(restaurants);
      setfilteredRestaurants(restaurants);
      //  setfilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    //Conditional Rendering
  
    return listOfRestaurants.length===0?(<Shimmer />) : (
        <div className="body">
        <div className="mx-4 px-4">
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

        </div>
        <div className="flex flex-wrap">
         {filteredRestaurants.map(res =>(<Link to={"/restaurants/"+res.info.id} key ={res.info.id}> <ResCard  resData = {res}/></Link>))}
        </div>

        </div>
    )
}
export default Body;