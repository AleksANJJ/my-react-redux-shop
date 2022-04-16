import { useState } from "react"
import { useDispatch } from "react-redux";
import Change from "../Cart/Change";
import { addItemToCart } from "../../redux/cartSlice";

const Element = ({element}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    console.log(dispatch)
    return (
        <div>
            <img src={`./${element.img}.jpg`} alt="fotoElement"/>
            <h2>{element.name}</h2>
            <p>{element.description}</p>
            <h4>$ {element.price}</h4>
            <Change quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={() => {dispatch(addItemToCart({element, quantity}))}}>Add to Cart</button>
        </div>
    )
}
export default Element;