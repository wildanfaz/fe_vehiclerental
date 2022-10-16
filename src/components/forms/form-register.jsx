/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import google from "./img/google.png";
import useApi from "../../helpers/api";

function FormRegister(props) {
  const api = useApi();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataReg, setDataReg] = useState({ name: "", email: "", password: "" });
  // const [msg, setMsg] = useState("");

  const Register = (e) => {
    e.preventDefault();

    api
      .req({
        method: "POST",
        url: "/users",
        data: dataReg,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const input = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const dataUser = () => {
    setDataReg({
      name: name,
      email: email,
      password: password,
    });
  };

  return (
    <div className="maincss">
      <div className="formcss">
        <form onSubmit={Register}>
          <input
            type="text"
            onChange={input}
            placeholder="Name"
            className="inputform"
            name="name"
            required
          />
          <input
            type="email"
            onChange={input}
            placeholder="Email"
            className="inputform"
            name="email"
            required
          />
          <input
            type="password"
            onChange={input}
            placeholder="Password"
            className="inputform"
            required
          />
          <button className="inputform btnreg" onClick={dataUser}>
            Sign Up
          </button>
        </form>
        <div style={{ display: "flex" }}>
          <button className="inputform buttonGoogle">
            <img src={google} className="gpng" alt="google.png" />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormRegister;
