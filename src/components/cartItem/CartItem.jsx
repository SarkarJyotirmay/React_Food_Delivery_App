import React from 'react';
import styles from './cart_item.module.css';
import { FaTrashAlt, FaShippingFast, FaClock } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../store/slices/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const cart = useSelector((state)=>state.cartReducers)
    
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.cartItemImg} />
      <div className={styles.cartItemDetails}>
        <div className={styles.cartItemHeader}>
          <h3>{item.name}</h3>
          <span className={styles.itemQty}>{item.quantity}x</span>
        </div>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.cartInfo}>
          <span><FaShippingFast /> Free Delivery</span>
          <span><FaClock /> 15–30 mins</span>
          <FaTrashAlt onClick={()=>dispatch(removeItem(item._id))} className={styles.trashIcon} />
        </div>
        <p className={styles.price}>$ {item.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
