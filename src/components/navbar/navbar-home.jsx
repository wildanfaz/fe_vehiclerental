import React, { useState } from "react";
import "./style.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";

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
          <Link to="/vehicles" style={{ textDecoration: "none" }}>
            <Nav.Link className={props.vehicles ? "choosen" : ""}>
              Vehicle Type
            </Nav.Link>
          </Link>
          <Link to="/histories" style={{ textDecoration: "none" }}>
            <Nav.Link className={props.histories ? "choosen" : ""}>
              History
            </Nav.Link>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Nav.Link
              className={props.about ? "choosen" : ""}
              style={{ marginRight: "20px" }}
            >
              About
            </Nav.Link>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Nav.Link
              onMouseEnter={() => {
                setLogin(true);
              }}
              onMouseLeave={() => {
                setLogin(false);
              }}
              className={login ? "btnNav onMouse" : "btnNav"}
              style={{
                paddingLeft: "5vh",
                paddingRight: "5vh",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              Login
            </Nav.Link>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Nav.Link
              href="/register"
              onMouseEnter={() => {
                setRegister(true);
              }}
              onMouseLeave={() => {
                setRegister(false);
              }}
              className={register ? "btnNav onMouse" : "btnNav"}
              style={{
                paddingLeft: "4vh",
                paddingRight: "4vh",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              Register
            </Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
