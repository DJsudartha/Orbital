import React from 'react';
import { Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const GameMenu = () => {
  return (
    <div>
      <Navbar bg="info" data-bs-theme="dark" style={{ height: '100px' }}>
        <Container fluid style={{ backgroundColor: 'transparent' }}>
            <Nav className="me-auto" style={{ backgroundColor: 'transparent' }}>
                <Nav.Link>
                    <Link to="/main-menu" style= {{color: 'white'}}>Back to Main Menu</Link>
                </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <Container fluid className="d-flex flex-column" style={{ height: 'calc(100vh - 100px)' }}>
        <Col className="d-flex align-items-center justify-content-center" style={{ flex: 1 }}>
          <Link to="/game-easy">
            <Button variant="info" size="lg" style={{ color: 'white' }}>
              Easy
            </Button>
          </Link>
        </Col>
        <Col className="d-flex align-items-center justify-content-center" style={{ flex: 1 }}>
          <Link to="/game-medium">
            <Button variant="info" size="lg" style={{ color: 'white' }}>
              Medium
            </Button>
          </Link>
        </Col>
        <Col className="d-flex align-items-center justify-content-center" style={{ flex: 1 }}>
          <Link to="/game-hard">
            <Button variant="info" size="lg" style={{ color: 'white' }}>
              Hard
            </Button>
          </Link>
        </Col>
      </Container>
    </div>
  );
};

export default GameMenu;
