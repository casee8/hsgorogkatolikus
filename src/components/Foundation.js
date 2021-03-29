import React from "react";

const Foundation = () => {
  const openDetails = (e) => {
    const foundationContainer = document.getElementById("foundationContainer");
    if (e) {
      foundationContainer.style.display = "unset";
    }
  };

  const closeDetails = (e) => {
    const foundationContainer = document.getElementById("foundationContainer");
    if (e) {
      foundationContainer.style.display = "none";
    }
  };

  return (
    <div>
      <p className="foundationBtn quote" onClick={openDetails}>
        Adó 1%
      </p>
      <div id='foundationContainer' className="foundation-container">
        <div id='foundationDetails' className="foundation-details">
          <p className="closeBtn" onClick={closeDetails}>
            x
          </p>
          <h4 className='mb-1'>
            REMÉNYBŐL JÖVŐ FAKAD! - IDÉN IS FONTOS, HOGY RENDELKEZZEN ADÓJA
            EGYHÁZI 1%-ÁRÓL!
          </h4>
          <p className='mb-1'>
            A Hajdúdorogi Főegyházmegyében két alapítványt is lehet 1%
            felajánlásával támogatni:
          </p>
          <h4 className='mb quote'>
            Kelet-Magyarországi Fiatalokért Alapítvány, adószáma 18799705-1-09.
          </h4>
          <p className='mb-1'>
            Az alapítvány célja az Észak-Kelet Magyarországon található egyházi
            intézmények felkarolása, támogatása, ugyanakkor a régióban élő
            fiatalok és diákok megsegítése, illetve a fiatalsággal és a
            diáksággal összefüggő bárminemű szükségeik támogatása, megsegítése.
            Az Alapítvány hatékonyan támogatja a Görögkatolikus Egyház
            fiatalokat érintő programjait, így pl. a sok fiatalt megmozgató
            Ifjúsági Gyalogos Zarándoklatot.
          </p>
          <h4 className='mb quote'>Szent Panteleimon Alapítvány, adószáma 19207906-1-15.</h4>
          <p className='mb-1'>
            Az alapítvány az évtizedes hagyományra visszatekintő Szent Damján
            Tábort támogatja. A tábor célja, hogy azokon a családokon segítsen,
            ahol fogyatékkal élő gyermek van. Papnövendékeink felismerték, hogy
            az örömökön túl, amit ezektől a gyerekektől kaphatnak, mennyi
            nehézséggel, külön fáradtsággal is jár az az élet, ahol egy
            fogyatékkal élő gyermek színesíti a család mindennapjait. Ezért
            döntöttek úgy, hogy minden nyáron egy hétre átvállalják ezeket a
            terheket a szülőktől, és egy hétig nyaraltatják a gyermekeket. Az
            évközi látogatások során az a tapasztalat, hogy a programok elérik
            céljukat, a gyermekek számára minden évben kiemelkedő esemény a
            Szent Damján tábor.
          </p>
          <p className='mb'>
            <strong>
              A Magyar Katolikus Egyház az idei évben is segíti az adózók
              tájékozódását az 1%-os kampány során.
            </strong>
          </p>
          <p className='mb'>
            Idén is lehetőség van arra, hogy a NAV készítse el az adózók
            bevallását, ezért szeretnénk felhívni figyelmét, hogy abban az
            esetben is külön rendelkezhet személyi jövedelemadója 1%-ának
            felajánlásáról, ha ezt a lehetőséget választotta.
          </p>
          <p className='mb'>
            Fontos, hogy rendelkezzen adója egyházi 1%-áról. 2018-tól a
            benyújtott nyilatkozata újabb nyilatkozat beadásáig vagy ennek
            visszavonásáig érvényes marad. A személyi jövedelemadó 1+1%-áról a
            20EGYSZA nevű nyomtatvány kitöltésével, illetve az eszja.nav.gov.hu
            oldalon rendelkezhet.
          </p>
          <p className='mb'>
            Amennyiben kapott az adóhatóságtól levelet, amelyben felajánlják az
            adóbevallás elkészítését, ennek mellékleteként megkapta az EGYSZA
            nyomtatványt is. Ezt kell kitöltenie és az adóhatósághoz eljuttatnia
            legkésőbb május 20-ig.
          </p>
          <p className='mb'>
            Ügyfélkapuval nem rendelkező személyeknek is lehetősége van az
            online felületen való rendelkezéshez. Ebben az esetben az
            eszja.nav.gov.hu oldalon válassza a regisztráció nélküli online
            felület lehetőséget.
          </p>
          <p>
            Kérjük, abban az esetben is tegye meg felajánlását a Magyar
            Katolikus Egyháznak, ha személyi jövedelemadója bizonyos
            kedvezmények miatt nulla forint (pl. családi adókedvezmény). Az
            állam ugyanis a felajánlók számánál ezeket a rendelkezéseket is
            figyelembe veszi. Az egyházaknak biztosított kiegészítő támogatás
            felosztása ugyanis a rendelkezők száma alapján történik, amelybe a
            nulla forintról szóló felajánlás is beleszámít.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
