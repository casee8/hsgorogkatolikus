import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import fasting from "../media/fasting.jpg";
import cross3x from "../media/cross3x.jpg";

class News extends Component {
  render() {
    return (
      <div className="container">
        <div className="flexible-grid py-3">
          <div className="content">
            <h4 className="p-1">Húsvéti Ünnepkör</h4>
            <LazyLoad debounce={false} offsetVertical={500}>
              <img src={cross3x} alt="3 kereszt" />
            </LazyLoad>
            <div className="p-1">
              <p className="mb">
                Virágvasárnap, azaz március 28-án 11:00 órától barkaszenteléssel
                összekötött liturgia lesz, amely Jézus Jeruzsálembe való
                bevonulásáról szól.
              </p>
              <p className="mb">
                Nagycsütörtök (április 1), nagypéntek (április 2) és
                nagyszombaton (április 3) 17:00-kor lesz liturgia, ezeken a
                napokon emlékezünk meg az utolsó vacsoráról, Jézus Krisztus
                kereszthaláláról.
              </p>
              <p>
                Húsvét vasárnap (április 4) pászkaszentelés lesz 8:30-tól,
                hétfőn (április 5) 11:00 órától lesz a liturgia, amikor is Jézus
                föltámadását ünnepeljük.
              </p>
            </div>
          </div>
          <div className="content">
            <h4 className="p-1">Nagyböjt kezdete</h4>
            <LazyLoad debounce={false} offsetVertical={500}>
              <img src={fasting} alt="Nagyböjt" />
            </LazyLoad>
            <div className='p-1'>
              <p className="mb">
                Február 15-én kezdődik a nagyböjti idő, felkészülés 40 napon át
                a Húsvét szent ünnepére. A görögkatolikus egyházban a nagyböjt
                már két nappal korábban elkezdődik, mint a római katolikusoknál,
                a hamvazószerda előtti hétfőn. A böjt a görögkatolikus egyházban
                a lelki felkészülés, újjászületés időszaka, melyet a test
                aszkézise tesz teljessé, hogy ily módon a hívek méltóan
                ünnepelhessék majd Jézus feltámadását. A bűnbánati időszak
                jelentőségéről számos elmélkedés született az évszázadok
                folyamán, az egyik szent atya, Zadonszki Szent Tyihon így
                fogalmaz:
              </p>
              <div className="mb flex">
                <p className="quote badge-2">
                  „Van testi böjt, van lelki böjt is. Az a testi böjt, amikor a
                  gyomor tartózkodik az ételtől, italtól. A lelki böjt az,
                  amikor a lélek megtartóztatja magát a rossz gondolatoktól,
                  cselekedetektől, szavaktól. Az a jó böjtölő, aki minden
                  rossztól eltávolodik. Ha azt akarod, ó, keresztény, hogy ezen
                  módra a böjt hasznos legyen, akkor böjtölj testileg, böjtölj
                  lelkileg is, és mindig böjtölj!”
                </p>
              </div>
              <p className="mb">
                Van tehát lelki és testi böjtölés. A lelki böjtölés is egyfajta
                önmegtagadás, ami azt jelenti, hogy ebben az időszakban még
                inkább figyelnünk kell arra, hogy elkerüljük a bűnöket. Szíriai
                Szent Efrém böjti imádsága pontosan fogalmazza meg ezt:
              </p>
              <div className="mb flex">
                <p className="quote badge-2">
                  „Életem Ura és Uralkodója, ne engedd hozzám a jóra való
                  restség (lustaság), könnyelműség, pénzvágy és megszólás
                  szellemét.”
                </p>
              </div>
              <p className="mb">
                A böjt, a test önmegtagadása is, lemondás valamely élvezetről,
                de mindig lelki célzattal. A testi böjtölés legáltalánosabb
                formája az étkezésekben jelenik meg. Böjtölhetünk ételről való
                lemondással. A keleti egyház előírása szerint nagyböjt első
                napja és nagypéntek szigorú böjt, amelyből csak ez a kettő ilyen
                van a görögkatolikus egyházi évben. Ez a húsos, zsíros, tojásos
                ételektől és a tejtermékektől – akár tejport tartalmazó
                ételektől – való tartózkodást jelenti. Kivételt képez azonban a
                hal (hidegvérűek) fogyasztása. A szigorú böjt megtartása 21 és
                60 év között kötelező az egészségeseknek és saját háztartásukban
                étkezőknek.
              </p>
              <p>
                Vegyétek komolyan a nagyböjti időt. Nagyböjt hétköznapjai a
                bizánci rítusú egyházakban aliturgikus napok. Ez azt jelenti,
                hogy ezeken a napokon Szent Liturgiát nem végeznek, minthogy az
                Eucharisztia ünneplésének öröme nem fér össze a böjt bűnbánati
                jellegével. A görögkatolikus egyház azonban gondoskodik arról,
                hogy ne csak vasárnapokon lehessen részesülni a szentség
                vételében, ezért nagyböjt idején szerdán és pénteken az előre
                megszentelt áldozatok liturgiáját végzik.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
