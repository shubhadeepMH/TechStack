import react from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import ServicePage from './Pages/ServicePage';
import Contact from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';

export default function App(){
   return(
     <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<ServicePage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<AboutUs/>} />
      </Routes>
      </BrowserRouter>
     </div>
   )
 }

