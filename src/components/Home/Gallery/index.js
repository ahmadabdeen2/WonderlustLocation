import React from "react";
import {
  ClientContainer,
  GalleryWrapper,
  Galleries,
  GalleryVideo,
  HeaderText,
} from "./styles";

import { CursorContext } from "../../CustomCursor/CursorManager";

import { skate, ink, scuba } from "../../../assets";
const GalleryList = [
  {
    id: 1,
    video: skate,
  },

  {
    id: 2,
    video: ink,
  },
  {
    id: 3,
    video: scuba,
  },
];
const Gallery = (props) => {
  const { projectEnter, projectLeave } = React.useContext(CursorContext);

  return (
    <ClientContainer
      className="clients"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <HeaderText>Gallery</HeaderText>
      <GalleryWrapper>
        {GalleryList.map((Galleryobject) => {
          return (
            <Galleries
              key={Galleryobject.id}
              onMouseEnter={projectEnter}
              onMouseLeave={projectLeave}
            >
              <GalleryVideo
                src={Galleryobject.video}
                autoPlay
                loop
                muted
                type="video/mp4"
              />
            </Galleries>
          );
        })}
      </GalleryWrapper>
    </ClientContainer>
  );
};

export default Gallery;
