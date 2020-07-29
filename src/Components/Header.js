import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="dark" id="Nav">
        <Navbar.Brand id="NavText">Weather Application</Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
