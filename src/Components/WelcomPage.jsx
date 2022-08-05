import React from 'react'
import style from "./style.module.css"
import {
    useNavigate
} from 'react-router-dom';

const WelcomPage = () => {
    const navigate = useNavigate();
  return (
      <div className={style.welcome}>
          <h1>Welcome to Food's Kitchen</h1>
          <button className={style.button} onClick={(() =>navigate('/productlist'))}>GO TO MENU</button>
    </div>
  )
}

export default WelcomPage