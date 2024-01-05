import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand style={{ color: "white" }}>
            <Link to='/' style={{ textDecoration: "none", color: "white", fontSize: "25px" }}>
              <i class="fa-solid fa-video text-warning"></i> Media Player
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar></>
  )
}

export default Header