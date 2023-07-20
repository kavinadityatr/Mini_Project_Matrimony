import React, { useState } from 'react';
import '../assets/hform.css';

const DropdownForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    console.log('Selected option:', selectedOption);
  };

  return (
    <div className='hform'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="dropdown" ></label>
      <select id="look" value={selectedOption} onChange={handleOptionChange}>
        <option value="">I am looking for </option>
        <option value="option1">Bride</option>
        <option value="option2">Groom</option>
      </select>
      <br/>
      <br/>

      
      <select id="age" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Age</option>
        <option value="option1">21 - 25</option>
        <option value="option2">25 - 30</option>
        <option value="option2">30 - 35</option>
        <option value="option2">35 - 40</option>
        <option value="option2">40 - 45</option>
      </select>
      <br/><br/>

      <input type="text" id = "loc" placeholder="Location"/>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default DropdownForm;
