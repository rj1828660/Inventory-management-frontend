import React, { useState } from 'react'
import Styles from "./auth.module.scss"
import Loader from '../../component/loader/Loader'
import {BiLogIn} from "react-icons/bi"
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../component/card/card'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { loginUser, validateEmail } from '../../services/authServices'
import { SET_LOGIN, SET_NAME } from '../../redux/features/auth/authSlice'


const initialState={
 
  email:"",
  password:"",
 

}

const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [isLoading,setIsLoading]=useState(false);
  const [formData,setformData]=useState(initialState);
  const {email,password}=formData
 
  

const handleInputChange=(e)=>{
  const {name,value}=e.target;
  setformData({...formData,[name]:value}) 

};


const login=async(e)=>{
  e.preventDefault();
  if(!email||!password){
    return toast.error("All feilds Are required")
  }  
  console.log(password)
  if(password.length<6){
    return toast.error("Password must be up to 6 character");
  }
  
  if(!validateEmail(email)){
    return toast.error("Please enter valid email");
  }
  const userData={
    email,password
  }
  setIsLoading(true)
  try{
    const data= await loginUser(userData);
     console.log(data)
    await dispatch(SET_LOGIN(true));
    await dispatch(SET_NAME(data.name))
    navigate("/dashboard");
    setIsLoading(false)
  }catch(error){
    setIsLoading(false)
    console.log(error.message)
  }
}

  return (
    <div className={`container ${Styles.auth}`}>
    {isLoading&&<Loader/>}
     <Card>
        <div className={Styles.form}>
              <div className='--flex-center'>
                <BiLogIn size={35} color='#999'/>
              </div>
              <h2>Login</h2>
            <form onSubmit={login}>
               <input type="email" placeholder='Email' required name='email' value={email} onChange={handleInputChange}/>
               <input type="password" placeholder='password' required name="password" value={password} onChange={handleInputChange}/>
               <button type="submit" className="--btn --btn-primary --btn-block">
                Login   
              </button>    
            </form>  
            <Link to="/forgot">Forgot Password</Link>
            <span className={Styles.register}>
                <Link to="/">Home</Link>
                <p>&nbsp;Don't have an account?&nbsp;</p>
                <Link to="/register">Register</Link>
            </span>
        </div>   
              
    </Card>     
   </div>
  )
}

export default Login 