import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../components/navbar/navbar-home";
import Footer from "../../components/footer/footer";
import useApi from "../../helpers/api";
import { useLocation } from "react-router-dom";
import Cards from "../../components/cards/cards-home";
import { Row } from "react-bootstrap";

function Location() {
  const [vehicleLocation, setVehicleLocation] = useState([]);
  const api = useApi();
  const location = useLocation();

  const SortLocation = async () => {
    try {
      const { data } = await api.req(`${location.pathname}`);
      setVehicleLocation(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    SortLocation();
  });

  return (
    <div>
      <Navbar />
      <h1
        className="h1Lower pfdisplay"
        style={{ fontWeight: 600, letterSpacing: "1px" }}
      >
        {location.pathname.replace("/vehicles/location/", "")}
      </h1>
      <Row xs={1} sm={2} md={4} className="rowCards">
        {vehicleLocation.data?.map((v, k) => {
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

export default Location;
