import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="info" data-bs-theme="dark" style={{height:'100px'}}>
            <Container fluid style={{ backgroundColor: 'transparent' }}>
                <Navbar.Brand href="/"
                    style={{ backgroundColor: 'transparent' }}>ReVerb</Navbar.Brand>
                <Nav className="me-auto" style={{ backgroundColor: 'transparent' }}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">Log In</Nav.Link>
                    <Nav.Link href="#pricing">Sign Up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar