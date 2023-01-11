import React from 'react'

import { HowContainer, Wrapper, WorkImage, HeadingText, Paragraph, ReadMore , SectionRight} from './styles';
import {wonderlustShooting} from '../../../assets'

const HowWork = () => {
  return (
    <HowContainer>
        <Wrapper>
        <WorkImage 
     initial={{opacity: 0, y: 50}}
     whileInView={{opacity: 1, y: 10}}
     transition={{duration: 1, delay: 0}}
       viewport = {{once:true}} 
        src={wonderlustShooting} />
        
        <SectionRight>
        <HeadingText>
            Our Approach

        </HeadingText>
        <Paragraph>
        Our approach is centered around providing the best possible service to our clients. <br/> <br/> We believe that by understanding the specific needs and goals of each business, we can create customized solutions that help them succeed.

        </Paragraph>
        <ReadMore href="https://www.instagram.com/wonderlust.la/" target="__blank">
 + Visit our Instagram
        </ReadMore>
</SectionRight>
        </Wrapper>


    </HowContainer>
  )
}

export default HowWork