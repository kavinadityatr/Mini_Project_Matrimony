
import './App.css';
import { Route , Routes } from 'react-router-dom';
import {BrowserRouter} from "react-router-dom"
import Login from './components/LoginPage';
import Home from './components/HomePage'
import SignUp from './components/SignUp';
import Profile from './components/profile';
import Membership from './components/Membership';
import About from './components/About';
import ProfileCreation from './components/ProfileCreation';
import { Provider } from 'react-redux';

import Appu from './components/microfeedback';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/member' element={<Membership/>}></Route>
         <Route path='/createprofile' element={<ProfileCreation/>}></Route>
         <Route path='/App' element={<Appu/>}></Route>
         </Routes>  
       </BrowserRouter>
  );
}

export default App;
