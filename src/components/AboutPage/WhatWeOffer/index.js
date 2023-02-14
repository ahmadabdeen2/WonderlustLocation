import React, {useState} from 'react'
import { WhatWeOfferContainer,  HeaderText,TitleContainer, JobsList, Job, JobDescription, JobTitle , ReadMore} from './styles'
import { AnimatePresence } from 'framer-motion'

import { CursorContext } from '../../CustomCursor/CursorManager';

const jobs = [
    {
        title: "Location Manager",
        description: "Responsible for finding and securing locations for film shoots. Our Locations Manager cover a range of skills, including research, negotiation, communication, and organization."        
    },
    {
        title: "Location Manager Assistant",
        description: "Responsible for assisting the Location Manager in finding and securing locations for film shoots."
    },
    {
        title: "Location Assistant",
        description: "Responsible for assisting the Location Manager in finding and securing locations for film shoots."
    },
    {
        title: "Location Scout",
        description: "Responsible for finding and securing locations for film shoots."
    }
]
const WhatWeOffer = () => {

    const {readMoreEnter, readMoreLeave} = React.useContext(CursorContext)
    const [active, setActive] = useState(null)
    const handleClick = (title) => {
        if (title === active) {
            setActive(null)
        } 
        else {
            setActive(title)
        }
    }
  return (
    <WhatWeOfferContainer>
    <HeaderText>
        Job Description
    </HeaderText>

    <AnimatePresence>
        <JobsList>
            {jobs.map((job) => {
                return (
                    <Job onClick={() => handleClick(job.title)}>
                        <TitleContainer>
                        <JobTitle>
                            {job.title}
                        </JobTitle>
                        <ReadMore onClick={() => handleClick(job.title)} onMouseEnter={readMoreEnter} onMouseLeave={readMoreLeave}>
        <span>+</span>   
      </ReadMore>
                        </TitleContainer>
                        {active === job.title && (
                            <JobDescription
                            initial={{opacity: 0, y: -50}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 50}}
                            transition={{duration: 1, delay: 0}}
                            >
                                {job.description}
                            </JobDescription>
                        )}
                    </Job>
                )
            })}
        </JobsList>
    </AnimatePresence>
  

    </WhatWeOfferContainer>
  )
}

export default WhatWeOffer