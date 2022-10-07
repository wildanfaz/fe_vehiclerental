import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

function FormRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [msg, setMsg] = useState("");
  const history = useHistory();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://fazdev-go-vehiclerental.herokuapp.com/api/v1/users",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      history.push("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <div className="maincss">
      <form className="formcss" onSubmit={Register}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default FormRegister;
