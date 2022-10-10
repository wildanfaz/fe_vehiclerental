import React, { Component } from "react";
import "./style.css";
import Navbar from "../../components/navbar/navbar-home";
import Dropdowns from "../../components/dropdowns/drp-home";
import Button from "../../components/button/btn-home";
import Cards from "../../components/cards/cards-home";
// import star from "./img/star.png";
import testi from "./img/testi.png";
import Footer from "../../components/footer/footer";
import Row from "react-bootstrap/Row";
import axios from "axios";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
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

  componentDidMount() {
    this.getVehicles();
  }

  render() {
    return (
      <main style={{ overflowX: "hidden" }}>
        <Navbar home="true" />
        <section className="bg-home">
          <h1 className="h1Upper">
            Explore and <br />
            Travel
          </h1>
          <h5 className="h5css">Vehicle Finder</h5>
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
            <Dropdowns
              text="Payment"
              list1="PayPal"
              list2="OVO"
              list3="GoPay"
            />
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
          <h1 className="h1Lower">Popular in Town</h1>
          <Row xs={1} sm={2} md={4} className="rowCards">
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
}

export default Home;
