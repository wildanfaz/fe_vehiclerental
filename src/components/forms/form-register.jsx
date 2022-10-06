import React from "react";
import "./style.scss";

function FormRegister() {
  return (
    <div className="maincss">
      <div className="layer"></div>
      <form className="formcss">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" name="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default FormRegister;
