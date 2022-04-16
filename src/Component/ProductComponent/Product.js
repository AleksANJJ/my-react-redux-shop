import { useSelector } from "react-redux"
import { getSelectedCategory } from "../../redux/productSlice"
import dataProduct from "../../data/dataProduct";
import Element from "./Element";

const Product = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div>
            {dataProduct.filter(element => {
                if(selectedCategory === 'ALL') return true;
                return selectedCategory === element.category;
            })
            .map(element => <Element element={element}/>)}
        </div>
    )
}

export default Product;