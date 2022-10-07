import React, { Component } from "react";
import "./style.scss";
import Navbar from "../../components/navbar/navbar-home";
import Dropdowns from "../../components/dropdowns/drp-home";
import Button from "../../components/button/btn-home";
import Cards from "../../components/cards/cards-home";
import logo from "./img/logo.png";
import star from "./img/star.png";
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
            <Dropdowns text="Location" />
            <Dropdowns text="Type" />
            <Dropdowns text="Payment" />
            <Dropdowns text="Date" />
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

        <section>
          <div className="testiflex">
            <div className="flexcss">
              <h2 className="h2testimonials">Testimonials</h2>
              <div className="star">
                <img src={star} alt="star.png" />
                <img src={star} alt="star.png" />
                <img src={star} alt="star.png" />
                <img src={star} alt="star.png" />
                <img src={star} alt="star.png" />
              </div>
              <p>
                ”It was the right decision to rent vehicle
                <br /> here, I spent less money and enjoy the <br />
                trip. It was an amazing experience to <br />
                have a ride for wildlife trip!”
              </p>
            </div>
          </div>
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
