import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'

export default function NavigationBar() {
    return (
        <Navbar bg="light" expand="sm">
            <Navbar.Brand href="/">Kenan Dinkelmann</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/choreography">Choreography</Nav.Link>
                    <Nav.Link href="/workshops">Workshops</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
