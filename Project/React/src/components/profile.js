import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import w1 from '../assets/w1.png'
import w2 from '../assets/w2.png'
import w3 from '../assets/w3.png'
import '../assets/profile.css'
import { Link } from 'react-router-dom';

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
            <li><a href="/home">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/member">MemberShip</a></li>
            <li><a href="/App">FeedBack</a></li>
            <Link to='/'><li className='pic'><a href="/"><img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689145635/396b52e4-545f-41a6-b96d-9c62c6d5ce22_hbjscp.jpg"/></a></li></Link>
          </ul>
         </div> 
         </nav>
    </header>
    <div className='create'>
      <Link to='/createprofile'><button>Create Profile</button></Link>
    </div>
    

        <div>
                    <div style={{display:'flex',marginTop:'10%'}}>
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={m1} alt="Avatar" style={{width:'300px',height:'300px'}}/>
    </div>
    <div class="flip-card-back">
      <h1>Marcus "Max" Ramirez</h1> 
      <p>Max is a seasoned detective in his late 40s, with a reputation for solving complex cases with his sharp intellect and keen eye for detail. He is dedicated to upholding justice and has a high moral compass, earning him the trust of both colleagues and the community he serves.</p> 
      
      <p></p>
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
      <h1>Benjamin "Ben" Chen</h1> 
      <p> Ben Chen is a brilliant neuroscientist in his early 40s, renowned for his groundbreaking research in the field of memory and cognition. With a calm and analytical demeanor, he thrives in the laboratory, unraveling the complexities of the human brain.</p> 
      
    </div>
  </div>
</div>






<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={m3} alt="Avatar" style={{width:'300px',height:'300px'}}/>
    </div>
    <div class="flip-card-back">
      <h1>Liam Carter</h1> 
      <p>Liam Carter is a spirited and curious 10-year-old boy with an infectious sense of wonder. With his sandy blond hair and sparkling blue eyes, he possesses an undeniable charm that endears him to everyone he meets. </p> 
      
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
      <h1>Evelyn "Eve" Anderson</h1> 
      <p>Eve is a charismatic and ambitious entrepreneur in her early 30s. With a passion for technology and innovation, she co-founded a successful start-up that focuses on developing sustainable solutions for urban living.</p> 
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
      <h1>Sophia "Sophie" Bennett</h1> 
      <p>Sophie is a vibrant and adventurous travel blogger in her mid-20s. Armed with her camera and insatiable curiosity, she explores remote corners of the world, documenting her experiences through captivating storytelling and stunning photographs.</p> 
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
      <h1>Olivia "Liv" Thompson</h1> 
      <p>Liv is a warm-hearted and nurturing social worker in her late 20s. She is deeply passionate about helping underprivileged youth overcome adversity and find stability in their lives. With a natural ability to empathize and connect with others, Liv provides a safe space for her clients, guiding them through their challenges with unwavering support.</p> 
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