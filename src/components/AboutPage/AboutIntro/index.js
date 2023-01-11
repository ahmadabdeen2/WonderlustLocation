import React, {useRef} from "react";
import { AboutIntroContainer, Description, Text , TextContainer, Triangle, ReadMore} from "./styles";
import { Link } from 'react-router-dom';
import {cameraShutterSound} from '../../../assets'
const AboutIntro = () => {
    const audioRef = useRef(null);
  return (
    <AboutIntroContainer>
            <audio
        ref={audioRef}
        src={cameraShutterSound}
        

      />
        {/* <Triangle/> */}
        <TextContainer>

      <Text>
        We specialize in providing comprehensive location services for film and
        television productions. With years of experience in the industry, our
        team has the expertise and resources to scout, secure, and manage the
        perfect locations for your project.
      </Text>

      </TextContainer>

      

    </AboutIntroContainer>
  );
};

export default AboutIntro;
