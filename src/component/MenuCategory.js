import MenuItems from "./MenuItems";


const MenuCategory = ({data,showitems,setShowIndex}) =>{
   
    const menuToggle = ()=>{
        setShowIndex();
        console.log("clicked");
    }
    console.log(data);
    return <div className="bg-gray-50 my-4 p-2 w-6/12 m-auto" >
      <div className="flex justify-between font-bold cursor-pointer" onClick={menuToggle}> 
      <span> {data.title}({data.itemCards.length})</span>
       <span>↓</span>
       </div>
       {showitems && data.itemCards.map(d => <MenuItems key={d.card?.info?.id} {...item = d?.card?.info} />)}

    </div>
}
export default MenuCategory;