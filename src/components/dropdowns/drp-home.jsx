import React from "react";
import "./style.scss";
import Dropdown from "react-bootstrap/Dropdown";
import icon from "./img/icon.png";

function DropdownsHome(props) {
  const location = () => {
    if (props.text === "Location") {
      return (
        <Dropdown.Menu variant="dark">
          <Dropdown.Item href={`/vehicles/location/${props.list1}`}>
            <div className="nunito">{props.list1}</div>
          </Dropdown.Item>

          <Dropdown.Item href={`/vehicles/location/${props.list2}`}>
            <div className="nunito">{props.list2}</div>
          </Dropdown.Item>

          <Dropdown.Item href={`/vehicles/location/${props.list3}`}>
            <div className="nunito">{props.list3}</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      );
    } else if (props.text === "Type") {
      return (
        <Dropdown.Menu variant="dark">
          <Dropdown.Item href={`/vehicles/type/${props.list1}`}>
            <div className="nunito">{props.list1}</div>
          </Dropdown.Item>

          <Dropdown.Item href={`/vehicles/type/${props.list2}`}>
            <div className="nunito">{props.list2}</div>
          </Dropdown.Item>

          <Dropdown.Item href={`/vehicles/type/${props.list3}`}>
            <div className="nunito">{props.list3}</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      );
    } else {
      return (
        <Dropdown.Menu variant="dark">
          <Dropdown.Item>
            <div className="nunito">{props.list1}</div>
          </Dropdown.Item>

          <Dropdown.Item>
            <div className="nunito">{props.list2}</div>
          </Dropdown.Item>

          <Dropdown.Item>
            <div className="nunito">{props.list3}</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      );
    }
  };
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
      {location()}
    </Dropdown>
  );
}

export default DropdownsHome;
