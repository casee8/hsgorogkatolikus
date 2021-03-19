import React, { Component } from "react";

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
        <div className="content p-1 mb-1">
          <h4 className="pb">Nagyböjt kezdete</h4>
          <p className="mb">
            Február 15-én kezdődik a nagyböjti idő, felkészülés 40 napon át a
            Húsvét szent ünnepére. A görögkatolikus egyházban a nagyböjt már két
            nappal korábban elkezdődik, mint a római katolikusoknál, a
            hamvazószerda előtti hétfőn. A böjt a görögkatolikus egyházban a
            lelki felkészülés, újjászületés időszaka, melyet a test aszkézise
            tesz teljessé, hogy ily módon a hívek méltóan ünnepelhessék majd
            Jézus feltámadását. A bűnbánati időszak jelentőségéről számos
            elmélkedés született az évszázadok folyamán, az egyik szent atya,
            Zadonszki Szent Tyihon így fogalmaz:
          </p>
          <div className="mb flex">
            <p className="quote badge-2">
              „Van testi böjt, van lelki böjt is. Az a testi böjt, amikor a
              gyomor tartózkodik az ételtől, italtól. A lelki böjt az, amikor a
              lélek megtartóztatja magát a rossz gondolatoktól, cselekedetektől,
              szavaktól. Az a jó böjtölő, aki minden rossztól eltávolodik. Ha
              azt akarod, ó, keresztény, hogy ezen módra a böjt hasznos legyen,
              akkor böjtölj testileg, böjtölj lelkileg is, és mindig böjtölj!”
            </p>
          </div>
          <p className="mb">
            Van tehát lelki és testi böjtölés. A lelki böjtölés is egyfajta
            önmegtagadás, ami azt jelenti, hogy ebben az időszakban még inkább
            figyelnünk kell arra, hogy elkerüljük a bűnöket. Szíriai Szent Efrém
            böjti imádsága pontosan fogalmazza meg ezt:
          </p>
          <div className="mb flex">
            <p className="quote badge-2">
              „Életem Ura és Uralkodója, ne engedd hozzám a jóra való restség
              (lustaság), könnyelműség, pénzvágy és megszólás szellemét.”
            </p>
          </div>
          <p className="mb">
            A böjt, a test önmegtagadása is, lemondás valamely élvezetről, de
            mindig lelki célzattal. A testi böjtölés legáltalánosabb formája az
            étkezésekben jelenik meg. Böjtölhetünk ételről való lemondással. A
            keleti egyház előírása szerint nagyböjt első napja és nagypéntek
            szigorú böjt, amelyből csak ez a kettő ilyen van a görögkatolikus
            egyházi évben. Ez a húsos, zsíros, tojásos ételektől és a
            tejtermékektől – akár tejport tartalmazó ételektől – való
            tartózkodást jelenti. Kivételt képez azonban a hal (hidegvérűek)
            fogyasztása. A szigorú böjt megtartása 21 és 60 év között kötelező
            az egészségeseknek és saját háztartásukban étkezőknek.
          </p>
          <p>
            Hogyan tartod a Nagyböjti időt?
            <br />
            Írd le: Testi - Lelki- Szellemi
            <br />
            Vegyétek komolyan a nagyböjti időt. Nagyböjt hétköznapjai a bizánci
            rítusú egyházakban aliturgikus napok. Ez azt jelenti, hogy ezeken a
            napokon Szent Liturgiát nem végeznek, minthogy az Eucharisztia
            ünneplésének öröme nem fér össze a böjt bűnbánati jellegével. A
            görögkatolikus egyház azonban gondoskodik arról, hogy ne csak
            vasárnapokon lehessen részesülni a szentség vételében, ezért
            nagyböjt idején szerdán és pénteken az előre megszentelt áldozatok
            liturgiáját végzik.
          </p>
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
