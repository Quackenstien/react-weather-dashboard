import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="dark">
        <Navbar.Brand className="text-white">Weather Application</Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
