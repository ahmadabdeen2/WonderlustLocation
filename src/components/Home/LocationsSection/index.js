import React, {useLayoutEffect} from 'react'

import gsap from 'gsap'
import {LocationContainer, HeaderText, LocationWrapper, Location, LocationImage, LocationName, Description, LocationDescription, LocationsHeader, ViewAll, CTA, CTAbutton, CTAheading} from './styles'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {jeddah, riyadh, dubai, alula} from '../../../assets'
import {motion} from 'framer-motion'


import { CursorContext } from '../../CustomCursor/CursorManager';

const Locations = [
    {
        name: "Riyadh",
        image: riyadh,
        description: "Saudi Arabia's capital and largest city",
        
    },
 
    {
        name: "Al Ula",
        image: alula,
        description: "The city of picturesque landscapes ",
        linkto:'/locations/alula'
    },

]
const LocationsSection = () => {
    const {setCursorVariant, setCursorText, projectEnter, projectLeave} = React.useContext(CursorContext)

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
    <ViewAll>
        View All
    </ViewAll>
    </LocationsHeader>
    <LocationWrapper

    

    
    >
   

    {Locations.map((locationobject) => {
        return (
        <Location to ={'/locations/' + locationobject.name.replace(/\s/g, '').toLowerCase()} onMouseEnter={projectEnter} onMouseLeave={projectLeave} >
            
            <LocationImage src={locationobject.image} alt={locationobject.name}/>
             {/* <LocationName>
                {Location.name}
            </LocationName>
            <LocationDescription>
                {location.description}
            </LocationDescription>  */}

        </Location>
        )
    })}
 
</LocationWrapper>

</LocationContainer>
    )
   
}


export default LocationsSection