import React, { useRef, useState, useEffect, useCallback } from "react";

import {
  SingleLocationContainer,
  Heading,
  HeaderText,
  LocationThumbnail,
  Description,
  DescriptionContainer,
  Details,
  DetailsText,
  CarouselContainer,
  Carousel,
  CarouselInner,
  CarouselImage,
  Container,
  FullScreenCarouselContainer,
  FullScreenCarousel,
  FullScreenCarouselInner,
  FullScreenCarouselImage,
  CloseButton,
} from "./styles";

import { CursorContext } from "../CustomCursor/CursorManager";
import { useLocation } from "react-router-dom";
import { client, urlFor } from "../../client";
import Loader from "../Loader";

const SingleLocationComponent = () => {
  const location = useLocation();
  const {
    dragMe,
    dragMeLeave,
  } = React.useContext(CursorContext);
  const [locationsJSON, setLocationsJSON] = useState([]);
  const [morningWidth, setMorningWidth] = useState(0);
  const [nightWidth, setNightWidth] = useState(0);
  const [morningFullScreenWidth, setMorningFullScreenWidth] = useState(0);
  const [nightFullScreenWidth, setNightFullScreenWidth] = useState(0);
  const [nightfullScreen, setNightFullScreen] = useState(false);
  const [morningFullScreen, setMorningFullScreen] = useState(false);
  const pathname = location.pathname.split("/")[2];

  nightfullScreen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
  morningFullScreen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
  const morningRef = useCallback((node) => {
    if (node !== null) {
      setMorningWidth(node.scrollWidth - window.innerWidth);
    }
  }, []);
  const morningFullScreenRef = useCallback((node) => {
    if (node !== null) {
      setMorningFullScreenWidth(node.scrollWidth - window.innerWidth);
    }
  }, []);
  const nightRef = useCallback((node) => {
    if (node !== null) {
      setNightWidth(node.scrollWidth - window.innerWidth);
    }
  }, []);
  const nightFullScreenRef = useCallback((node) => {
    if (node != null) {
      setNightFullScreenWidth(node.scrollWidth - window.innerWidth);
    }
  }, []);
  const getLocations = async () => {
    const query = `*[_type == "location" && _id == '${pathname}']`;
    const data = await client.fetch(query);
    setLocationsJSON(data);
    console.log(data);
  };
  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      {locationsJSON && locationsJSON.length > 0 ? (
        <SingleLocationContainer>
          <Heading>{locationsJSON[0]?.locationname}</Heading>

          <LocationThumbnail
            src={urlFor(locationsJSON[0]?.thumbnail).url()}
            alt="Riyadh"
          />

          <DescriptionContainer>
            <Description>{locationsJSON[0]?.locationdescription}</Description>
            <Details>
              <DetailsText>
                Location Dimensions: {locationsJSON[0]?.locationdimension}
              </DetailsText>
              <DetailsText>
                Location Direction: {locationsJSON[0]?.locationdirection}
              </DetailsText>
            </Details>
          </DescriptionContainer>
        {locationsJSON[0]?.morningImages?.length !== 0 && (
          <>
          <Container>
            <HeaderText>Location Morning Images</HeaderText>
          </Container>
          <CarouselContainer ref={morningRef}>
            <Carousel
              drag="x"
              dragConstraints={{ right: 0, left: -morningWidth }}
              onMouseEnter={dragMe}
              onMouseLeave={dragMeLeave}
            >
              {locationsJSON[0]?.morningImages?.map((image) => {
                return (
                  <CarouselInner
                    onDoubleClick={() =>
                      setMorningFullScreen(!morningFullScreen)
                    }
                  >
                    <CarouselImage
                      src={urlFor(image).url()}
                      className={morningFullScreen}
                      alt = {locationsJSON[0]?.locationname}
                    />
                  </CarouselInner>
                );
              })}
            </Carousel>
          </CarouselContainer>
       
          {morningFullScreen && (
            <>
              <FullScreenCarouselContainer
                ref={morningFullScreenRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CloseButton
                  onClick={() => setMorningFullScreen(!morningFullScreen)}
                >
                  x
                </CloseButton>
                <FullScreenCarousel
                  drag="x"
                  dragConstraints={{ right: 0, left: -morningFullScreenWidth }}
                  onMouseEnter={dragMe}
                  onMouseLeave={dragMeLeave}
                >
                  {locationsJSON[0]?.morningImages?.map((image) => {
                    return (
                      <FullScreenCarouselInner>
                        <FullScreenCarouselImage
                          src={urlFor(image).url()}
                          className={morningFullScreen}
                          alt = {locationsJSON[0]?.locationname}
                        />
                      </FullScreenCarouselInner>
                    );
                  })}
                </FullScreenCarousel>
              </FullScreenCarouselContainer>
            </>
          )}
   </>
        )}
   {locationsJSON[0]?.nightImages && (
          <>
          <Container>
            <HeaderText>Location Night Images</HeaderText>
          </Container>
          <CarouselContainer ref={nightRef}>
            <Carousel
              drag="x"
              dragConstraints={{ right: 0, left: -nightWidth }}
              onMouseEnter={dragMe}
              onMouseLeave={dragMeLeave}
            >
              {locationsJSON[0]?.nightImages?.map((image) => {
                return (
                  <CarouselInner
                    onDoubleClick={() => setNightFullScreen(!nightfullScreen)}
                  >
                    <CarouselImage
                      src={urlFor(image).url()}
                      className={nightfullScreen}
                      alt = {locationsJSON[0]?.locationname}
                    />
                  </CarouselInner>
                );
              })}
            </Carousel>
          </CarouselContainer>
          {nightfullScreen && (
            <>
              <FullScreenCarouselContainer
                ref={nightFullScreenRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CloseButton
                  onClick={() => setNightFullScreen(!nightfullScreen)}
                >
                  x
                </CloseButton>
                <FullScreenCarousel
                  drag="x"
                  dragConstraints={{ right: 0, left: -nightFullScreenWidth }}
                  onMouseEnter={dragMe}
                  onMouseLeave={dragMeLeave}
                >
                  {locationsJSON[0]?.nightImages?.map((image) => {
                    return (
                      <FullScreenCarouselInner>
                        <FullScreenCarouselImage
                          src={urlFor(image).url()}
                          className={nightfullScreen}
                          alt = {locationsJSON[0]?.locationname}
                        />
                      </FullScreenCarouselInner>
                    );
                  })}
                </FullScreenCarousel>
              </FullScreenCarouselContainer>
              </>
          )}
            </>
          )}
        </SingleLocationContainer>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleLocationComponent;
