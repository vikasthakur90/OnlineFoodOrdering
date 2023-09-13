import ResCard from "./ResCard";


const Body =()=>{
    return(
        <div className="body">
        <div className="search">
            <h4>search</h4>
        </div>
        <div className="res-container">
         {restaurants.map(res => <ResCard key ={res.info.id} resData = {res}/>)}
        </div>

        </div>
    )
}
export default Body;