import React, {useEffect, useState, useCallback} from 'react'
import {ClientContainer, ClientWrapper,MainText, HeaderText,ClientImage, ClientGrid, ClientGridItem, TextLarge, TextSmall, ViewAll, ClientsHeader,  CarouselContainer, Carousel, CarouselInner, CarouselImage, Container} from './styles'
import {telfaz, takkah, truffle, dreambox, twotales, filmpudding, dnamedia, sofa, prodigious, needAfixer, alamiya} from '../../../assets'
import { CursorContext } from '../../CustomCursor/CursorManager';

const clients = [
    {id:1, name:"Truffle", Location: "Riyadh", Year: "2022", Website: "https://www.truffle.film/", image:truffle},
    {id:4, name: "Dreambox", Location: "Riyadh", Year: "2022", Website: "http://dreamboxfilms.com/", image:dreambox},
    {id:5, name: "Film Pudding", Location: "Dubai", Year: "2022", Website: "https://www.filmpudding.com/", image:filmpudding},
    {id:9, name: "Two Tales", Location: "Riyadh", Year: "2022", Website: "https://www.twotales.film/", image:twotales},
    {id:3, name: "Telfaz11", Location: "Riyadh", Year: "2022", Website: "https://telfaz11.com/", image:telfaz},
    {id:2, name:"Takkah", Location: "Riyadh", Year: "2022", Website: "https://www.instagram.com/takkah.sa/?hl=en", image:takkah},
    {id:6, name: "DNA Media", Location: "Riyadh", Year: "2022", Website: "https://www.dnamedia.tv/", image:dnamedia},
    {id:7, name: "Al Alamiya", Location: "Riyadh", Year: "2022", Website: "https://www.alamiya.sa/", image:alamiya},
    {id:8, name: "Sofa", Location: "Riyadh", Year: "2022", Website: "https://www.instagram.com/sofa.film/?hl=en", image:sofa},
    {id:10, name: "Prodigous", Location: "Dubai", Year: "2022", Website: "https://www.prodigious.com/", image:prodigious},
    {id:11, name: "NeedAFixer", Location: "Dubai", Year: "2022", Website: "https://www.needafixer.com/", image:needAfixer},

]

const Clients = (props) => {
    
    const {setCursorVariant, setCursorText, projectEnter, projectLeave, dragMe, dragMeLeave} = React.useContext(CursorContext)
    const [carouselWidth, setCarouselWidth] = useState(0);
    
  
  
    const measuredRef = useCallback(node => {
      if (node !== null) {
        setCarouselWidth(node.scrollWidth-window.innerWidth);
     
      }
    }, []);

   

  return (
    <ClientContainer className='clients'
    initial = {{y: 50, opacity: 0}}
    whileInView = {{y: 0, opacity: 1}}
    transition = {{duration: 1}}
    viewport={{once: true}}>
    
<HeaderText>
Clients
</HeaderText>
      <CarouselContainer ref={measuredRef}>

        <Carousel drag="x" dragConstraints={{right:0, left: -carouselWidth}} onMouseEnter={dragMe} onMouseLeave={dragMeLeave}>
          {clients.map((client) => {
            return (
              <CarouselInner key={client.id}>
            <CarouselImage src={client.image}/>
            <TextLarge>{client.name}</TextLarge>
          </CarouselInner>
            )

          }
          )}
          </Carousel>
        </CarouselContainer>

    </ClientContainer>
  )
}

export default Clients