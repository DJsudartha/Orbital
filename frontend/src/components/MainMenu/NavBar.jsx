import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="info" data-bs-theme="dark" style={{ height: '100px' }}>
            <Container fluid style={{ backgroundColor: 'transparent' }}>
                <Nav className="me-auto" style={{ backgroundColor: 'transparent' }}>
                    <Nav.Link>
                        <Link to="/main-menu" style= {{color: 'white'}}>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/login" style= {{color: 'white'}}>Log In</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/" style= {{color: 'white'}}>Sign Up</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar