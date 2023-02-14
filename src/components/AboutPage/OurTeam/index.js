import React, {useState, useEffect} from 'react'
import {client, urlFor} from '../../../client'

import {OurTeamContainer, HeaderText, OurTeamPosition, OurTeamDetails, OurTeamWrapper, OurTeam, OurTeamImage, OurTeamName,  OurTeamsHeader} from './styles'

import {motion} from 'framer-motion'


import { CursorContext } from '../../CustomCursor/CursorManager';



const OurTeamComponent = () => {
    const [teamMembers, setTeamMembers] = useState([])

    const getTeamMembers = async () => {
        let query = '*[_type == "team"]'
        let data = await client.fetch(query)
    
        setTeamMembers(data)
        console.log(data)
    }

    useEffect(() => {
        getTeamMembers()
    }, [])
    const { memberEnter, memberLeave} = React.useContext(CursorContext)

    return (
<OurTeamContainer
     initial={{opacity: 0, y: 50}}
     whileInView={{opacity: 1, y: 10}}
     transition={{duration: 1, delay: 0}}
     viewport={{once: true}}>
    <OurTeamsHeader>
    <HeaderText>
        Our Team
    </HeaderText>
  
    </OurTeamsHeader>
    <OurTeamWrapper    
    >
   

    {teamMembers.map((member) => {
        return (
        <OurTeam href={"mailto:" + member.email} onMouseEnter={memberEnter} onMouseLeave={memberLeave} >
            
            <OurTeamImage src={urlFor(member.image).url()} alt={member.name}/>
            <OurTeamDetails>
            <OurTeamName>{member.name}</OurTeamName>
            <OurTeamPosition>{member.position}</OurTeamPosition>
            </OurTeamDetails>
        </OurTeam>
        )
    })}
 
</OurTeamWrapper>

</OurTeamContainer>
    )
   
}


export default OurTeamComponent