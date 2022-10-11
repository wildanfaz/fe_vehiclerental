import React, { Component } from "react";
import "./style.css";
import Navbar from "../../components/navbar/navbar-home";
import Footer from "../../components/footer/footer";
import Cards from "../../components/cards/cards-home";
import searchLogo from "./img/search.png";
import Row from "react-bootstrap/Row";
import axios from "axios";
import vwall from "./img/vwall.png";

export class GetVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allVehicle: [],
      vehicles: [],
      cars: [],
      motorbike: [],
      bike: [],
      searchResult: null,
      searchQuery: "",
      click: false,
      viewAll: false,
    };
  }

  getAllVehicle = async () => {
    try {
      const url = "/vehicles";
      const { data } = await axios.get(url);
      this.setState({ allVehicle: data });
    } catch (error) {
      alert(error);
    }
  };

  getVehicles = async () => {
    try {
      const url = "/vehicles/popular/0";
      const { data } = await axios.get(url);
      this.setState({ vehicles: data });
    } catch (error) {
      alert(error);
    }
  };

  getCars = async () => {
    try {
      const url = "/vehicles/cars";
      const { data } = await axios.get(url);
      this.setState({ cars: data });
    } catch (error) {
      alert(error);
    }
  };

  getMotorbike = async () => {
    try {
      const url = "/vehicles/motorbike";
      const { data } = await axios.get(url);
      this.setState({ motorbike: data });
    } catch (error) {
      alert(error);
    }
  };

  getBike = async () => {
    try {
      const url = "/vehicles/bike";
      const { data } = await axios.get(url);
      this.setState({ bike: data });
    } catch (error) {
      alert(error);
    }
  };

  searchVehicles = async () => {
    try {
      this.clickTrue();
      const url2 = `/vehicles/search`;

      const res = await axios.get(url2, {
        params: { vehicle_name: this.state.searchQuery },
      });

      const result = await res.data;

      this.setState({ searchResult: result });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getAllVehicle();
    this.getVehicles();
    this.getCars();
    this.getMotorbike();
    this.getBike();
  }

  clickTrue = () => {
    this.setState({ click: true });
  };

  clickView = () => {
    this.setState({ viewAll: true });
  };

  setQuery = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  card = () => {
    if (this.state.searchResult) {
      return (
        <div>
          <Row
            xs={1}
            sm={2}
            md={4}
            style={{ marginLeft: "7%", marginTop: "4%" }}
          >
            {this.state.searchResult.data?.map((v, k) => {
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
    } else if (this.state.viewAll) {
      return (
        <div>
          <Row
            xs={1}
            sm={2}
            md={4}
            style={{ marginLeft: "7%", marginTop: "4%" }}
          >
            {this.state.allVehicle.data?.map((v, k) => {
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
            <h1 className="h1Lower">Popular in Town</h1>
            <img
              src={vwall}
              alt="vwall.png"
              className="vwall"
              onClick={this.clickView}
            />
          </div>
          <Row
            xs={1}
            sm={2}
            md={4}
            style={{ marginLeft: "7%", marginTop: "4%" }}
          >
            {this.state.vehicles.data?.map((v, k) => {
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

          <h1 className="h1Lower">Cars</h1>
          <Row
            xs={1}
            sm={2}
            md={4}
            style={{ marginLeft: "7%", marginTop: "4%" }}
          >
            {this.state.cars.data?.map((v, k) => {
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

          <h1 className="h1Lower">Motorbike</h1>
          <Row
            xs={1}
            sm={2}
            md={4}
            style={{ marginLeft: "7%", marginTop: "4%" }}
          >
            {this.state.motorbike.data?.map((v, k) => {
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

          <h1 className="h1Lower">Bike</h1>
          <Row
            xs={1}
            sm={2}
            md={4}
            style={{ marginLeft: "7%", marginTop: "4%" }}
          >
            {this.state.bike.data?.map((v, k) => {
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

  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <Navbar vehicles="true" />;
        <form style={{ display: "flex" }}>
          <input
            type="text"
            onChange={this.setQuery}
            style={{
              marginLeft: "8%",
              width: "80%",
              fontSize: "25px",
            }}
          />
          <input
            type="button"
            onClick={this.searchVehicles}
            style={{
              backgroundImage: `url(${searchLogo})`,
              backgroundColor: "transparent",
              backgroundSize: "100% 100%",
              border: "none",
              width: "24px",
              height: "24px",
              right: "14%",
              marginTop: "8px",
              position: "absolute",
              backgroundRepeat: "no-repeat",
            }}
          />
        </form>
        {this.card()}
        <Footer />
      </div>
    );
  }
}

export default GetVehicles;
