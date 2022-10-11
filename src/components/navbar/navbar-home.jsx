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
          <Link
            to="/"
            style={{ textDecoration: "none", marginLeft: "20px" }}
            className={props.home ? "choosen" : "unChoosen"}
          >
            Home
          </Link>
          <Link
            to="/vehicles"
            style={{ textDecoration: "none" }}
            className={props.vehicles ? "choosen" : "unChoosen"}
          >
            Vehicle Type
          </Link>
          <Link
            to="/histories"
            style={{ textDecoration: "none" }}
            className={props.histories ? "choosen" : "unChoosen"}
          >
            History
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            className={props.about ? "choosen" : "unChoosen"}
          >
            About
          </Link>
          <Link
            to="/login"
            style={{ textDecoration: "none", marginRight: "-25px" }}
          >
            <div
              onMouseEnter={() => {
                setLogin(true);
              }}
              onMouseLeave={() => {
                setLogin(false);
              }}
              className={login ? "btnNav onMouse hvr" : "btnNav hvr"}
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
                marginTop: "13px",
                marginBottom: "5px",
                textAlign: "center",
                width: "120px",
              }}
            >
              Login
            </div>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <div
              onMouseEnter={() => {
                setRegister(true);
              }}
              onMouseLeave={() => {
                setRegister(false);
              }}
              className={register ? "btnNav onMouse hvr" : "btnNav hvr"}
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
                marginTop: "13px",
                marginBottom: "5px",
                textAlign: "center",
                width: "120px",
              }}
            >
              Register
            </div>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
