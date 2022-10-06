import React from "react";
import "./style.css";

function FormRegister() {
  return (
    <div className="maincss">
      <div className="layer">
        <form className="formcss">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" name="submit" placeholder="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default FormRegister;
