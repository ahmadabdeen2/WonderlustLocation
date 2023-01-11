import React, {useLayoutEffect} from 'react'
import {LocationsContainer} from './styles'

import {LocationsHeader, Locations} from '../components';
// import { LocationsHeader } from '../components/LocationsSection/styles';





const LocationsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <>


    <LocationsContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
    exitTransition={{ duration: 1.5 }}
    
    >
{/* <LocationsHeader/> */}
  <Locations/>
    </LocationsContainer>
    </>
  )
}

export default LocationsPage