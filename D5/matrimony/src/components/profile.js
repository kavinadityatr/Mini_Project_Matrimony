import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import w1 from '../assets/w1.png'
import w2 from '../assets/w2.png'
import w3 from '../assets/w3.png'
import '../assets/profile.css'
const Profile = () =>
{
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
            <li><a href="/About">About</a></li>
            <li><a href="/member">MemberShip</a></li>
            <li className='pic'><a href="/"><img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689145635/396b52e4-545f-41a6-b96d-9c62c6d5ce22_hbjscp.jpg"/></a></li>
           
          </ul>
         </div> 
              
          
        </nav>
    </header>
    

        <div>
                    <div style={{display:'flex',marginTop:'10%'}}>
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={m1} alt="Avatar" style={{width:'300px',height:'300px'}}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      {/* <p>We love that guy</p> */}
    </div>
  </div>
</div>



<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={m2} alt="Avatar" style={{width:'300px',height:'300px'}}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      {/* <p>We love that guy</p> */}
    </div>
  </div>
</div>






<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={m3} alt="Avatar" style={{width:'300px',height:'300px'}}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      {/* <p>We love that guy</p> */}
    </div>
  </div>
</div>
        </div>




<div style={{display:'flex',marginTop:'50px'}}>
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={w1} alt="Avatar" style={{width:'300px',height:'300px'}}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      {/* <p>We love that guy</p> */}
    </div>
  </div>
</div>



<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={w2} alt="Avatar" style={{width:'300px',height:'300px'}}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      {/* <p>We love that guy</p> */}
    </div>
  </div>
</div>






<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={w3} alt="Avatar" style={{width:'300px',height:'300px'}}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      {/* <p>We love that guy</p> */}
    </div>
  </div>
</div>
        </div>
        </div>
        <footer>
        <p>&copy; 2023 Matrimony. All rights reserved.</p>
      </footer>
        </div>

    );
}
export default Profile;