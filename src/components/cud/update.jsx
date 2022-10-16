/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Update(props) {
  const data = { ...props.data };
  const input = (e) => {
    if (e.target.name === "price" || e.target.name === "stock") {
      data[e.target.name] = parseInt(e.target.value);
    } else if (e.target.name === "rating") {
      data[e.target.name] = parseFloat(e.target.value);
    } else {
      data[e.target.name] = e.target.value;
    }
    props.setData(data);
  };

  function response() {
    if (props.res) {
      return <p>Success Update Data</p>;
    }
  }

  const sendData = async (e) => {
    e.preventDefault();
    console.log(props.data);
    props.update();
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

        <Form.Label column sm="2">
          Vehicle Name
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="ex : Kawasaki Ninja"
            name="vehicle_name"
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
          <Form.Control
            type="text"
            placeholder="ex : https://image.link"
            name="image"
            onChange={input}
          />
        </Col>

        <Col>
          <Button
            variant="outline-dark"
            size="lg"
            style={{ width: "14vw", textAlign: "center", fontSize: "2vw" }}
            onClick={sendData}
          >
            Update
          </Button>
        </Col>

        {response()}
      </Form.Group>
    </Container>
  );
}

export default Update;
