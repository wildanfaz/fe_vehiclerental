/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../components/navbar/navbar-home";
import Footer from "../../components/footer/footer";
import Cards from "../../components/cards/cards-home";
import searchLogo from "./img/search.png";
import Row from "react-bootstrap/Row";
import axios from "axios";
import vwall from "./img/vwall.png";
import { useDispatch, useSelector } from "react-redux";
import { clickView } from "../../store/reducer/viewAll";

function Vehicles() {
  const { isView } = useSelector((state) => state.view);
  const [allVehicle, setAllVehicle] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [cars, setCars] = useState([]);
  const [motorbike, setMotorbike] = useState([]);
  const [bike, setBike] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  //   const [click, setClick] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const dispatch = useDispatch();

  const getAllVehicle = async () => {
    try {
      const url = "/vehicles";
      const { data } = await axios.get(url);
      setAllVehicle(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVehicles = async () => {
    try {
      const url = "/vehicles/popular/0";
      const { data } = await axios.get(url);
      setVehicles(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCars = async () => {
    try {
      const url = "/vehicles/cars";
      const { data } = await axios.get(url);
      setCars(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMotorbike = async () => {
    try {
      const url = "/vehicles/motorbike";
      const { data } = await axios.get(url);
      setMotorbike(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBike = async () => {
    try {
      const url = "/vehicles/bike";
      const { data } = await axios.get(url);
      setBike(data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchVehicles = async () => {
    try {
      this.clickTrue();
      const url2 = `/vehicles/search`;

      const res = await axios.get(url2, {
        params: { vehicle_name: searchQuery },
      });

      const result = await res.data;

      setSearchResult(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllVehicle();
    getVehicles();
    getCars();
    getMotorbike();
    getBike();
  });

  //   const clickTrue = () => {
  //     setClick(true);
  //   };

  const onClickView = () => {
    setViewAll(true);
    dispatch(clickView(true));
  };

  const setQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (isView) {
      setViewAll(true);
    } else {
      setViewAll(false);
    }
  }, [isView]);

  const card = () => {
    if (searchResult) {
      return (
        <div>
          <Row
            xs={1}
            sm={2}
            md={4}
            style={{ marginLeft: "7%", marginTop: "4%" }}
          >
            {searchResult.data?.map((v, k) => {
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
        </div>
      );
    } else if (viewAll) {
      return (
        <div>
          <Row
            xs={1}
            sm={2}
            md={4}
            style={{ marginLeft: "7%", marginTop: "4%" }}
          >
            {allVehicle.data?.map((v, k) => {
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
        </div>
      );
    } else {
      return (
        <div>
          <div style={{ display: "flex" }}>
            <h1 className="h1Lower pfdisplay" style={{ fontWeight: "600" }}>
              Popular in Town
            </h1>
            <img
              src={vwall}
              alt="vwall.png"
              className="vwall hvr-grow-shadow"
              onClick={onClickView}
            />
          </div>
          <Row
            xs={1}
            sm={2}
            md={4}
            style={{ marginLeft: "7%", marginTop: "3%" }}
          >
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

          <div style={{ display: "flex" }}>
            <h1 className="h1Lower pfdisplay" style={{ fontWeight: "600" }}>
              Cars
            </h1>
            <img
              src={vwall}
              alt="vwall.png"
              className="vwall hvr-grow-shadow"
              onClick={onClickView}
            />
          </div>
          <Row
            xs={1}
            sm={2}
            md={4}
            style={{ marginLeft: "7%", marginTop: "3%" }}
          >
            {cars.data?.map((v, k) => {
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
          <div style={{ display: "flex" }}>
            <h1 className="h1Lower pfdisplay" style={{ fontWeight: "600" }}>
              Motorbike
            </h1>
            <img
              src={vwall}
              alt="vwall.png"
              className="vwall hvr-grow-shadow"
              onClick={onClickView}
            />
          </div>
          <Row
            xs={1}
            sm={2}
            md={4}
            style={{ marginLeft: "7%", marginTop: "3%" }}
          >
            {motorbike.data?.map((v, k) => {
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
          <div style={{ display: "flex" }}>
            <h1 className="h1Lower pfdisplay" style={{ fontWeight: "600" }}>
              Bike
            </h1>
            <img
              src={vwall}
              alt="vwall.png"
              className="vwall hvr-grow-shadow"
              onClick={onClickView}
            />
          </div>

          <Row
            xs={1}
            sm={2}
            md={4}
            style={{ marginLeft: "7%", marginTop: "3%" }}
          >
            {bike.data?.map((v, k) => {
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
        </div>
      );
    }
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar vehicles="true" />;
      <form style={{ display: "flex" }}>
        <input
          type="text"
          onChange={setQuery}
          style={{
            marginLeft: "8%",
            width: "84%",
            fontSize: "25px",
          }}
        />
        <input
          type="button"
          onClick={searchVehicles}
          style={{
            backgroundImage: `url(${searchLogo})`,
            backgroundColor: "transparent",
            backgroundSize: "100% 100%",
            border: "none",
            width: "24px",
            height: "24px",
            right: "10%",
            marginTop: "8px",
            position: "absolute",
            backgroundRepeat: "no-repeat",
          }}
        />
      </form>
      {card()}
      <Footer />
    </div>
  );
}

export default Vehicles;
