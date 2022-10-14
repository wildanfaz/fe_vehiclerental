import axios from "axios";
import "./style.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar-home";
import leftArrow from "./img/left-arrow.png";
import Footer from "../../components/footer/footer";
import larrow from "./img/l-arrow.png";
import rarrow from "./img/r-arrow.png";
import plus from "./img/plus.png";
import min from "./img/min.png";
import emote from "./img/emote.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DetailVehicle() {
  const location = useLocation();
  const [detail, setDetail] = useState([]);
  const [cap, setCap] = useState("");
  const [num, setNum] = useState(0);

  const getDetail = async () => {
    try {
      const { data } = await axios.get(`${location.pathname}`);
      setDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  const capacity = () => {
    if (detail.data?.category === "Cars") {
      setCap("2");
    } else {
      setCap("1");
    }
  };

  const plusBtn = () => {
    setNum(num + 1);
  };

  const minBtn = () => {
    if (num <= 0) {
      setNum(0);
    } else {
      setNum(num - 1);
    }
  };

  useEffect(() => {
    getDetail();
    capacity();
  });
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar vehicles="true" />
      <div
        style={{ display: "inline-flex", marginLeft: "6%", marginTop: "4%" }}
      >
        <Link to="/vehicles">
          <img src={leftArrow} alt="left-arrow.png" style={{ width: "25px" }} />
        </Link>

        <h3 style={{ marginLeft: "40%" }}>Detail</h3>
      </div>

      <div
        style={{
          display: "flex",
          marginLeft: "6vw",
          marginTop: "4vh",
          marginBottom: "5vh",
        }}
      >
        <img
          src={detail.data?.image}
          alt={detail.data?.image}
          style={{ maxHeight: "60vh", width: "50%", borderRadius: "10px" }}
        />

        <div style={{ marginLeft: "10%", marginTop: "-1%" }}>
          <h1>{detail.data?.vehicle_name}</h1>
          <p style={{ fontSize: "40px", marginTop: "-10px" }}>
            {detail.data?.location}
          </p>
          <p style={{ color: "#087E0D", fontWeight: "bold" }}>
            {detail.data?.status}
          </p>
          <p style={{ color: "#9B0A0A", marginTop: "-12px" }}>No prepayment</p>
          <p>Capacity: {cap} person</p>
          <p>Type: {detail.data?.category}</p>
          <p>Reservation before 2 PM</p>
          <h5 className="price">
            {Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            })
              .format(detail.data?.price)
              .replace(/Rp/g, "Rp.")
              .replace(/,00/g, "")}
            /day
          </h5>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "0px",
          marginBottom: "30px",
        }}
      >
        <div className="divImage">
          <img src={larrow} alt="larrow.png" className="larrow" />
          <img
            src={detail.data?.image}
            alt={detail.data?.image}
            className="bottomImg"
          />
          <img
            src={detail.data?.image}
            alt={detail.data?.image}
            className="bottomImg"
          />
          <img src={rarrow} alt="rarrow.png" className="rarrow" />
        </div>

        <div>
          <Container style={{ marginTop: "40px", marginLeft: "2vw" }}>
            <Row style={{ gap: "55px" }}>
              <Col>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#FFCD61",
                    textAlign: "center",
                  }}
                  onClick={plusBtn}
                >
                  <img
                    src={plus}
                    alt="plus.png"
                    style={{ marginTop: "13px" }}
                  />
                </div>
              </Col>

              <Col>
                <h1
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  {num}
                </h1>
              </Col>

              <Col>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#CBCBD433",
                    textAlign: "center",
                  }}
                  onClick={minBtn}
                >
                  <img src={min} alt="min.png" style={{ marginTop: "20px" }} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div
        style={{ display: "flex", marginLeft: "80px", marginBottom: "50px" }}
      >
        <div>
          <button className="btn1detail">Chat Admin</button>
          <button className="btn2detail">Reservation</button>
          <button className="btn3detail">
            <img src={emote} alt="emote.png" style={{ marginRight: "10px" }} />
            Like
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailVehicle;
