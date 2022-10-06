import React from "react";
import "./style.scss";

function CardsHome() {
  return (
    <div className="card">
      <img src={a} alt="sistine" className="img"></img>
      <div className="desc">
        <h4>
          <b>Sistine</b>
        </h4>
        <h5>Wangy</h5>
      </div>
    </div>
  );
}

export default CardsHome;

const a =
  "data:image/jpeg;base64,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";
