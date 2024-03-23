import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
import logo from './plus.png';

const NavigationBar = () => {
  const navbarStyle = {
    height: '57px',
    backgroundColor: '#f0f0f0', 
    borderRadius: '5px', 
    padding: '10px', 
  };

  const brandStyle = {
    fontSize: '30px',
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
  };

  const buttonStyle = {
    borderRadius: '5px',
    padding: '5px 10px',
    marginLeft: '550px',
  };

  const buttonStyle2 = {
    borderRadius: '5px',
    padding: '5px 10px',
    marginLeft: '10px',
  };

  return (
    <Navbar style={navbarStyle} expand="lg">
      <Navbar.Brand style={brandStyle}>
        <img
          src={logo}
          alt="Logo"
          height="45"
          className="d-inline-block align-top"
        />
        {' Addition of Two numbers'}
      </Navbar.Brand>
      <Nav className="ml-auto">
        {/* Button for Inventory Management */}
        <Nav.Link href="http://192.168.56.1:3000" target="_blank" style={{ ...buttonStyle, backgroundColor: 'blue', color: 'white' }}>Inventory Management</Nav.Link>
        {/* Button for Third-party API */}
        <Nav.Link href="http://192.168.56.1:3000/new-page" target="_blank" style={{ ...buttonStyle2, backgroundColor: 'green', color: 'white' }}>3rd party API</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
