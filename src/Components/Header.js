import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar id="nav">
        <Navbar.Brand id="navText">Weather</Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
