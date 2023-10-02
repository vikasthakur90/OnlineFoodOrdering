

const MenuItems = (props) =>{

    return <div className="p-2 m-2 h-auto text-left border-b-2 flex justify-between">
    <div className="w-8/12">
     <span className="font-semibold">{props?.card?.info?.name}</span>
      <p className="text-sm font-medium"> ₹{props?.card?.info?.price?props?.card?.info?.price/100:props?.card?.info?.defaultprice/100}</p>
      <p className="text-xs p-2">{props?.card?.info?.description}</p>
      </div>
      <div className="w-3/12 ml-1">
        <button className="mx-10 bg-white rounded-sm font-bold w-20 absolute">Add +</button>
    <img className="w-[150] h-50" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props?.card?.info?.imageId} />
    </div>
    </div>
}
export default MenuItems;