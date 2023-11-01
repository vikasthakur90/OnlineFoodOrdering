import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const MenuItems = (item) =>{
    const dispatch = useDispatch();
    const HandleClick = ()=>{
        dispatch(addItem(item));
    }
    return <div className="p-2 m-2 h-auto text-left border-b-2 flex justify-between">
    <div className="w-8/12">
     <span className="font-semibold">{item?.name}</span>
      <p className="text-sm font-medium"> ₹{item?.price?item?.price/100:item?.defaultprice/100}</p>
      <p className="text-xs p-2">{item?.description}</p>
      </div>
      <div className="w-3/12 ml-1">
        <button className="mx-10 bg-white rounded-sm font-bold w-20 absolute" onClick={HandleClick}>Add +</button>
    <img className="w-[150] h-50" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item?.imageId} />
    </div>
    </div>
}
export default MenuItems;