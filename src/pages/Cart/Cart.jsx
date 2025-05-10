import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { displayCart, clearcart } from '../../store/slices/cartSlice'
import styles from "./cart.module.css"
import CartItem from '../../components/cartItem/CartItem'
import RazorPayButton from '../../components/razorPayButton/RazorPayButton'

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cartReducers)
  useEffect(()=>{console.log(cart);
  },[cart])

  function calculateTotal(cart){
    return cart.reduce((acc,curr)=>acc + curr.price, 0)
  }

  if(cart.length === 0){
    return <h1 className={styles["nothing-message"]}>Nothing in the cart try add some !</h1>

  }
  
  return (
   <>
   <div className={styles["cart-container"]}>
    
    {
      cart.length > 0 &&
    <>
    <h1 className={styles["nothing-message"]}>Your Orders are On The Way</h1>
    <ul>
      {
      cart.map((item)=>{
      return  <li key={item._id}>
          <CartItem item={item}/>
        </li>
      })
      }
    </ul> 
    <div className={styles["cart-details"]}>
      <h2>Total Bill : $ {calculateTotal(cart)}</h2>
      <div className={styles.actions}>
        <button onClick={()=>dispatch(clearcart())}>Clear Cart</button>
        <RazorPayButton />
      </div>

    </div>
    </>
    }

    
   </div>
   </>
  )
}

export default Cart