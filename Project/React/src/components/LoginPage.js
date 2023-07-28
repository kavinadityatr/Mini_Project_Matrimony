import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { BsFacebook, BsGithub, BsLinkedin, BsGoogle } from 'react-icons/bs';
import { TextField, Button } from '@mui/material';
import '../assets/LoginPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername } from './Redux/Action';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch =useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: user,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', data).then((response) => {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        console.log(localStorage.getItem('token'));
        dispatch(setUsername(user));
        navigate('/home'); // Replace '/student-page' with the actual path for the student page

      });
    } catch (error) {
      alert('Invalid Password');
    }
  };

  return (
    <div className='form'>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h1 className='log'>Login</h1>
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="text"
            label='Username'
            id="user"
            value={user}
            autoComplete='off'
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="text"
            label='Email'
            id="username"
            value={email}
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="password"
            label='Password'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
       

        {error && <p className='error'>{error}</p>}
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <br></br>
        <br></br>
        <div className="links-container">
          <a href="/forgot-password" className='slink'>Forgot Password?</a>
          <p>Don't have an account? <Link to='/SignUp' className='slink'>Sign Up</Link></p>
          
          
          
        </div>
      </form>
    </div>
  );
};

export default Login;