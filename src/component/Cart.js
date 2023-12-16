import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";

const Cart = () =>{
    const cartItems = useSelector((store) =>store.cart.items);
    console.log(cartItems);
    if(cartItems.length === 0)
    return(<h1>Oops cart is empty add some dish</h1>);
    else{
    return(<div>
        <h1 className="text-center text-xl font-bold">Cart</h1>
        <div>
        <MenuItems item = {cartItems}/>
        </div>
    </div>)}
}
export default Cart; 