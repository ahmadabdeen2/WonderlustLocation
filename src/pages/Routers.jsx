import React from 'react'
import Navbar from '../components/Navbar/Nav/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Locations from './Locations'
import SingleLocation from './SingleLocation'
import Contact from './Contact'
const Routers = () => {
  return (    
    <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<Home/>}/> 
        <Route path ='/about' element={<About/>}/>
        <Route path='/locations/:str' element={<Locations/>}/>
        <Route path = '/location/:id' element={<SingleLocation/>}/>
        
        <Route path = '/contact' element={<Contact/>}/>
</Route>


    </Routes>

  )
}

export default Routers