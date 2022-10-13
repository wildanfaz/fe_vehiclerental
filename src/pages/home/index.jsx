/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../../components/navbar/navbar-home";
import Dropdowns from "../../components/dropdowns/drp-home";
import Button from "../../components/button/btn-home";
import Cards from "../../components/cards/cards-home";
import testi from "./img/testi.png";
import Footer from "../../components/footer/footer";
import Row from "react-bootstrap/Row";
import axios from "axios";
import smCircle from "./img/sm-circle.png";
import vwall from "./img/vwall.png";
import { useNavigate } from "react-router-dom";
import { clickView } from "../../store/reducer/viewAll";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  const getVehicles = async () => {
    try {
      const url = "/vehicles/popular/0";
      const { data } = await axios.get(url);
      setVehicles(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getVehicles();
  });

  useEffect(() => {
    if (viewAll) {
      navigate("/vehicles");
      dispatch(clickView(true));
    }
  }, [viewAll]);

  const onClickView = () => {
    setViewAll(true);
  };

  return (
    <main style={{ overflowX: "hidden" }}>
      <Navbar home="true" />
      <section className="bg-home">
        <h1 className="h1Upper pfdisplay">
          Explore and <br />
          Travel
        </h1>
        <h5 className="h5css nunito">Vehicle Finder</h5>
        <div className="rectangle" />
        <div className="flex">
          <Dropdowns
            text="Location"
            list1="Jakarta"
            list2="Yogyakarta"
            list3="Malang"
          />
          <Dropdowns
            text="Type"
            list1="Car"
            list2="Motorcycle"
            list3="Bicycle"
          />
          <Dropdowns text="Payment" list1="PayPal" list2="OVO" list3="GoPay" />
          <Dropdowns
            text="Date"
            list1="10 - 20 October"
            list2="21 - 31 October"
            list3="1 - 10 November"
          />
        </div>
        <div>
          <Button />
        </div>
      </section>

      <section>
        <div style={{ display: "flex" }}>
          <h1
            className="h1Lower pfdisplay"
            style={{ fontWeight: 600, letterSpacing: "1px" }}
          >
            Popular in Town
          </h1>
          <img
            src={vwall}
            alt="vwall.png"
            className="vwall hvr-grow-shadow"
            onClick={onClickView}
          />
        </div>
        <Row xs={1} sm={2} md={4} className="rowCards">
          {vehicles.data?.map((v, k) => {
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
        <img
          src={smCircle}
          alt="sm-circle.png"
          style={{ position: "absolute", right: "50%", marginTop: "10px" }}
        />
      </section>

      <section className="testi">
        <img src={testi} alt="testi.png" className="testiImg" />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}

export default Home;
