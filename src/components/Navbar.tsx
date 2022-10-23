import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav.Link href="#pricing">Nasa</Nav.Link>
                    <Navbar.Brand style={{ cursor: 'pointer' }}>Blog</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default MyNavbar;
