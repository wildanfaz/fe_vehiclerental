import React from "react";
import "./style.scss";
import Dropdown from "react-bootstrap/Dropdown";
import icon from "./img/icon.png";

function DropdownsHome(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
        className="bghome"
      >
        <div className="nunito">
          {props.text}
          <img src={icon} alt="icon.png" className="iconhome" />
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        <Dropdown.Item href="#/action-1">
          <div className="nunito">{props.list1}</div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <div className="nunito">{props.list2}</div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <div className="nunito">{props.list3}</div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownsHome;
