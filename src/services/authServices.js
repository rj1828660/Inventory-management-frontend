import axios from "axios"
import {toast} from "react-toastify" 

export const BACKEND_URL=process.env.REACT_APP_BACKEND_URL

export const validateEmail=(email)=>{
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}
//Register User
export const registerUser=async(userData)=>{
    try{
        const response=await axios.post(`${BACKEND_URL}/api/users/register`,userData,{withCredentials:true});
        if(response.statusText==="OK"){
            toast.success("User Registered Successfully")
        }
        return response.data;
    }catch(error){
        const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString();
            toast.error(message);
         
    }
}
//Login User
export const loginUser=async(userData)=>{
    try{
        const response=await axios.post(`${BACKEND_URL}/api/users/login`,userData,{withCredentials:true});
        if(response.statusText==="OK"){
            toast.success("User loggedIn Successfully")
        }
        return response.data;
    }catch(error){
        const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString();
            toast.error(message);
         
    }
}
//Logout User
export const logoutUser=async(userData)=>{
    try{
       await axios.get(`${BACKEND_URL}/api/users/logout`,userData,{withCredentials:true});
       
    }catch(error){
        const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString();
            toast.error(message);
         
    }
}
//forgot password
export const forgotPassword=async(userData)=>{
    try{
       const response=await axios.get(`${BACKEND_URL}/api/users/forgotPassword`,userData,{withCredentials:true});
       toast.success(response.data.message)
    }catch(error){
        const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString();
            toast.error(message);
         
    }
}

//Reset Password
export const resetPassword=async(userData,resetToken)=>{
    try{
       const response=await axios.put(`${BACKEND_URL}/api/users/resetPassword/${resetToken}`,userData,{withCredentials:true});
       return response.data; 
    }catch(error){
        const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString();
            toast.error(message);
         
    }
}
//get LoginStatus
export const getLoginStatus=async(userData,resetToken)=>{
    try{
       const response=await axios.get(`${BACKEND_URL}/api/users/loggedIn`,{withCredentials:true});
       return response.data; 
    }catch(error){
        const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString();
            toast.error(message);
         
    }
}
    //get user Profile
export const getUser=async()=>{
    try{
       const response=await axios.get(`${BACKEND_URL}/api/users/getUser`,{withCredentials:true});
       return response.data; 
    }catch(error){
        const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString();
            toast.error(message);
         
    }
}