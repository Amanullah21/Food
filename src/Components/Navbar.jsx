import React from 'react'
import style from "./style.module.css"
import { Context } from './Contaxt'
import {
    useNavigate
} from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const { cart,count, addToCart} = React.useContext(Context)
    console.log(cart)
    return (
        <div className={style.navbar}>
            <p>Food's Restaurant</p>
            <h3 className={style.cart_text} onClick={() =>navigate('/summery')}>Cart  { count} </h3>
        </div>
    )
}

export default Navbar