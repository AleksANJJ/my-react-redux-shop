import { useDispatch } from "react-redux";
import dataProduct from "../../data/dataProduct";
import { removeItemCart } from "../../redux/cartSlice";


const CartItem = ({cartItem}) => {
    const product = dataProduct.find(item => item.id === cartItem.elementId)
    const dispatch = useDispatch();
    return(
        <div>
            <p>{product.name}</p>
            <p>{cartItem.quantity}</p>
            <p>Price: ${product.price * cartItem.quantity}</p>
            <span onClick = {() => dispatch(removeItemCart({cartItemId: cartItem.id}))}><img className="icon" src="https://img.icons8.com/ios-glyphs/30/000000/shopping-basket-2.png" alt="BasketDelete"/></span>
        </div>
    )
}
export default CartItem;