import React from "react";
import { Link } from "react-router-dom";
import PrivacyPolicyPDF from "../assets/Adatvedelmi_tajekoztato.pdf";

export const PrivacyPolicy = () => {

  return (
    <div>
      <object
        data={PrivacyPolicyPDF}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 5,
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "100vw",
            paddingTop: "3rem",
            background: "#fff",
          }}
        >
          <Link to='/' style={{float: 'right', marginRight: '1rem'}}>Ablak bezárása</Link>
          <p
            style={{
              paddingTop: "3rem",
              textAlign: "center",
            }}
          >
            Oops! PDF fájlok nem támogatottak ebben a böngészőben!{" "}
            <a href={PrivacyPolicyPDF} download>
              Letöltés
            </a>
          </p>
        </div>
      </object>
    </div>
  );
};
