import React, { Component } from "react";

class MainPage extends Component {
  render() {
    return (
      <div className="for-footer mb-1">
        <h3 className="title header text-center py-3">
          Dicsőség Jézus Krisztusnak!
        </h3>
        <div className="content p-1 mb-1">
          <div className="pb-1">
            <p className="quote text-center badge-2">
              "...velünk az Isten, értsétek meg nemzetek és térjetek meg, mert
              velünk az Isten!” - (Iz. 8. 9.)
            </p>
          </div>
          <p className="pb-1">
            Több mint 150 éve jelen vannak a görögkatolikus hívek a hajdúsámsoni
            közösség életében. Továbbra is szeretnénk aktív értékteremtőként
            gazdagítani egyházunk és városunk életét.
          </p>
        </div>
        <div className='content p-1'>
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
