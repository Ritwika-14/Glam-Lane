import React , {useState} from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setshowLogin}) => {

    const [currstate,setCurrstate] = useState("Sign Up")

return (
<div className='login-popup'>
        <form action="" className="login-container">
            <div className="login-title">
                <h2>{currstate}</h2>
                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} />
            </div>
            <div className="login-input">
                {currstate==="Login"?<></>:<input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='password' required />
            </div>
            <button>{currstate==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-condition">
                <input type='checkbox' required />
                <p>By checking I agree to the Terms & Conditions</p>
            </div>
            {currstate==="Login"?<p>   Create a new account?<span onClick={()=>setCurrstate("Sign Up")}>  Click Here</span></p>:
            <p>   Already have an account?<span onClick={()=>setCurrstate("Login")}>  Login Here</span></p>}
        </form>
    </div>
  )
}

export default Login