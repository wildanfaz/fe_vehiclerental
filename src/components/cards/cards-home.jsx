import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function CardsHome(props) {
  return (
    <Col className="cols">
      <Link to={`/vehicles/detail/${props.id}`}>
        <Card className="crd">
          <Card.Img variant="top" src={props.img} className="imgCss1" />
          <div className="title">
            <div style={{ marginTop: "26px" }}>
              <h5
                style={{
                  marginTop: "20%",
                  marginBottom: "0%",
                  fontSize: "11px",
                  fontWeight: "600",
                }}
                className="nunito"
              >
                {props.name}
              </h5>
              <h6
                style={{
                  color: "#80918E",
                  fontSize: "10px",
                  marginTop: "0%",
                }}
                className="nunito"
              >
                {props.location}
              </h6>
            </div>
          </div>
        </Card>
      </Link>
    </Col>
  );
}

export default CardsHome;
