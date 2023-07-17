import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Body() {
  const [login, setLogin] = useState(true);

  return (
    <>
      <div className="bodyChild">
        <div
          className={login && "bodyChildForm"}
          onClick={() => setLogin(true)}
        >
          SignIn
        </div>
        <div
          className={!login && "bodyChildForm"}
          onClick={() => setLogin(false)}
        >
          SignUp
        </div>
      </div>
      <div className="text">
        <form>
          {!login && <input type="text" placeholder="Enter name" />}
          {!login && <input type="integer" placeholder="Phone Number" />}
          <input type="email" placeholder="User Name" />
          <input type="password" placeholder="Password" />
          <Link to='/' type="submit">{login ? "LOGIN" : "SIGNUP"}</Link>
        </form>
      </div>
      {!login && <h6>I agree to the Terms and Conditions.</h6>}
      {login && <h4>Forgot Password?</h4>}
    </>
  );
}

export default Body;
