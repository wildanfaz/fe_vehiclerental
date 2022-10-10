import React, { Component } from "react";
import Navbar from "../../components/navbar/navbar-home";
import Footer from "../../components/footer/footer";
import Cards from "../../components/cards/cards-home";
import searchLogo from "./img/search.png";
import Row from "react-bootstrap/Row";
import axios from "axios";

export class GetVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      searchResult: null,
      searchQuery: "",
      click: false,
    };
  }

  getVehicles = async () => {
    try {
      const url = "/vehicles/popular/0";
      const { data } = await axios.get(url);
      this.setState({ vehicles: data });
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
    this.getVehicles();
  }

  clickTrue = () => {
    this.setState({ click: true });
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
    } else {
      return (
        <div>
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
