import { useDispatch, useSelector } from "react-redux"
import { getSelectedCategory, filterCategory } from "../../redux/productSlice";

const FilterComponent =({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div>
            <p className={selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'} onClick={()=> {dispatch(filterCategory(category))}}>{category}</p>
        </div>
    )
}
export default FilterComponent;