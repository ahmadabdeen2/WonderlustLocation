import React from 'react'
import {lazy, Suspense} from 'react'
import Navbar from '../components/Navbar/Nav/Navbar';
import {Routes, Route} from 'react-router-dom'
import { Loader } from '../components';
import FeaturedLocationsSection from '../components/FeaturedLocations/FeaturedLocations';


const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Locations = lazy(() => import('./Locations'))
const SingleLocation = lazy(() => import('./SingleLocation'))
const Contact = lazy(() => import('./Contact'))
const Routers = () => {
  
  return (    
    <Suspense fallback={<Loader/>}>
    <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<Home/>}/> 
        <Route path ='/about' element={<About/>}/>
        <Route path ='/locations' element={<Locations/>}/>
        <Route path = '/location/:id' element={<SingleLocation/>}/>
        <Route path = '/locations/:str' element={<FeaturedLocationsSection/>} />
        
        <Route path = '/contact' element={<Contact/>}/>
</Route>


    </Routes>
    </Suspense>

  )
}

export default Routers