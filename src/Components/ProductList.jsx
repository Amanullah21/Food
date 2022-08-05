import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "../Components/style.module.css"
import { Context } from './Contaxt'

const ProductList = () => {
    let [data, setData] = useState([])
    const {  addToCart} = React.useContext(Context)
    let url = 'https://bitbucket.org/punitdiwan/coding-challange/raw/08a0e129e1e3992a6d3d87d737332dc7ca7a79e4/data/feeds.json'
    const burger ='https://th.bing.com/th/id/R.2483388523f0d7d1f31a30f89ea37ab7?rik=CeccFVg7k4KbRA&riu=http%3a%2f%2fwww.designindaba.com%2fsites%2fdefault%2ffiles%2fnode%2fnews%2f23566%2fsonic-burger.jpg&ehk=O3ImrEBP9ECjaMLQXcnAysedjaJj9ZxYIWdY5qhezcY%3d&risl=&pid=ImgRaw&r=0'

    const getTodo = () => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => console.log(error));
    };


    useEffect(() => getTodo(), []);
    // console.log(data[0].image)
    return (

        <div className={style.productList_container}>

            {data.map((ele, index) => (
                
                <div className={style.list}>
                    <img src={burger} alt={ele.name} />
                    <h3>{ele.name}</h3>
                    <p>Price : {ele.price} ₹</p>
                    <button className={style.cart} onClick={() => addToCart(ele)}>Add to Cart</button>
                    
                </div>
            ))}
        </div>
    )
}

export default ProductList