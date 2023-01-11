import React, { useState, useEffect} from 'react'

import gsap from 'gsap'
import {LocationContainer, HeaderText, LocationWrapper, Location, LocationImage, LocationName, Description, LocationDescription, LocationsHeader,LocationsHeaderContainer, Heading} from './styles'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {jeddah, riyadh, dubai, alula} from '../../../assets'
import {motion} from 'framer-motion'
import {urlFor, client} from '../../../client'
import {useLocation} from 'react-router-dom'
import {Link } from 'react-router-dom'

import { CursorContext } from '../../CustomCursor/CursorManager';



const LocationsSection = () => {
    const location = useLocation()
    const {setCursorVariant, setCursorText, projectEnter, projectLeave} = React.useContext(CursorContext)
    const [locationsJSON, setLocationsJSON] = useState([])
    const [title, setTitle] = useState('')
    const pathname = location.pathname.split("/")[2]  
    const getLocations = async () => {
        const query = `*[_type == "featuredlocations" && featureid match '${pathname}']{featuredname, locations[]->{...}}`

        
        const data = await client.fetch(query);
      
       setLocationsJSON(data[0].locations)
       setTitle(data[0].featuredname)
       console.log(locationsJSON)
  

    }
    useEffect(() => {
     
        getLocations()
        
    }, [])

    return (
<LocationContainer
     initial={{opacity: 0, y: 50}}
     whileInView={{opacity: 1, y: 10}}
     transition={{duration: 1, delay: 0}}
     viewport={{once: true}}>

 <LocationsHeaderContainer>
<Heading>{title}</Heading>
    </LocationsHeaderContainer>
    <LocationWrapper>



    {locationsJSON.map((locationobject) => {
        return (
        <Location 
        initial = {{opacity:0}}
        whileInView = {{opacity:1}}
          viewport={{once: true}}
        transition = {{ duration:1}}
        onMouseEnter={projectEnter} onMouseLeave={projectLeave}
        onClick={projectLeave}
        to = {'/location/' + locationobject._id}
        key = {locationobject._id}
        >
            {locationobject.thumbnail && <LocationImage src={urlFor(locationobject.thumbnail).url()} alt={locationobject.name}/>}
             <LocationName>
                {locationobject.locationname}
            </LocationName>

        </Location>
        )
    })}
 
</LocationWrapper>

</LocationContainer>
    )
   
}


export default LocationsSection