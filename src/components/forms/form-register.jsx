import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import google from "./img/google.png";
import useApi from "../../helpers/api";

function FormRegister() {
  const api = useApi();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();
  // const [msg, setMsg] = useState("");

  const Register = (e) => {
    e.preventDefault();
    setData({
      name: name,
      email: email,
      password: password,
    });

    api
      .req({
        method: "POST",
        url: "/users",
        data: { data },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="maincss">
      <div className="formcss">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="inputformReg"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="inputform"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="inputform"
        />
        <input
          type="button"
          value="Sign Up"
          className="inputform btnreg"
          onClick={Register}
        />
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
