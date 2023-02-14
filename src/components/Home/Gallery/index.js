import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  ClientContainer,
  HeaderText,
  TextLarge,
  CarouselContainer,
  Carousel,
  CarouselInner,
  CarouselVideo,
  DraggableLine,
} from "./styles";
import { client } from "../../../client";
import { CursorContext } from "../../CustomCursor/CursorManager";
import {ink} from '../../../assets/'
const isMobile = window.innerWidth < 768;

const initial = [
  {
    id: 1,
    title: "Video 1",
    videourl: 'https://vimeo.com/762560153',
  },
  {
    id: 2,
    title: "Video 2",
    videourl: 'https://vimeo.com/762560153',
  },
  {
    id: 3,
    title: "Video 3",
    videourl: 'https://vimeo.com/762560153',
  }
]

const Gallery = (props) => {
  const [gallery, setGallery] = useState([]);
  const getVideos = async () => {
    let query = '*[_type == "video"]{_id, title, videourl}';
    await client.fetch(query).then((res) => {
      setGallery(res);
    }).then(() => {
    setCarouselWidth(measuredRef.current.scrollWidth - window.innerWidth)
    console.log(measuredRef.current.scrollWidth - window.innerWidth)
    })
  
    return measuredRef.current.scrollWidth - window.innerWidth;
  };


  useEffect(() => {
    async function fetchData(){
      await getVideos()



    }
    fetchData()
  }, []);

  const { dragMe, dragMeLeave } = React.useContext(CursorContext);
  const [carouselWidth, setCarouselWidth] = useState(0);

  const measuredRef = useRef(null);

  return (
    <ClientContainer
      className="client"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <HeaderText>Gallery</HeaderText>
      <CarouselContainer ref={measuredRef}>
        <Carousel
          drag={isMobile ? false : 'x'}
          dragConstraints={{ right: 0, left: -carouselWidth }}
          onMouseEnter={dragMe}
          onMouseLeave={dragMeLeave}
        >
          {(gallery || initial).map((video) => {
            return (
              <CarouselInner key={client.id}>
                <CarouselVideo
                  url={video.videourl }
                  controls={true}
                  width={isMobile ? '90vw' : 640}
                  height={isMobile ? 200 : 360}
                />
                <TextLarge>{video.title}</TextLarge>
              </CarouselInner>
            );
          })}
        </Carousel>
      </CarouselContainer>
    </ClientContainer>
  );
};

export default Gallery;
