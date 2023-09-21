import ResCard from "./ResCard";
import { restaurants } from "../utils/mockData";
import { useState,useEffect } from "react";

const Body =()=>{
    const [listOfRestaurants,setlistOfRestaurants] = useState(restaurants);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async ()=>{
      //  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       // const json = await data.json();
        //console.log(json);
    }
   if(listOfRestaurants === 0){
    return <Shimmer />
   }
    return(
        <div className="body">
        <div className="search">
           <button className="btn-filter" onClick={()=>{
            const filteredData = listOfRestaurants.filter(res=>res.info.avgRating>4);
            setlistOfRestaurants(filteredData);
           }}>Top rated restaurants</button>

        </div>
        <div className="res-container">
         {listOfRestaurants.map(res => <ResCard key ={res.info.id} resData = {res}/>)}
        </div>

        </div>
    )
}
export default Body;