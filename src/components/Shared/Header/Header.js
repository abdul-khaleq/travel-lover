import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
  console.log(user)
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Travel</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
     <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>

      {user?.email && <Nav.Link as={HashLink} to="/myOrder">My orders</Nav.Link>
      }
      {user?.email && <Nav.Link as={HashLink} to="/addService">Add services</Nav.Link>
      }
      {user?.email && <Nav.Link as={HashLink} to="/manageService">Manage Services</Nav.Link>
      }
      <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>

      {user?.email ? <Button onClick={logOut} variant="light">Logout</Button> 
      : <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
      
       } 

      <Navbar.Text>
         <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </>
    );
};

export default Header;