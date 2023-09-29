import { useEffect, useState } from "react";

const useRestaurantMenu=(resId) =>{
    const [resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchData()
    },[]);
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setresInfo(json);
    }
    
    return resInfo;
}
export default useRestaurantMenu;