import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavFooter = () => {
    return (
        <Nav className='justify-content-center py-3'>
            <Nav.Item className='px-5'>
                <Link to="/MusicStarter/Journey">
                    <i className="bi bi-plus-square-fill h1" />
                </Link>
            </Nav.Item>
            <Nav.Item className='px-5'>
                <Link to={-1 /*Need to add a prompt */}>
                    <i className="bi bi-arrow-left-square-fill h1" />
                </Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavFooter