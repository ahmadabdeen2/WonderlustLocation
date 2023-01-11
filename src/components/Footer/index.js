import React, { useEffect, useState } from "react";
import {
  FooterContainer,
  Heading,
  VerticalLine,
  Triangle,
  Triangle2,
  Links,
  LinkItem,
  HeadingContainer,
  BottomContainer,
  Copyright,
  CustomForm,
    FormInput,
    Logo,
    Title,
   
} from "./styles";
import { Link } from "react-router-dom";
import "./styles.css";
import { triangles, arrow, symbol } from "../../assets";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const LinksFooter = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Locations",
    link: "/locations/featuredlocations",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  
];

const Footer = (props) => {
  const [typedText, setTypedText] = useState("");
  const strings = ["Wander", "Explore", "Discover"];
  const { speed } = props;
  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);



  

  return (
    <FooterContainer className="footer">
        {/* <Triangle2/> */}
      <HeadingContainer>
        {/* <VerticalLine /> */}
        <Links>
          {/* <LinkItem>
            <a href="https://www.instagram.com/wonderlust.la/" target="__blank">
              Instagram
            </a>
          </LinkItem>
          <LinkItem>
            <a href="mailto:info@wonderlust-la.com">Email</a>
          </LinkItem> */}
          {LinksFooter.map((link, index) => {

            return (
              <LinkItem key={index}>
                <Link to={link.link}>{link.name}</Link>
              </LinkItem>
            );
          }
          )}
        </Links>
          <Logo src={symbol} alt="WonderLust" />

      {/* <Logo src={logofull} alt='WonderLust'/> */}
      </HeadingContainer>
      <BottomContainer>
        <Title >
     
     Let's get started.</Title> 
        {/* <Links>
          <LinkItem>
            <a href="https://www.instagram.com/wonderlust.la/" target="__blank">
              Instagram
            </a>
          </LinkItem>
          <LinkItem>
            <a href="mailto:info@wonderlust-la.com">Email</a>
          </LinkItem>
          </Links> */}
        </BottomContainer>
    
    </FooterContainer>
  );
};

export default Footer;
