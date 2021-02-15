import React from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import ICXC_NIKA from "../media/ICXC_NIKA.svg";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <Link to='/'>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={ICXC_NIKA}
            style={{
              height: "50px",
              width: "50px",
              display: "inline-block",
              marginRight: "0.7rem",
            }}
            alt="logo"
          />
          <p className='title' style={{ display: "inline-block" }}>
            Hajdúsámsoni
            <br />
            Görögkatolikus Parókia
          </p>
        </div>
      </Link>
      <Burger />
    </nav>
  );
};

export default Navbar;
