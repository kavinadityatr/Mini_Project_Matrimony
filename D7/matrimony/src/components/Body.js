import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../assets/style.css';
import AliceCarousel from 'react-alice-carousel';


function Body() {
  const [login, setLogin] = useState(true);

  return (
    
    <>
    <div className="opac">
      <div className="bodyChild">
        <div
          className={ login &&"bodyChildForm"}
          onClick={() => setLogin(true)}>
          <z>SignIn</z>
        </div>
        <div
          className={!login && "bodyChildForm"}
          onClick={() => setLogin(false)}>
           <w>SignUp</w>
        </div>
      </div>
      
        <form>
          {!login && <input type="text" placeholder="Enter name" />}
          {!login && <input type="integer" placeholder="Phone Number" />}
          <input type="email" placeholder="User Name" />
          <input type="password" placeholder="Password" /><br/>
          <Link to ='/home'><button type="submit">{login ? "LOGIN" : "SIGNUP"}</button></Link>
        </form>
      
      {!login && <h6>I agree to the Terms and Conditions.</h6>}
      {login && <h4>I agree to the Terms and Conditions</h4>}
      </div>
    </>
   
  );
}

export default Body;
