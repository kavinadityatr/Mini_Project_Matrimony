// import React, { useState } from 'react';
// import axios from 'axios';

// import { Link, useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const styles = {
//     container: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       fontFamily: 'Arial, sans-serif',
//     },
//     title: {
//       textAlign: 'center',
//       marginBottom: '20px',
//       fontSize: '24px',
//       fontWeight: 'bold',
//       color: '#333',
//       textTransform: 'uppercase',
//       fontFamily: 'Verdana, sans-serif',
//     },
//     form: {
//       display: 'flex',
//       flexDirection: 'column',
//       width: '600px',
//       padding: '20px',
//       border: '2px solid black',
//       borderRadius: '4px',
//     },
//     inputContainer: {
//       display: 'flex',
//       flexDirection: 'column',
//       marginBottom: '20px',
//     },
//     label: {
//       marginBottom: '5px',
//       fontSize: '16px',
//     },
//     input: {
//       padding: '10px',
//       fontSize: '16px',
//     },
//     button: {
//       padding: '10px',
//       fontSize: '16px',
//       backgroundColor: '#33bbff',
//       color: 'white',
//       border: 'none',
//       cursor: 'pointer',
//       width: '90px',
//       marginLeft: '30px',
//     },
//     error: {
//       color: 'red',
//       marginBottom: '10px',
//       fontSize: '14px',
//       textAlign: 'center',
//       fontStyle: 'italic',
//       fontWeight: 'bold',
//       backgroundColor: '#FBE3E4',
//       padding: '8px',
//       borderRadius: '4px',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//     },
//   };

//   const [name, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const [error, setError] = useState('');
//   const [isSubmit, setIsSubmit] = useState(false);
//   const navigate = useNavigate('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     setIsSubmit(true);

//     // Check if the passwords match
//     if (password !== confirmPassword) {
//       window.alert('Passwords do not match');
//       setIsSubmit(false);
//       return;
//     }

//     // Validate the email format using a regular expression
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.match(emailRegex)) {
//       setError('Invalid email address');
//       setIsSubmit(false);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
//         name: name,
//         email: email,
//         password: password,
//       });

//       console.log(response.status);
//       if (response.status === 200) {
//         setUsername('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         setError(''); // Clear any previous error messages
//         navigate('/');
//       }
//     } catch (error) {
//       alert(error);
//       setIsSubmit(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form style={styles.form} onSubmit={handleSubmit}>
//         <h2 style={styles.title}>Signup</h2>
//         {error && <div style={styles.error}>{error}</div>}
//         <div style={styles.inputContainer}>
//           <label style={styles.label}>First Name:</label>
//           <input
//             style={styles.input}
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>

//         <div style={styles.inputContainer}>
//           <label style={styles.label}>Email:</label>
//           <input
//             style={styles.input}
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div style={styles.inputContainer}>
//           <label style={styles.label}>Password:</label>
//           <input
//             style={styles.input}
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div style={styles.inputContainer}>
//           <label style={styles.label}>Confirm Password:</label>
//           <input
//             style={styles.input}
//             type="password"
//             placeholder="Confirm your password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//           <button style={styles.button} type="submit">
//             Sign Up
//           </button>
//         </div>
//         <p>
//           Already have an account? <Link to="/">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import axios from 'axios';
import '../assets/SignUp.css'

import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [error, setErrors] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmit(true);
    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
        name: name,
        email: email,
        gender: gender,
        phone_no: phone,
        institution: institution,
        password: password,
      });
      console.log(response.status);
      if (response.status === 200) {
        setUsername('');
        setEmail('');
        setGender('');
        setPhone('');
        setInstitution('');
        setRole('');
        setPassword('');
        setCheckPassword('');
        setIsSubmit(false);
        navigate("/components/home/Home"); // Corrected the path for navigation
      }
    } catch (error) {
      setIsSubmit(false);
      setErrors('An error occurred during registration.'); // You can handle more specific error messages here
    }
  };

  return (
    <div className='sigmain'>
      <form className="sign-form" onSubmit={handleSubmit}>
        <div>
          <h1 className='sig'>SignUp</h1>
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="text"
            label='Name'
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField style={{width:'90%'}}
            type="email"
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      
        <div>
          <TextField style={{width:'90%'}}
            type="password"
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <TextField style={{width:'90%'}}
            type="password"
            label='Check Password'
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            required
          />
        </div>

        
        {error && <p className='error'>{error}</p>}
        <Button style={{marginLeft:'10%'}}
          type='submit'
          variant='contained'
          color='primary'
          disabled={isSubmit}
        >
          {isSubmit ? 'Signing Up...' : 'Sign Up'}
        </Button>
        <div className="links-container">
          <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;