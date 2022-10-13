/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import google from "./img/google.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/reducer/users";

function FormLogin() {
  const { isAuth } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [err, setErr] = useState(false);
  // const [msg, setMsg] = useState("");

  const Login = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("/auth", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data.data);
          const { token } = res.data.data;
          dispatch(login(token));
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        if (error.response.data.message.includes("email")) {
          setEmailMsg(String(error.response.data.message));
        } else {
          setPwdMsg(String(error.response.data.message));
        }

        console.log(pwdMsg);
        // alert(msg);
        setErr(true);
      }
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const checkEmail = () => {
    if (err && emailMsg.length > 0) {
      return <h4 style={{ color: "white" }}>Incorrect Email</h4>;
    }
  };

  const checkPassword = () => {
    if (err && pwdMsg.length > 0) {
      return <h4 style={{ color: "white" }}>Incorrect Password</h4>;
    }
  };

  return (
    <div className="maincss">
      <div className="formcss">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="inputform"
        />
        <div>{checkEmail()}</div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="inputform"
        />
        <div>{checkPassword()}</div>
        <label
          style={{ color: "white", marginTop: "10px", marginRight: "20%" }}
        >
          <u>Forgot password?</u>
        </label>
        <input
          type="button"
          value="Login"
          className="inputform submitlog"
          onClick={Login}
        />
        <div style={{ display: "flex" }}>
          <button className="inputform buttonGoogle">
            <img src={google} className="gpng" alt="google.png" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
