import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Update() {
  return (
    <Container>
      <Form.Group
        as={Row}
        className="mb-3"
        style={{ gap: "15px", marginLeft: "3vw" }}
      >
        <Form.Label column sm="2">
          Vehicle Id
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text" placeholder="ex : 3" />
        </Col>

        <Form.Label column sm="2">
          Vehicle Name
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text" placeholder="ex : Kawasaki Ninja" />
        </Col>

        <Form.Label column sm="2">
          Location
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text" placeholder="ex : Jakarta" />
        </Col>

        <Form.Label column sm="2">
          Description
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text" placeholder="ex : Ninja" />
        </Col>

        <Form.Label column sm="2">
          Price
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text" placeholder="ex : 1000000" />
        </Col>

        <Form.Label column sm="2">
          Status
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="ex : Available / Not Available"
          />
        </Col>

        <Form.Label column sm="2">
          Stock
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text" placeholder="ex : 3" />
        </Col>

        <Form.Label column sm="2">
          Category
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="ex : Cars / Motorbike / Bike"
          />
        </Col>

        <Form.Label column sm="2">
          Rating
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text" placeholder="ex : 4.8" />
        </Col>

        <Form.Label column sm="2">
          Image
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text" placeholder="ex : https://image.link" />
        </Col>

        <Col>
          <Button variant="outline-dark" size="lg" style={{ width: "14vw" }}>
            Update
          </Button>
        </Col>
      </Form.Group>
    </Container>
  );
}

export default Update;
