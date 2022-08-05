import React, { useState } from 'react'
import style from "./style.module.css"
import {
    useNavigate
} from 'react-router-dom';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [loginName, setLoginName] = useState('Aman')
    const [showloginName, setShowLoginName] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (userName == loginName) {
            navigate('/welcompage');
        } else {
            alert("Please Enter correct user name")
        }
    }

    return (
        <div className={style.login}>

            <h1>Welcome to Login Page</h1>
            <input
                name="Username"
                type="text"
                placeholder="Enter Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            {/* <button disabled={userName === ""} onClick={handleSubmit}  >Login </button > */}
            <button disabled={userName ===""} className={style.login_button} onClick={handleSubmit}>Login</button>
            <button  className={style.user_button} onClick={() => setShowLoginName(true)}>{
                showloginName == true ?loginName : 'Show User name'
            }</button>
        </div>
    )
}

export default Login