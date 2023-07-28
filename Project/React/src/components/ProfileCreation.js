// import React, { useState } from 'react';
// import '../assets/ProfileCreation.css';


// const ProfileCreation = () => {
//   const [profileData, setProfileData] = useState({
//     fullName: '',
//     gender: '',
//     dateOfBirth: '',
//     email: '',
//     phoneNumber: '',
//     education: '',
//     occupation: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setProfileData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle the final form submission and save profileData to the backend/database
//     alert('Profile created successfully!');
//   };


//   return (
//     <div className='profilecr'>
//       <h1>Matrimony Profile Creation</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Personal Information */}

        

//         <label>
          
//           <input
//             type="text"
//             name="fullName"
//             placeholder='Name'
//             value={profileData.fullName}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label className='profilelabel'>
//           <select name="gender" onChange={handleChange} placeholder='Gender' required>
//             <option value="">Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </label>

//         <label>
//           <input
//             type="date"
//             name="dateOfBirth"
//             placeholder='DOB'
//             value={profileData.dateOfBirth}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
          
//           <input
//             type="age"
//             name="Age"
//             placeholder='Age'
//             value={profileData.dateOfBirth}
//             onChange={handleChange}
//             required
//           />
//         </label>


//         {/* Contact Details */}
//         <label>
          
//           <input
//             type="email"
//             name="email"
//             placeholder='Email'
//             value={profileData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
          
//           <input
//             type="tel"
//             name="phoneNumber"
//             placeholder='Phone Number'
//             value={profileData.phoneNumber}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         {/* Education & Profession */}
//         <label>
          
//           <input
//             type="text"
//             name="education"
//             placeholder='Education Qualification'
//             value={profileData.education}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
          
//           <input
//             type="text"
//             name="occupation"
//             placeholder='Occupation'
//             value={profileData.occupation}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         {/* Submit Button */}
//         <button type="submit">Create Profile !!</button>
//       </form>
//     </div>
//   );
// };

// export default ProfileCreation;


import React, { useState } from 'react';
import '../assets/ProfileCreation.css';
import PhotoUpload from './PhotoUpload';
import { Link } from 'react-router-dom';

const ProfileCreation = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    education: '',
    occupation: '',
  });

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoSelect = (file) => {
    setSelectedPhoto(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the final form submission and save profileData and selectedPhoto to the backend/database
    alert('Profile created successfully!');
  };

  return (
    <div className="profilecr">
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
      <h1>Matrimony Profile Creation</h1>
      <form onSubmit={handleSubmit}>
          <PhotoUpload onFileSelect={handlePhotoSelect} />
        {/* Personal Information */}
        <label>
          <input
            type="text"
            name="fullName"
            placeholder="Name"
            value={profileData.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label className="profilelabel">
          <select
            name="gender"
            onChange={handleChange}
            placeholder="Gender"
            required
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          <input
            type="date"
            name="dateOfBirth"
            placeholder="DOB"
            value={profileData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <input
            type="age"
            name="Age"
            placeholder="Age"
            value={profileData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>

        {/* Photo Upload */}

        {/* Contact Details */}
        <label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={profileData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={profileData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>

        {/* Education & Profession */}
        <label>
          <input
            type="text"
            name="education"
            placeholder="Education Qualification"
            value={profileData.education}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            value={profileData.occupation}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={profileData.city}
            onChange={handleChange}
            required
          />
        </label>

        <label className="profilelabel">
          <select
            name="Family Type"
            onChange={handleChange}
            placeholder="Gender"
            required
          >
            <option value="">Family</option>
            <option value="joint">Joint</option>
            <option value="nuclear">Nuclear</option>
            
          </select>
        </label>

        {/* Submit Button */}
        <button type="submit">Create Profile !!</button>
      </form>
    </div>
  );
};

export default ProfileCreation;
