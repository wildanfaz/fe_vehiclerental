import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../components/navbar/navbar-home";
import Footer from "../../components/footer/footer";
import useApi from "../../helpers/api";
import { useLocation } from "react-router-dom";
import Cards from "../../components/cards/cards-home";
import { Row } from "react-bootstrap";

function Type() {
  const [vehicleType, setVehicleType] = useState([]);
  const api = useApi();
  const location = useLocation();

  const SortType = async () => {
    try {
      const { data } = await api.req(`${location.pathname}`);
      setVehicleType(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    SortType();
  });

  return (
    <div>
      <Navbar />
      <h1
        className="h1Lower pfdisplay"
        style={{ fontWeight: 600, letterSpacing: "1px" }}
      >
        {location.pathname.replace("/vehicles/type/", "")}
      </h1>
      <Row xs={1} sm={2} md={4} className="rowCards">
        {vehicleType.data?.map((v, k) => {
          return (
            <Cards
              key={k}
              id={v.vehicle_id}
              img={v.image}
              name={v.vehicle_name}
              location={v.location}
            />
          );
        })}
      </Row>
      <Footer />
    </div>
  );
}

export default Type;
