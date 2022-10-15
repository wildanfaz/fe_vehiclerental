import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Delete() {
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

        <Col>
          <Button variant="outline-dark" size="lg" style={{ width: "14vw" }}>
            Delete
          </Button>
        </Col>
      </Form.Group>
    </Container>
  );
}

export default Delete;
