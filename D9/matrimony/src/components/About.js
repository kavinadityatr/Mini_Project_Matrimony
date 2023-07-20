import React from 'react'
import "../assets/about.css";


function About() {
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
    <div className="about-section">
  <h1>About Us</h1>
  <h3> We are delighted to introduce you to our premier matrimony platform, dedicated to helping you find your life partner.
     Our goal is to create a trusted and efficient online space where individuals can connect, interact, and build
      meaningful relationships that lead to a lifelong commitment.
  </h3>
  <h3>At [Matrimony Site Name], we understand the significance of marriage and the impact it has on one's life. We strive
     to simplify the process of finding a suitable partner by combining advanced technology with personalized matchmaking
      services. Whether you're seeking a partner based on religion, community, or specific preferences, we provide you with a
       wide range of profiles to explore and connect with.
  </h3>
  <h1>What set us apart??
  </h1>
  <br/>
  <h3><v>COMPREHENSIVE PROFILES :</v> We believe in transparency, which is why our registered members provide detailed profiles that highlight their background, education, career, interests, and more. This wealth of information enables you to make informed decisions when connecting with potential partners. <br/><br/>

<v>ADVANCED SEARCH FILTERS :</v>  We offer an intuitive search interface that allows you to customize your search criteria, ensuring you can find individuals who align with your preferences. Filter profiles based on age, location, religion, education, profession, and more, to narrow down your search and focus on compatible matches.<br/><br/>

<v>Compatibility Matching :</v> Our advanced algorithms analyze your profile and preferences to provide you with compatible matches. We take into account various factors, including personality traits, values, and goals, to ensure you are introduced to individuals with whom you share a strong potential for a successful and fulfilling relationship.<br/><br/>

<v>Privacy and Security :</v> Your privacy and security are of utmost importance to us. We employ robust security measures to protect your personal information and provide you with a safe online environment. We also offer options to control the visibility of your profile and communicate only with individuals who match your criteria.<br/><br/></h3>
      

</div>

 <h2 style={{textAlign:'center',color : 'aliceblue'}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
    <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689266681/Athestic_boys_dp_p1gxvx.jpg" alt="User 1" style={{width:"400px",height:"300px"}} ></img>
      <div className="container">
        <h2>Kavin</h2>
        <p className="title">Founder</p>
        
        <p>Kavin@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689266666/4cbdd92a-756c-4183-af40-78aa9878c5d0_veuuox.jpg" alt="Mike" style={{width:"400px",height:"300px"}} ></img>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">MD</p>
        
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
    <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689266679/Me_YoYo_Sketch_t1t1xg.jpg" alt="Mike" style={{width:"400px",height:"300px"}} ></img>
      <div className="container">
        <h2>Charu</h2>
        <p className="title">Customer Relation Head</p>
        
        <p>charu@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div> 
    </div> 
  );
}

export default About