import React from "react";
import "./style.css";
import footline from "./img/footline.png";
import logo from "./img/logo.png";
import twitter from "./img/twitter.png";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import linkedin from "./img/linkedin.png";
import youtube from "./img/youtube.png";

function Footer() {
  return (
    <footer>
      <div className="footerdiv1">
        <div className="footerdiv2">
          <img src={logo} alt="logo.jpg" />
          <p className="pcss">
            Plan and book your perfect trip with <br />
            expert advice, travel tips for vehicle
            <br />
            information from us
          </p>
          <p className="pcss">
            ©2020 Vehicle Rental Center. All rights reserved
          </p>
        </div>

        <div className="footerdiv3">
          <ul>
            <h6 className="h6css">Destinations</h6>
            <li>Bali</li>
            <li>Yogyakarta</li>
            <li>Jakarta</li>
            <li>Kalimantan</li>
            <li>Malang</li>
          </ul>
        </div>

        <div className="footerdiv3">
          <ul>
            <h6 className="h6css">Vehicle</h6>
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
        <a
          href="https://linkedin.com/in/muhamadwildanfaz/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin.png" className="imgspace" />
        </a>
        <img src={youtube} alt="youtube.png" className="imgspace" />
      </div>
    </footer>
  );
}

export default Footer;
