import React, { useState } from 'react'
import Styles from "./auth.module.scss"

import {MdPassword} from "react-icons/md"
import { Link, useParams } from 'react-router-dom'
import Card from '../../component/card/card'
import { toast } from 'react-toastify'
import { resetPassword } from '../../services/authServices'

const initialState={

  password:"",
  password2:"",

}

const Reset = () => {
  const [formData,setformData]=useState(initialState);
  const {password,password2}=formData
  
  const {resetToken}=useParams();

  const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setformData({...formData,[name]:value}) 

};
 
const reset=async(e) => {
  e.preventDefault();
  if(password.length<6){
    return toast.error("Password must be up to 6 character");
  }
  if(password!==password2){
    return toast.error("Password does not match")
  }
  const userData={
    password,password2
  }
  try{
    const data= await resetPassword(userData,resetToken);
    // console.log(data)
    toast.success(data.message);
    
  }catch(error){
    console.log(error.message)
  }
  console.log(formData) ; 
  console.log(resetToken);
}

  return (
    <div className={`container ${Styles.auth}`}>
     <Card>
        <div className={Styles.form}>
              <div className='--flex-center'>
                <MdPassword size={35} color='#999'/>
              </div>
              <h2>Reset Password</h2>
            <form onSubmit={reset}>
               <input type="password" placeholder='New Password' required name='password' value={password} onChange={handleInputChange}/>
               <input type="password" placeholder='Confirm New Password' required name='password2' value={password2} onChange={handleInputChange}/>
               <button type="submit" className="--btn --btn-primary --btn-block">
                Reset Password
              </button>    
              <div className={Styles.links}>
                <p><Link to="/">- Home</Link></p> 
                <p><Link to="/login">-Login</Link></p>
                
                             
            </div>
            </form>  
           
           
        </div>   
              
    </Card>     
   </div>
  )
}

export default Reset;