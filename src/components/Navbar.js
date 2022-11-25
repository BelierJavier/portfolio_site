import React from 'react';
import './navbar.css';
import { Flex, Box} from 'rebass';
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Flex>
          <Box
          p={3}
          width={1/16}
          color='white'
          bg='primary'/>
          <Box
          p={3}
          width={1/3}
          color='white'
          bg='primary'>

          <p className='logo'>Prodigy Alpha</p>

          </Box>
          <Box
          p={3}
          width={1/2}
          color='white'
          bg='primary'>
          </Box>
          <Box
          p={3}
          width={1/3}
          color='white'
          bg='primary'>
            <Nav>
              <NavMenu>
                <NavLink to="/home" activeStyle>
                  HOME
                </NavLink>
                <NavLink to="/about" activeStyle>
                  ABOUT
                </NavLink>
                <NavLink to="/projects" activeStyle>
                  PROJECTS
                </NavLink>
                <NavLink to="/contact" activeStyle>
                  CONTACT
                </NavLink>
              </NavMenu>
            </Nav>
          </Box>
          <Box
          p={3}
          width={1/16}
          color='white'
          bg='primary'/>
      </Flex>
    </>
  );
};
  
export default Navbar;

