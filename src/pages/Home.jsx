import React, { useLayoutEffect } from "react";
import "./Home.css";
// import Hero from '../components/Hero/index';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MenuContext } from "../components/Navbar/MenuManager";
import { Hero, AboutSection, LocationsSection, Clients, Gallery } from "../components";
import { HomeContainer } from "./styles";
import { AnimatePresence } from "framer-motion";
import {motion } from "framer-motion";
import Cursor from "../components/CustomCursor/index";
import HorizontalText from '../components/HorizontalText/index';
const Home = () => {

  const { open, setOpen } = React.useContext(MenuContext);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    window.scrollTo(0,0)
  })
  useLayoutEffect(() => {

    const changeBackground = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "hero",
          start: "top top-=200",
          end: "+=800",
          scrub: 1,
          pin: true,
        },
      });
      tl.fromTo(
        ".home-container",
        {
          backgroundColor: "#1e1e1e",
          duration: 0.5,
        },
        { backgroundColor: "#fff", duration: 0.5},
        0, "about"
      );
      tl.to(
        ".home-container",
        {
          backgroundColor: "#1e1e1e",
          duration: 0.5,
        },
        0.5
      );
      return tl;
    };
    const master = gsap.timeline();
    master.add(changeBackground());
    return () => {
      if (master) {
        master.kill();
      }
    };
  }, []);

  return (
      <>
    <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, display:"none"}}
            animate={{ opacity: 1 , display: "block",transition: { duration: 0.5 }}}
            exit={{ opacity: 0, transition: { duration: 0.5} }}
          
            className="overlay"
            onClick={() => setOpen(false)}
          ></motion.div>
        )}
</AnimatePresence>
        <HomeContainer
          className={"home-container"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          exitTransition={{ duration: 1.5 }}
        >
    
          <Hero className="hero" />
          <AboutSection className='about' />
          <LocationsSection />
          <HorizontalText text={"Wonderlust."} from={-200} to={200}/>
          <Gallery/>
          <Clients />
        </HomeContainer>
      </>
  );
};

export default Home;
