import React, {useContext} from 'react'
import {  MenuContentContainer, NavLinksContainer, NavLinks, LinkS, Social, Text, ListItem, StyledIcon} from './styles';
import {MenuContext} from '../MenuManager/index'
import {Link} from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa';

const MenuLinks = [
    {   
        id: 'HomeLink',
        title:'Home',
        path:'/'
    },
    {
        id: 'AboutLink',
        title:'About',
        path:'/about'
    },
    {
        id: 'LocationsLink',
        title:'Locations',
        path:'/locations'
    },
    {
        id: 'ContactLink',
        title:'Contact',
        path:'/contact'
    },




]


const MenuContent = () => {

    const {open, setOpen} = useContext(MenuContext)
    
  return (
    <MenuContentContainer className={open}>
 
        <NavLinksContainer>
            <NavLinks>
                {MenuLinks.map((linkz) => {
                    return (
                        <ListItem key={linkz.id} onClick={() => setOpen(false)}>
                        <LinkS to={linkz.path}  > 
                            {linkz.title}
                        </LinkS>
                        </ListItem>
                    )
                })}
            </NavLinks>
                <Social>
                <Text>Riyadh, Saudi Arabia</Text>
                <StyledIcon>
                <FaInstagram/>
                </StyledIcon>
                </Social>


        </NavLinksContainer>

        {/* <NavLinksContainer> */}
  


{/* </NavLinksContainer> */}


    </MenuContentContainer>
  )
}

export default MenuContent