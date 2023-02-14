import React, {useLayoutEffect} from 'react'

import gsap from 'gsap'
import {LocationContainer, HeaderText, LocationWrapper, Location, LocationImage, LocationName, Description, LocationDescription, LocationsHeader, ViewAll, CTA, CTAbutton, CTAheading} from './styles'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {jeddah, riyadh, dubai, alula} from '../../../assets'
import {motion} from 'framer-motion'


import { CursorContext } from '../../CustomCursor/CursorManager';

const Locations = [
    {
        id:'riyadh1',
        name: "Riyadh",
        slug: "riyadh",
        image: riyadh,
        description: "Saudi Arabia's capital and largest city",
        
    },
 
    {
        id:'alula2',
        name: "Al Ula",
        slug: "alula",
        image: alula,
        description: "The city of picturesque landscapes ",
        linkto:'/locations/alula'
    },

]
const LocationsSection = () => {
    const {projectEnter, projectLeave} = React.useContext(CursorContext)
    return (
<LocationContainer
     initial={{opacity: 0, y: 50}}
     whileInView={{opacity: 1, y: 10}}
     transition={{duration: 1, delay: 0}}
     viewport={{once: true}}>
    <LocationsHeader
  
       >
    <HeaderText>
        Locations
    </HeaderText>
    <ViewAll to={
        '/locations'
    }>
        View All
    </ViewAll>
    </LocationsHeader>
    <LocationWrapper    
    >
   

    {Locations.map((locationobject) => {
        return (
        <Location key={locationobject.id} to ={{pathname:'/locations', city:locationobject.slug}} onMouseEnter={projectEnter} onMouseLeave={projectLeave} >
            
            <LocationImage src={locationobject.image} alt={locationobject.name}/>
          

        </Location>
        )
    })}
 
</LocationWrapper>

</LocationContainer>
    )
   
}


export default LocationsSection