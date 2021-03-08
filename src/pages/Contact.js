import React from "react";
import mapImg from "../media/map.jpg";

const Contact = () => {
  return (
    <div className="container">
      <h3 className="text-center py-3 title header">Elérhetőségünk</h3>
      <div className="content">
        <div className="p-1">
          <h4 className="text-center quote pb">
            Hajdúsámsoni Görögkatolikus Egyházközség
            <br />
            Szent Kereszt Fölmagasztalásának Temploma
          </h4>
          <p className="text-center quote">4251 Hajdúsámson, Hunyadi utca 2.</p>
          <a className="text-center quote btn-block" href="tel:+36304829450">
            +3630/482-9450
          </a>
          <a
            className="text-center quote btn-block"
            href="mailto:zolcsak2010@gmail.com"
          >
            zolcsak2010@gmail.com
          </a>
        </div>
      </div>
      <a href="https://goo.gl/maps/yb62ESy6ryfJQ8tf7">
        <img
          className="all-center p-1"
          src={mapImg}
          alt=""
          style={{ maxWidth: "400px" }}
        />
      </a>
    </div>
  );
};

export default Contact;
