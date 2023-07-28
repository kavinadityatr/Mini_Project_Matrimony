import React, { useState, useEffect } from 'react';
import { Container, Row, Col ,Card} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/microfeedback.css';
import { BluetoothAudio } from '@mui/icons-material';
import { Button, TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

// import 'bootstrap/dist/css/bootstrap.min.css';

function Appu() {
  const [email,setEmail]=useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Fetch feedback data when the component mounts
    fetchFeedbackData();
  }, []);

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    // Implement your API call to submit feedback using Axios here
    try {
      // Call your feedback API endpoint with the token in the headers
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:8181/api/v1/users/addUserFeedback',
        { feedback },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Update the feedback data state with the new feedback
      setFeedbackData([...feedbackData, response.data.feedback]);
      // Clear the feedback input
      setFeedback('');
    } catch (error) {
      // Handle feedback submission error
      console.log('Feedback submission error:', error);
    }
  };
  const  vfe=localStorage.getItem('email');

  const fetchFeedbackData = async () => {
    try {
      // Call your feedback API endpoint with the token in the headers
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8082/api/v1/feed/getFeedback', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFeedbackData(response.data);
    } catch (error) {
      // Handle error while fetching feedback data
      console.log('Error fetching feedback:', error);
    }
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
    
    <Container className="mt-4" style={{backgroundColor:'white'}}>
      
      <Row>
        <Col md={6}>
          <div className="card2">
            <div className="card-body">
              <h3 className="card-title">Feedback Form</h3>
              <form onSubmit={handleSubmitFeedback}>
                {/* Textarea for feedback */}
                <TextField style={{width:'90%'}}
            type="email"
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br></br>
                <textarea style={{width:'100%'}}
                  className="form-controlmb-4"
                  rows="4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
                <button type="submit" className="fbtn">
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
        <Card>
      {/* <Card.Body>
        <h3>Feedback Display</h3>
        {feedbackData.length === 0 ? (
          <p className='FeedbackDisplay' style={{color:'black'}}>No feedback received yet.</p>
        ) : (
          <ul>
            {feedbackData.map((feedbackItem, index) => (
              <li key={index}>
                <strong>Feedback:</strong> {feedbackItem.feedback}
              </li>
            ))}
          </ul>
        )}
      </Card.Body> */}
    </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Appu;
