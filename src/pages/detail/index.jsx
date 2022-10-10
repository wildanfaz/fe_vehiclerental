import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar-home";
import leftArrow from "./img/left-arrow.png";
import Footer from "../../components/footer/footer";

function DetailVehicle() {
  const path = useLocation();
  const [detail, setDetail] = useState([]);
  const [cap, setCap] = useState("");

  const getDetail = async () => {
    const { data } = await axios.get(`${path.pathname}`);
    setDetail(data);
  };

  const capacity = () => {
    if (detail.data?.category === "Cars") {
      setCap("2");
    } else {
      setCap("1");
    }
  };

  useEffect(() => {
    getDetail();
    capacity();
  });
  return (
    <div>
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
          marginLeft: "6%",
          marginTop: "4%",
          marginBottom: "4%",
        }}
      >
        <img
          src={detail.data?.image}
          alt={detail.data?.image}
          style={{ height: "60vh", width: "50%", borderRadius: "10px" }}
        />
        <div style={{ marginLeft: "10%", marginTop: "-1%" }}>
          <h1>{detail.data?.vehicle_name}</h1>
          <p style={{ fontSize: "40px" }}>{detail.data?.location}</p>
          <p style={{ color: "#087E0D", fontWeight: "bold" }}>
            {detail.data?.status}
          </p>
          <p style={{ color: "#9B0A0A" }}>No prepayment</p>
          <p>Capacity: {cap} person</p>
          <p>Type: {detail.data?.category}</p>
          <p>Reservation before 2 PM</p>
          <h5>
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
      <Footer />
    </div>
  );
}

export default DetailVehicle;
