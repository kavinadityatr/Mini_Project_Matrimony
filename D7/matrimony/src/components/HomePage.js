import React, { useState, useEffect } from 'react';
import '../assets/home.css';
import AliceCarousel from 'react-alice-carousel';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import DropdownForm from "./form";


function Home() {
  return (
    <div>
    <header>
        <nav>
          <div className="logo">
            <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689141902/MATRIMONY_3_fmumzt_pmkyub.png" alt="Logo" />
            </div>
          
          <div className='move'>
          <ul>
            
            <li><a href="/profile">Profile</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/member">MemberShip</a></li>
            <li className='pic'><a href="/"><img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689145635/396b52e4-545f-41a6-b96d-9c62c6d5ce22_hbjscp.jpg"/></a></li>
           
          </ul>
         </div> 
              
          
        </nav>
    </header>
    
    <div className='match'>
        <h1><c>#1 Matrimony</c></h1>
        <br/>
        <br/>
        <h2>" From Chance to Destiny, Love Finds a Way 💕💕 "</h2>
        <h3> - Jessica Holsman</h3>
        
        <br/>
        <h1>Find your 
        <br/>
        <b>Right Match</b> here
        <br/>
        </h1>
    </div>

    <DropdownForm/>

      <footer>
        <p>&copy; 2023 Matrimony. All rights reserved.</p>
      </footer>
      </div>
    
  );
}

export default Home;