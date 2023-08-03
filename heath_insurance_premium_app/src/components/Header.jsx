import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary ">
      <Container className="justify-content-between">
        <Navbar.Brand href="#home">Get Premium</Navbar.Brand>
        <Link variant="link" to="cart">
          Cart
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
