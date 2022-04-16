import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return (
        <div>
            <img className="basketIcon"src="https://img.icons8.com/color-glass/48/000000/add-shopping-cart.png" alt="BasketIcon"/>
            <h3>TOTAL: $ {totalPrice}</h3>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
        </div>
    )
}
export default Cart;