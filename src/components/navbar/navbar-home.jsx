import React, { useState } from "react";
import "./style.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./img/logo.png";

function HomeNavbar(props) {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <img src={logo} alt="logo.jpg" />
        <Nav className="ms-auto">
          <Nav.Link href="/" className={props.home ? "choosen" : ""}>
            Home
          </Nav.Link>
          <Nav.Link
            href="/vehicles"
            className={props.vehicles ? "choosen" : ""}
          >
            Vehicle Type
          </Nav.Link>
          <Nav.Link
            href="/histories"
            className={props.histories ? "choosen" : ""}
          >
            History
          </Nav.Link>
          <Nav.Link
            href="/about"
            className={props.about ? "choosen" : ""}
            style={{ marginRight: "20px" }}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="/login"
            onMouseEnter={() => {
              setLogin(true);
            }}
            onMouseLeave={() => {
              setLogin(false);
            }}
            className={login ? "btnNav onMouse" : "btnNav"}
            style={{ paddingLeft: "5vh", paddingRight: "5vh" }}
          >
            Login
          </Nav.Link>
          <Nav.Link
            href="/register"
            onMouseEnter={() => {
              setRegister(true);
            }}
            onMouseLeave={() => {
              setRegister(false);
            }}
            className={register ? "btnNav onMouse" : "btnNav"}
            style={{ paddingLeft: "4vh", paddingRight: "4vh" }}
          >
            Register
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
