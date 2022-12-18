 import React from 'react'
 import{GrProductHunt} from 'react-icons/gr'
 import {Link}from 'react-router-dom'
 import "./Home.scss";
 import heroImg from "../../assets/inv-img.png"
import { ShowOnLogin, ShowOnLogout } from '../../component/protect/HiddenLinks';
const home = () => {
  return (
    <div>
        <div className="home">
            <nav className="container --flex-between">
                <div className="logo">
                    <GrProductHunt size={35}/> 
                </div>
                <ul className='home-links'>
                   <ShowOnLogout>
                   <li>
                  <Link to="/register">Register</Link>
                  </li>
                   </ShowOnLogout>
                   <ShowOnLogout>
                   <li>
                      <button className="--btn --btn-primary">
                      <Link to="/login">Login</Link>
                      </button>
                     
                  </li>
                   </ShowOnLogout>
                  
                   <ShowOnLogin>
                   <li>
                      <button className="--btn --btn-primary">
                      <Link to="/dashboard">Dashboard</Link>
                      </button>
                     
                  </li>
                   </ShowOnLogin>
                  
                </ul>
            </nav>
           {/* HERO SECTION */}
           <section className='container hero'>
             <div className='hero-text'>
               <h2>Inventory And Stock Management System</h2>
               <p>
                 Inventory system to control and manage products 
                 in the warehouse in real timed and integrated to make
                 it easier to develop your business.  
               </p>
               <div className='hero-buttons'>
               <button className="--btn --btn-secondary">
                      <Link to="/dashboard">Free Trail 1 month</Link>
               </button>
               </div>
               <div className='--flex-start'>
                <NumberText num="20k" text="Brand Owner"/>
                <NumberText num="250k" text="Active User"/>
                <NumberText num="100+" text="Partners"/>
               </div>
             </div>
             <div className='hero-image'>
              <img src={heroImg} alt="Inventory"/>
             </div>
           </section>
        </div>
       
    </div>
  )
}
const NumberText=({num,text})=>{
  return(
    <div className='--mr'>
      <h3 className='--color'>{num}</h3>
      <p className='--color'>{text}</p>
    </div>
  )
}
export default home  