import { useDispatch, useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store) =>store.cart.items);
    const dispatch = useDispatch();
    const clear=()=>{
        dispatch(clearCart());
    }
    console.log(cartItems);
    if(cartItems.length === 0)
    return(<h1>Oops cart is empty add some dish</h1>);
    else{
    return(<div className="bg-gray-50 my-4 p-2 w-8/12 m-auto">
        <h1 className="text-center text-xl font-bold">Cart</h1>
        <button onClick={clear}>Clear Cart</button>
        <div>
        {cartItems.map((d)=><MenuItems key ={d.id} {...item = d}/>)}

        </div>
    </div>)}
}
export default Cart; 