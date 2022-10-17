import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Read(props) {
  const up = () => {
    props.setvid(props.vid);
    props.update();
  };

  const de = () => {
    props.setvid(props.vid);
    props.delete();
  };

  return (
    <Container style={{ marginBottom: "5vh" }}>
      <Row className="imgLink">
        <h5 style={{ textAlign: "center" }}>Link Image</h5>
        <p style={{ textAlign: "center", fontSize: "1vw" }}>{props.image}</p>
      </Row>
      <Row className="get1">
        <Col>
          <div
            className="colvh"
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
          <div className="vehicleID">Vehicle Id : {props.vid}</div>
        </Col>
        <Col className="hg">
          <div>
            <h4 className="fonts" style={{ width: "12vmax" }}>
              Vehicle Name
            </h4>
            <p className="pfont">{props.vname}</p>
          </div>
          <div>
            <h4 className="fonts">Location</h4>
            <p className="pfont">{props.location}</p>
          </div>
        </Col>
        <Col className="hg">
          <div>
            <h4 className="fonts">Status</h4>
            <p className="pfont">{props.status}</p>
          </div>
          <div>
            <h4 className="fonts">Type</h4>
            <p className="pfont">{props.type}</p>
          </div>
        </Col>
        <Col className="cssfl">
          <div className="hg2">
            <h4 className="pricefont">Price</h4>
            <p className="pfont">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              })
                .format(props.price)
                .replace(/Rp/g, "Rp.")
                .replace(/,00/g, "")}
              /day
            </p>
          </div>
          <div>
            <h4 className="fonts">Stock</h4>
            <p className="pfont">{props.stock}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="hg" onClick={up}>
          <div className="updateDelete">Update</div>
        </Col>
        <Col className="hg" onClick={de}>
          <div className="updateDelete">Delete</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Read;
