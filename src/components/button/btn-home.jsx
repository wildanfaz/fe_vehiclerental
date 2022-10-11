import React from "react";
import "./style.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ButtonHome() {
  return (
    <Link to="/vehicles" style={{ textDecoration: "none" }}>
      <Button variant="warning" className="btnhome">
        <b>Explore</b>
      </Button>
    </Link>
  );
}

export default ButtonHome;
