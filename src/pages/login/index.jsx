import React from "react";
import "./style.css";
import FormLogin from "../../components/forms/form-login";
import Button from "react-bootstrap/Button";
import eclipse from "./img/eclipse.png";
import line from "./img/line.png";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="layer" />
      <h1 className="textcss">
        Le'ts Explore
        <br />
        The World
      </h1>
      <div>
        <img src={eclipse} alt="eclipse.png" className="ecl1" />
        <img src={line} alt="eclipse.png" className="line1" />
        <img src={eclipse} alt="eclipse.png" className="ecl2" />
      </div>
      <h4 className="h4css">Don't have account?</h4>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <Button variant="secondary" className="logincss">
          Sign Up
        </Button>
      </Link>
      <FormLogin />;
      <Footer />
    </div>
  );
}

export default Login;
