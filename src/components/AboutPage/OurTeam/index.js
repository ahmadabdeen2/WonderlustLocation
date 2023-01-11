import React, {useLayoutEffect} from 'react'


import {OurTeamContainer, HeaderText, OurTeamWrapper, OurTeam, OurTeamImage, OurTeamName,  OurTeamsHeader} from './styles'

import {member1, member2, member3, member4} from '../../../assets'
import {motion} from 'framer-motion'


import { CursorContext } from '../../CustomCursor/CursorManager';

const OurTeamArray = [
    {
        name: "Sergio Smith",
        image: member1,
        email: "mailto:sergiosmith@wonderlust-la.com"
    },
 
    {
        name: "Jordan Ibe",
        image: member2,
        email: "mailto:sergiosmith@wonderlust-la.com"
    },
    {
        name: "Matthew Rafi",
        image: member3,
        email: "mailto:sergiosmith@wonderlust-la.com"
    },
    {
        name: "Mira Ramos",
        image: member4,
        email: "mailto:sergiosmith@wonderlust-la.com"
    },

]
const OurTeamComponent = () => {
    const {setCursorVariant, setCursorText, memberEnter, memberLeave} = React.useContext(CursorContext)

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
   

    {OurTeamArray.map((member) => {
        return (
        <OurTeam href={member.email} onMouseEnter={memberEnter} onMouseLeave={memberLeave} >
            
            <OurTeamImage src={member.image} alt={member.name}/>
            <OurTeamName>{member.name}</OurTeamName>
     
        </OurTeam>
        )
    })}
 
</OurTeamWrapper>

</OurTeamContainer>
    )
   
}


export default OurTeamComponent