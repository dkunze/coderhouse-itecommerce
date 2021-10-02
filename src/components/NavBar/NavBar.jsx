import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../services/getFirebase';

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const dbQuery = getFirestore();
    dbQuery
      .collection('categories')
      .orderBy('position', 'asc')
      .get()
      .then((res) => {
        setCategories(
          res.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
      })
      .catch((error) => console.log(error));
  }, []);  

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png"
              alt="ITEcommerce"
              width="100"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              categories &&
              categories.map( (item, index)  => {                
                return (<Link to={item.url} key={index}>
                  <Nav.Link href="#link">{item.name}</Nav.Link>
                </Link>)
              })
            }
            <Link to="/cart">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
