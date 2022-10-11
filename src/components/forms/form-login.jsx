import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import google from "./img/google.png";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [err, setErr] = useState(false);
  // const [msg, setMsg] = useState("");
  const history = useHistory();

  const Login = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://fazdev-go-vehiclerental.herokuapp.com/api/v1/auth",
        {
          email: email,
          password: password,
        }
      );
      history.push("/");
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
      <form className="formcss" onSubmit={Login}>
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
        <label style={{ color: "white", marginTop: "10px" }}>
          <u>Forgot password?</u>
        </label>
        <input type="submit" value="Login" className="inputform submitlog" />
        <div style={{ display: "flex" }}>
          <button className="inputform buttonGoogle">
            <img src={google} className="gpng" alt="google.png" />
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;
