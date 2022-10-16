import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Delete(props) {
  const response = () => {
    if (props.res) {
      return <p>Success Delete Data</p>;
    }
  };

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
          <Form.Control
            type="text"
            placeholder="ex : 3"
            onChange={(e) => props.vid(e.target.value)}
          />
        </Col>

        <Col>
          <Button
            variant="outline-dark"
            size="lg"
            style={{ width: "14vw", textAlign: "center", fontSize: "2vw" }}
            onClick={props.delete}
          >
            Delete
          </Button>
        </Col>
        {response()}
      </Form.Group>
    </Container>
  );
}

export default Delete;
