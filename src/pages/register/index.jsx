import React from "react";
import "./style.scss";
import FormRegister from "../../components/forms/form-register";
import Button from "react-bootstrap/Button";
import eclipse from "./img/eclipse.png";
import line from "./img/line.png";
import Footer from "../../components/footer/footer";
import bg from "./img/bg-auth.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div style={{ overflowX: "hidden", backgroundImage: { bg } }}>
      <div className="layer" />
      <div style={{ display: "flex" }}>
        <h1 className="textcss">
          Le'ts Explore
          <br />
          The World
        </h1>
        <div>
          <img src={eclipse} alt="eclipse.png" className="ecl1" />
          <img src={line} alt="line.png" className="line1" />
          <img src={eclipse} alt="eclipse.png" className="ecl2" />
        </div>
        <h4 className="h4css">Don't have account?</h4>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="secondary" className="logincss">
            Login
          </Button>
        </Link>
        <FormRegister />;
      </div>
      <Footer />
    </div>
  );
}

export default Register;
