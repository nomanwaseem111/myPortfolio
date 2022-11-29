import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className="logo fs-2">Noman Waseem</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink to="/" className="text-white link" >Home</NavLink>
                        <NavLink to="/about" className="text-white link">About</NavLink>
                        <NavLink to="/project" className="text-white link">Project</NavLink>
                        <NavLink to="/contact" className="text-white link">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
