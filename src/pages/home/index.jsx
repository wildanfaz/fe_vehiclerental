import React, { Component } from "react";
import "./style.scss";
import Navbar from "../../components/navbar/navbar-home";
import Dropdowns from "../../components/dropdowns/drp-home";
import Button from "../../components/button/btn-home";
import Cards from "../../components/cards/cards-home";
import logo from "./img/logo.png";
// import star from "./img/star.png";
import testi from "./img/testi.png";
import footline from "./img/footline.png";
import twitter from "./img/twitter.png";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import linkedin from "./img/linkedin.png";
import youtube from "./img/youtube.png";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "wildan",
    };
  }

  //**mount
  // componentDidMount() {
  //   alert("hello");
  // }

  render() {
    return (
      <main style={{ overflowX: "hidden" }}>
        <Navbar />
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
          <div className="flexvehicle">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </section>

        <section className="testi">
          <img src={testi} alt="testi.png" className="testiImg" />
        </section>

        <section>
          <footer>
            <div className="footerdiv1">
              <div className="footerdiv2">
                <img src={logo} alt="logo.jpg" />
                <p>
                  Plan and book your perfect trip with <br />
                  expert advice, travel tips for vehicle
                  <br />
                  information from us
                </p>
                <p>©2020 Vehicle Rental Center. All rights reserved</p>
              </div>

              <div className="footerdiv3">
                <ul>
                  <h6>Destinations</h6>
                  <li>Bali</li>
                  <li>Yogyakarta</li>
                  <li>Jakarta</li>
                  <li>Kalimantan</li>
                  <li>Malang</li>
                </ul>
              </div>

              <div className="footerdiv3">
                <ul>
                  <h6>Vehicle</h6>
                  <li>Bike</li>
                  <li>Cars</li>
                  <li>Motorbike</li>
                  <li>Return Times</li>
                  <li>FAQs</li>
                </ul>
              </div>

              <div className="footerdiv3">
                <ul>
                  <h6>Interests</h6>
                  <li>Adventure Travel</li>
                  <li>Art And Culture</li>
                  <li>Wildlife And Nature</li>
                  <li>Family Holidays</li>
                  <li>Culinary Trip</li>
                </ul>
              </div>
            </div>

            <img src={footline} alt="footline.png" className="footline" />
            <br />
            <div className="footerdiv4">
              <img src={twitter} alt="twitter.png" className="imgspace" />
              <img src={facebook} alt="facebook.png" className="imgspace" />
              <img src={instagram} alt="instagram.png" className="imgspace" />
              <img src={linkedin} alt="linkedin.png" className="imgspace" />
              <img src={youtube} alt="youtube.png" className="imgspace" />
            </div>
          </footer>
        </section>
      </main>
    );
  }
}

export default Home;
