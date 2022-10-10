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

export class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
            <Cards
              img="https://res.cloudinary.com/dqc9wlsik/image/upload/v1665322335/vehiclerental/Sun_Oct__9_13-32-15_2022-bmw-i4-35041.jpg.jpg"
              name="BMW i4"
              location="Malang"
            />
            <Cards
              img="https://res.cloudinary.com/dqc9wlsik/image/upload/v1665322043/vehiclerental/Sun_Oct__9_13-27-23_2022-kawasaki-ninja-h2r-marketing-image-299806.jpg.jpg"
              name="Kawasaki Ninja H2R"
              location="Jakarta"
            />
            <Cards
              img="https://res.cloudinary.com/dqc9wlsik/image/upload/v1665322462/vehiclerental/Sun_Oct__9_13-34-22_2022-honda-wr-v-32835.jpg.jpg"
              name="Honda WRV"
              location="Yogyakarta"
            />
            <Cards
              img="https://res.cloudinary.com/dqc9wlsik/image/upload/v1665321979/vehiclerental/Sun_Oct__9_13-26-19_2022-kawasaki-ninja-h2sx-marketing-image-160369.jpg.jpg"
              name="Kawasaki Ninja H2SX"
              location="Jakarta"
            />
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
