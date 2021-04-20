import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import maripocs from "../media/mariapocs.jpg";

class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="title header text-center py-3">
          Dicsőség Jézus Krisztusnak!
        </h3>
        <div className="content p-1 mb-1">
          <div className="pb-1 flex">
            <p className="quote badge-2">
              "...velünk az Isten, értsétek meg nemzetek és térjetek meg, mert
              velünk az Isten!” - (Iz. 8. 9.)
            </p>
          </div>
          <p>
            Több mint 150 éve jelen vannak a görögkatolikus hívek a hajdúsámsoni
            közösség életében. Továbbra is szeretnénk aktív értékteremtőként
            gazdagítani egyházunk és városunk életét.
          </p>
        </div>
        <div className="content mb-1 p-1">
          <Link to={"/news"}>
            <div className='text-over-img'>
              <LazyLoad
                className="all-center mb"
                debounce={false}
                offsetVertical={500}
              >
                <img src={maripocs} alt="Jézus Jeruzsálembe való bevonulása" />
              </LazyLoad>
              <p className="title bottom-left small">
                Április 25-én, a vasárnapi Szent Liturgia 9 órakor kezdődik.
                Tovább...
              </p>
            </div>
          </Link>
        </div>
        <div className="content p-1">
          <h4 className="text-center pb-1">Szertartásaink</h4>
          <h4 className="pb">Vasárnap:</h4>
          <p>10:30 - Reggeli Istentisztelet (utrenye)</p>
          <p className="pb">11:00 - Szent Liturgia</p>
          <h4 className="pb">Szerda:</h4>
          <p>16:30 - Szent Liturgia</p>
          <p>Szent gyónásra minden szertartás előtt van lehetőség.</p>
        </div>
      </div>
    );
  }
}

export default MainPage;
