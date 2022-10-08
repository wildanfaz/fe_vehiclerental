import React from "react";
import "./style.scss";
import Button from "react-bootstrap/Button";

function ButtonHome() {
  return (
    <Button variant="warning" className="btnhome">
      <b>Explore</b>
    </Button>
  );
}

export default ButtonHome;