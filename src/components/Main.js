import {addToCart} from "../Redux/action";
import {removeFromCart} from "../Redux/action";
import {resetCart} from "../Redux/action";
import {useDispatch} from "react-redux";
import {productList} from "../Redux/ProductAction";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function Main(){
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData);
    // console.warn('Main data from set product list: ', data);
    useEffect(() => {
        dispatch(productList())
    }, []);
    return (
      <div>
          <div>
              <button onClick={() => dispatch(resetCart())} className='button-design'>Reset Cart</button>
          </div>
          <br/>
          {/*<div>*/}
          {/*    <button onClick={() => dispatch(productList(product))} className='button-design'>Get Product List</button>*/}
          {/*</div>*/}
          <div className='product-container'>
              {
                  data.map((item) => <div key={item.id} className='product-item'>
                      <h4>Product Name: {item.name}</h4>
                      <h5>Price: {item.price}</h5>
                      <h5>Color: {item.color}</h5>
                      <br/>
                      <button onClick={() => dispatch(addToCart(item))} className='button-design' style={{marginRight: "10px"}}>Add to Cart</button>
                      <button onClick={() => dispatch(removeFromCart(item.id))} className='button-design'>Remove from Cart</button>
                      <br/><br/>
                  </div>)
              };
          </div>
      </div>
    );
}

export default Main;