import React, { useState } from "react";
import "./style.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import eclEmail from "./img/ecl-email.png";
import email from "./img/email.png";
import tes from "./img/naofumi-wp-flare.jpg";

function HomeNavbar(props) {
  const { isAuth } = useSelector((state) => state.users);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <Navbar bg="light" variant="light" expand="md">
      <Container>
        <img src={logo} alt="logo.jpg" />
        <Nav className="ms-auto">
          <Link
            to="/"
            style={{ textDecoration: "none", marginLeft: "10px" }}
            className={props.home ? "choosen nunito" : "unChoosen nunito"}
          >
            Home
          </Link>
          <Link
            to="/vehicles"
            style={{ textDecoration: "none", marginLeft: "10px" }}
            className={props.vehicles ? "choosen nunito" : "unChoosen nunito"}
          >
            Vehicle Type
          </Link>
          <Link
            to="/histories"
            style={{ textDecoration: "none", marginLeft: "10px" }}
            className={props.histories ? "choosen nunito" : "unChoosen nunito"}
          >
            History
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", marginLeft: "10px" }}
            className={props.about ? "choosen nunito" : "unChoosen nunito"}
          >
            About
          </Link>
          {isAuth ? (
            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundImage: `url(${email})`,
                  backgroundSize: "100% 100%",
                  width: "30px",
                  height: "28px",
                  marginTop: "8px",
                  marginRight: "30px",
                  marginLeft: "9vw",
                }}
              >
                <img src={eclEmail} alt="ecl-email.png" className="eclEmail" />
                <p
                  className="eclEmail rubik"
                  style={{
                    marginTop: "-29px",
                    marginLeft: "-4px",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  1
                </p>
              </div>
              <div>
                <img src={tes} alt="profile.png" className="circle" />
              </div>
            </div>
          ) : (
            <div style={{ display: "flex" }}>
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
                  className={
                    login ? "btnNav onMouse hvr nunito" : "btnNav hvr nunito"
                  }
                  style={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    marginTop: "11px",
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
                  className={
                    register ? "btnNav onMouse hvr nunito" : "btnNav hvr nunito"
                  }
                  style={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    marginTop: "11px",
                    marginBottom: "5px",
                    textAlign: "center",
                    width: "120px",
                  }}
                >
                  Register
                </div>
              </Link>
            </div>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
