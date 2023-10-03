import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const ResCard = (props) =>{
    const {resData} = props;
    const {isLogged} = useContext(UserContext);
    //destructuring of props
    const {name, cuisines, avgRating, cloudinaryImageId, costForTwo} = resData?.info;
    return(
        <>
        <div className="w-52 m-4 p-4 shadow-lg hover:shadow-2xl">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <span>{cuisines.join(', ')}</span>
            <h4>Rating: {avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>Delivery Time: {resData.info.sla.deliveryTime} Minutes</h4>
            <h5>{isLogged}</h5>
        </div>
        </>
    )
}

export const PromotedResCard = () =>{
    return(props) =>{
        return(
            <div>
                <label className="absolute bg-black text-white p-2 rounded-md">Promoted</label>
                <ResCard {...props}/>
            </div>
        )
    }
}
export default ResCard;