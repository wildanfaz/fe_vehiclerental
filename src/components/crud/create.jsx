import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Create(props) {
  const data = { ...props.data };
  const input = (e) => {
    e.preventDefault();
    if (e.target.name === "image") {
      data[e.target.name] = e.target.files[0];
    } else {
      data[e.target.name] = e.target.value;
    }
    props.setData(data);
  };

  const response = () => {
    if (props.res) {
      return <p>Success Add Data</p>;
    }
  };

  const sendData = (e) => {
    e.preventDefault();
    props.add();
  };

  return (
    <Container>
      <Form.Group
        as={Row}
        className="mb-3"
        style={{ gap: "15px", marginLeft: "3vw" }}
      >
        <Form.Label column sm="2">
          Vehicle Name
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="ex : Kawasaki Ninja"
            name="vehiclename"
            onChange={input}
          />
        </Col>

        <Form.Label column sm="2">
          Location
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="ex : Jakarta"
            name="location"
            onChange={input}
          />
        </Col>

        <Form.Label column sm="2">
          Description
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="ex : Ninja"
            name="description"
            onChange={input}
          />
        </Col>

        <Form.Label column sm="2">
          Price
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="ex : 1000000"
            name="price"
            onChange={input}
          />
        </Col>

        <Form.Label column sm="2">
          Status
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="ex : Available / Not Available"
            name="status"
            onChange={input}
          />
        </Col>

        <Form.Label column sm="2">
          Stock
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="ex : 3"
            name="stock"
            onChange={input}
          />
        </Col>

        <Form.Label column sm="2">
          Category
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="ex : Cars / Motorbike / Bike"
            name="category"
            onChange={input}
          />
        </Col>

        <Form.Label column sm="2">
          Rating
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="ex : 4.8"
            name="rating"
            onChange={input}
          />
        </Col>

        <Form.Label column sm="2">
          Image
        </Form.Label>
        <Col sm="9">
          <Form.Control type="file" name="image" onChange={input} />
        </Col>

        <Col>
          <Button
            variant="outline-dark"
            size="lg"
            style={{ width: "14vw", textAlign: "center", fontSize: "2vw" }}
            onClick={sendData}
          >
            Add
          </Button>
        </Col>

        {response()}
      </Form.Group>
    </Container>
  );
}

export default Create;
