
import './App.css';
import Body from './components/Body';
import Home from './components/HomePage';
import Login from './components/Login';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Profile from './components/profile';
import About from './components/About';
import Membership from './components/Membership';


function App() {
  return (
    <div>
     
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Body/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/member' element={<Membership/>}></Route>
        {/*<Route path='/member' element={<Membership/>}></Route> */}
        </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
