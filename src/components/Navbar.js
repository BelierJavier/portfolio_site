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
            <div className="i">I</div>
            <div className="logo-box">
              <p className='logo'>Prodigy Alpha</p>
            </div>
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
                <NavLink to="/" exact="true"> 
                  HOME
                </NavLink>
                <NavLink to="/about">
                  ABOUT
                </NavLink>
                <NavLink to="/projects">
                  PROJECTS
                </NavLink>
                <NavLink to="/contact">
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

