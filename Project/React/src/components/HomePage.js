import React, { useState, useEffect } from 'react';
import '../assets/home.css';
import { Link } from 'react-router-dom';
import DropdownForm from "./form";
import { useSelector } from 'react-redux';

function Home() {
  const username=useSelector((state)=>state.username);
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
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
            <li><a href="/App">FeedBack</a></li>
            <Link to='/'><li className='pic'><a href="/"><img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689145635/396b52e4-545f-41a6-b96d-9c62c6d5ce22_hbjscp.jpg"/></a></li></Link>
          </ul>
         </div> 
         </nav>
    </header>

    <div className='match'>
      <h1>Welcome {username} </h1>
    <marquee 
        behavior="scroll"
        direction="left"
        scrollamount={600}
        scrolldelay={2000}
        onmouseover="this.stop();"
        onmouseout="this.start();"
      >
        <a href="##########" target="blank" rel="nofollow">
          <img
            src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1688962099/wallpaperflare.com_wallpaper_2_yqmjtn_dl9mt4.jpg"
            title=""
            alt="ALT"
            border="0px"
            width="600px"
            height="300px"
            style={{marginLeft:"30px",padding:"30px"}}
          />
        </a>
        <a href="##########" target="blank" rel="nofollow">
          <img
            src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1688919223/images_qv1etg.jpg"
            title=""
            alt="ALT"
            border="0px"
            width="600px"
            height="300px"
            style={{ marginLeft: "30px",padding:"30px" }}
          />
        </a>
        <a href="/" target="blank" rel="nofollow">
          <img
            src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1688918464/istockphoto-1303189272-612x612_li2s56.jpg"
            title=""
            alt="ALT"
            border="0px"
            width="600px"
            height="300px"
            style={{ marginLeft: "30px",padding:"30px" }}
          />
        </a>
      </marquee>
    
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