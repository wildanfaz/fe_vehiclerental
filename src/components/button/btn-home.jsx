import React from "react";
import "./style.scss";
import Button from "react-bootstrap/Button";
import { clickView } from "../../store/reducer/viewAll";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ButtonHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const explore = () => {
    dispatch(clickView(false));
    navigate("/vehicles");
  };

  return (
    <div>
      <Button variant="warning" className="btnhome" onClick={explore}>
        <b className="nunito">Explore</b>
      </Button>
    </div>
  );
}

export default ButtonHome;
