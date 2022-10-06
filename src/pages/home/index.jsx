import React, { Component } from "react";
import "./style.scss";
import Navbar from "../../components/navbar/navbar-home";
import Dropdowns from "../../components/dropdowns/drp-home";
import Button from "../../components/button/btn-home";
import Cards from "../../components/cards/cards-home";

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
      <main>
        <Navbar />
        <section className="bg-home">
          <h1 className="h1Upper">
            Explore and <br />
            Travel
          </h1>
          <h5 className="h5css">Vehicle Finder</h5>
          <div className="rectangle" />
          <div className="flex">
            <Dropdowns />
            <Dropdowns />
            <Dropdowns />
            <Dropdowns />
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
      </main>
    );
  }
}

export default Home;
