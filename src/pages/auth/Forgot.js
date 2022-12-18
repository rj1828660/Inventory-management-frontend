import React, { useState } from 'react'
import Styles from "./auth.module.scss"

import {AiOutlineMail} from "react-icons/ai"
import { Link } from 'react-router-dom'
import Card from '../../component/card/card'
import { toast } from 'react-toastify'
import { forgotPassword, validateEmail } from '../../services/authServices'
const Forgot = () => {
 const [email,setEmail]= useState("")

 const forgot = async (e) =>{
  e.preventDefault();
  if(!email){
    return toast.error("Please enter email");

  }
  
  if(!validateEmail(email)){
    return toast.error("Please enter valid email");
  }

  const userData={
    email
  }

  await forgotPassword(userData)
  setEmail("");
 }

  return (
    <div className={`container ${Styles.auth}`}>
     <Card>
        <div className={Styles.form}>
              <div className='--flex-center'>
                <AiOutlineMail size={35} color='#999'/>
              </div>
              <h2>Forgot Password</h2>
            <form onSubmit={forgot}>
               <input type="email" placeholder='Email' required name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              
               <button type="submit" className="--btn --btn-primary --btn-block">
                Get Reset Email
              </button>    
              <div className={Styles.links}>
                <p><Link to="/">- Home</Link></p> 
                <p><Link to="/login">- Login</Link></p>
                
                             
            </div>
            </form>  
           
           
        </div>   
              
    </Card>     
   </div>
  )
}

export default Forgot