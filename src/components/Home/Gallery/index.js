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

const Gallery = (props) => {
  const [gallery, setGallery] = useState([]);
  const getVideos = async () => {
    let query = '*[_type == "video"]{_id, title, videourl}';
    const data = await client.fetch(query);
    setGallery(data);
    console.log(gallery);
  };

  useEffect(() => {
    getVideos().then(() => {
      setCarouselWidth(measuredRef.current.scrollWidth - window.innerWidth);
    });
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
          {gallery.map((video) => {
            return (
              <CarouselInner key={client.id}>
                <CarouselVideo
                  url={video.videourl || ink}
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
