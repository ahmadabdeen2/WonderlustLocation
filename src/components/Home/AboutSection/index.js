import React from "react";
import { AboutContainer, Text , TextContainer, ReadMore} from "./styles";

const AboutSection = () => {

  return (
    <AboutContainer>

        <TextContainer>

      <Text>
        We specialize in providing comprehensive location services for film and
        television productions. With years of experience in the industry, our
        team has the expertise and resources to scout, secure, and manage the
        perfect locations for your project.
      </Text>
      <ReadMore to="/about">
        <span>+</span>   
      </ReadMore>
      </TextContainer>

    </AboutContainer>
  );
};

export default AboutSection;
