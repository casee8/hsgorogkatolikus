import React from "react";
import ICXC_NIKA from "../media/logo-szukre-mediakozpont2019-436x429-1.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="bg-dark">
        <div className='all-center'>
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
        </div>
        <div>
          <p className='small text-center'>Hajdúsámsoni Görögkatolikus Parókia &copy; 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
