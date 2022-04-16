import FilterComponent from "./Filter"

const AllCategories =()=> {
    return(
        <div>
            <h1>What are you shopping for today?</h1>
            {['DRESSES', 'SKIRTS', 'SWEATERS', 'SHOES', 'HANDBAGS', 'JEWELRY', 'ACCESSORIES', 'ALL'].map(category => <FilterComponent category={category}/>)}
        </div>
    )
}
export default AllCategories;