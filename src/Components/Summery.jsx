import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "../Components/style.module.css"
import { Context } from './Contaxt'
import {
    useNavigate
} from 'react-router-dom';

const Summery = () => {
    const { cart, count, addToCart, delToCart } = React.useContext(Context)
    const [totalPrice, SetTotalPrice] = useState(0)
    const [item_count, setItem_count] = useState(1)
    const navigate = useNavigate();
    const burger = 'https://th.bing.com/th/id/R.2483388523f0d7d1f31a30f89ea37ab7?rik=CeccFVg7k4KbRA&riu=http%3a%2f%2fwww.designindaba.com%2fsites%2fdefault%2ffiles%2fnode%2fnews%2f23566%2fsonic-burger.jpg&ehk=O3ImrEBP9ECjaMLQXcnAysedjaJj9ZxYIWdY5qhezcY%3d&risl=&pid=ImgRaw&r=0'
    let total = 0
    let quantity = 1

    const checkoutHandle = () => {
        navigate('/checkout')
        delToCart()
    }

    return (

        <div className={style.product_summery}>

            {
                cart.map((ele, index) =>
                (
                    <div className={style.summery}>
                        <img src={ele.image} alt={ele.name} />
                        <h3>{ele.name}</h3>
                        <p>Price : {ele.price} ₹</p>
                        <p>Quantity : {quantity}</p>
                        <button onClick={() => setItem_count(quantity + 1)}>+</button>
                        <button onClick={() => setItem_count(quantity - 1)}>-</button>
                        <p>Total Price :
                            {
                                total += +ele.price
                            }  ₹
                        </p>

                    </div>
                ))
            }


            <h1>Total {total} ₹</h1>
            <button onClick={checkoutHandle} className={style.checkout_btn}>Check Out</button>
        </div>
    )
}

export default Summery