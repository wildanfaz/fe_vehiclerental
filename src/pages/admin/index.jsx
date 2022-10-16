import React, { useState } from "react";
import "./style.css";
import auth from "../../helpers/private";
import Navbar from "../../components/navbar/navbar-home";
import Footer from "../../components/footer/footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Create from "../../components/cud/create";
import Update from "../../components/cud/update";
import Delete from "../../components/cud/delete";
import axios from "axios";
import { useSelector } from "react-redux";

function Admin() {
  const { token } = useSelector((state) => state.users);
  const [create1, setCreate1] = useState(true);
  const [update1, setUpdate1] = useState(false);
  const [delete1, setDelete1] = useState(false);
  const [successAdd, setSuccessAdd] = useState(false);
  const [successUpdate, setSuccessUpdate] = useState(false);
  const [successDelete, setSuccessDelete] = useState(false);
  const [vehicleId, setVehicleId] = useState("");
  const [addData, setAddData] = useState({
    vehiclename: "",
    location: "",
    description: "",
    price: 0,
    status: "",
    stock: 0,
    category: "",
    rating: "",
    image: null,
  });

  const [updateData, setUpdateData] = useState({
    vehicle_name: "",
    location: "",
    description: "",
    price: 0,
    status: "",
    stock: 0,
    category: "",
    rating: 0,
    image: "",
  });

  const Addv1 = async () => {
    try {
      const formAdd = new FormData();
      for (const key in addData) {
        formAdd.append(key, addData[key]);
      }

      await axios({
        method: "POST",
        url: "/vehicles",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        data: formAdd,
      }).then((res) => {
        console.log(res);
        setSuccessAdd(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const Updatev1 = async () => {
    try {
      await axios({
        method: "PUT",
        url: `/vehicles/${vehicleId}`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: updateData,
      }).then((res) => {
        console.log(res);
        setSuccessUpdate(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const Deletev1 = async () => {
    try {
      await axios({
        method: "DELETE",
        url: `/vehicles/${vehicleId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        console.log(res);
        setSuccessDelete(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const cre = () => {
    setCreate1(true);
    setUpdate1(false);
    setDelete1(false);
  };

  const upd = () => {
    setCreate1(false);
    setUpdate1(true);
    setDelete1(false);
  };

  const del = () => {
    setCreate1(false);
    setUpdate1(false);
    setDelete1(true);
  };

  const ui = () => {
    if (create1) {
      return (
        <Create
          data={addData}
          setData={setAddData}
          add={Addv1}
          res={successAdd}
        />
      );
    } else if (update1) {
      return (
        <Update
          data={updateData}
          setData={setUpdateData}
          update={Updatev1}
          res={successUpdate}
          vid={setVehicleId}
        />
      );
    } else {
      return (
        <Delete delete={Deletev1} res={successDelete} vid={setVehicleId} />
      );
    }
  };

  return (
    <div>
      <Navbar admin="true" />
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ gap: "10px", marginTop: "3vh", marginBottom: "3vh" }}
        >
          <Col onClick={cre} className={create1 ? "stylev2" : "stylev1 hover"}>
            <div>Create</div>
          </Col>
          <Col onClick={upd} className={update1 ? "stylev2" : "stylev1 hover"}>
            <div>Update</div>
          </Col>
          <Col onClick={del} className={delete1 ? "stylev2" : "stylev1 hover"}>
            <div>Delete</div>
          </Col>
        </Row>
      </Container>

      {ui()}
      <Footer />
    </div>
  );
}

export default auth(Admin);
