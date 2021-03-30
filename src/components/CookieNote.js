import React, { Component } from "react";
import { Link } from "react-router-dom";

const CookieNote = () => {
  const acceptNote = (e) => {
    const cookieNote = document.getElementById("cookieNote");
    if (e) {
      cookieNote.style.display = "none";
    }
  };

  const hideCookieNoteAuto = () => {
    const cookieNote = document.getElementById("cookieNote");
    cookieNote.style.display = "none";
  };

  setTimeout(hideCookieNoteAuto, 10000);

  return (
    <div id="cookieNote" className="cookie-note text-center bg-dark p">
      <p>
        Ez a weboldal a felhasználói élmény javítása, valamint a zavartalan
        működés biztosítása érdekében sütiket (cookie-kat) használ. A sütik
        kikapcsolása a böngésző beállításaiban lehetséges.{" "}
        <Link to="/privacy-policy" className="text-danger" target='_blank' rel='noopener noreferrer'>
          Részletes leírás
        </Link>
      </p>
      <button className="m" onClick={acceptNote}>
        Megértettem
      </button>
    </div>
  );
};

export default CookieNote;
