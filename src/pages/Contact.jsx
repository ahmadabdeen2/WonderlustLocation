import React, {useLayoutEffect} from 'react'
import {ContactContainer} from './styles'

import {ContactPage} from '../components';
// import { LocationsHeader } from '../components/LocationsSection/styles';

// import Navbar from '../components/Navbar/Nav/Navbar';
// import Navbar from '../../../frontend/src/components/Navbar';




const LocationsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <>
    
    <ContactContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
    exitTransition={{ duration: 1.5 }}
    
    >
{/* <LocationsHeader/> */}
  <ContactPage/>
    </ContactContainer>
    </>
  )
}

export default LocationsPage