
import './App.css';
import Cart from './Component/Cart/Cart';
import AllCategories from './Component/Filter/AllCategories';
import Product from './Component/ProductComponent/Product';


function App() {
  return (
    <div className="App">
      <div className='block'>
        <AllCategories />
        <Cart />
      </div>
      <div className='blockTwo'>
        <Product />
      </div>
    </div>
  );
}

export default App;
