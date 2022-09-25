import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap';

export default function Navigationbar() {
  return (
    <div>
      <Navbar className='navbarbg' variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to='/' className="text-white ms-3 text-decoration-none"><span>🏠</span>Home</Link>
            
            <Link to='/contact' className="text-white ms-3 text-decoration-none"><span>📒</span> Contactos</Link>
          </Nav>
          <Navbar.Brand>Happy Cake <span>🍰</span></Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}
