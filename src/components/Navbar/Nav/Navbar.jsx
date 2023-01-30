import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  NavContainer,
  NavLogo,
  NavLogoContainer,
  NavWrapper,
  OutletContainer,
  AnimationRevealPage,
} from "./styles";
import { logogreen } from "../../../assets/";
import { MenuContext } from "../MenuManager";
import MenuButton from "../MenuButton";
import MenuContent from "../MenuContent/index";
import Footer from "../../Footer/index";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const { open, setOpen } = useContext(MenuContext);
  const location = useLocation();
  const pathname = location.pathname;

  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
  return (
    <>
      <NavContainer>
        <NavWrapper>
          <NavLogoContainer to="/">
            <NavLogo src={logogreen} alt='wonderlust' />
          </NavLogoContainer>
          <MenuButton />
          <MenuContent />
        </NavWrapper>
      </NavContainer>
      <Outlet />
      {pathname !== "/contact" && <Footer speed={3.5} />}
    </>
  );
};

export default Navbar;
