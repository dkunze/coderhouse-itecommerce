import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to='/'>
          <Navbar.Brand><img src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png" alt="ITEcommerce" width="100" /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#link">Home</Nav.Link>
            </Link>

            <Link to="/categories/computers">
              <Nav.Link href="#link">Computers</Nav.Link>
            </Link>

            <Link to="/categories/notebooks">
              <Nav.Link href="#link">Notebooks</Nav.Link>
            </Link>

            <Link to="/categories/printers">
              <Nav.Link href="#link">Printers</Nav.Link>
            </Link>

            <Link to="/categories/tablets">
              <Nav.Link href="#link">Tablets</Nav.Link>
            </Link>

            <Link to="/cart">
              <CartWidget />
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
