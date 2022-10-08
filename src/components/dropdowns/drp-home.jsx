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
        {props.text}
        <img src={icon} alt="icon.png" className="iconhome" />
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        <Dropdown.Item href="#/action-1">{props.list1}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{props.list2}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{props.list3}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownsHome;
