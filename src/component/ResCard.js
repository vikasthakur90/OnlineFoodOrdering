import { CDN_URL } from "../utils/constants";

const ResCard = (props) =>{
    const {resData} = props;
    //destructuring of props
    const {name, cuisines, avgRating, cloudinaryImageId, costForTwo} = resData?.info;
    return(
        <>
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <span>{cuisines.join(', ')}</span>
            <h4>Rating: {avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>Delivery Time: {resData.info.sla.deliveryTime} Minutes</h4>
            
        </div>
        </>
    )
}
export default ResCard;