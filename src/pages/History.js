import React from "react";
import LazyLoad from "react-lazy-load";
import viPalAthenagorasz from "../media/vi_pal_athenagorasz.jpg";
import hierotheosz from "../media/hierotheosz_puspok.jpg";
import hajdudorogiTemplom from "../media/greek_catholic_church_historical_hajdudorog.jpg";
import alapitoBulla from "../media/alapito_bulla.jpg";
import miklosyIstvan from "../media/miklosy_szenteles_utan.jpg";
import debreceniBombamerenyletAldozatai from "../media/debreceni_bombamerenylet_aldozatai.jpg";
import pappAntal from "../media/papp_antal_ersek.jpg";
import dudasMiklos from "../media/dudas_miklos_puspok.jpg";

export default function History() {
  return (
    <div className="container">
      <div>
        <h3 className="title header text-center py-3">
          Görögkatolikusok Magyarországon
        </h3>
      </div>
      <div className="content p-1">
        <h4 className="pb">Kedves görögkatolikus barátom!</h4>
        <p className="pb">
          Biztosan hallottál már arról, hogy a 2012. év a magyar
          görögkatolikusok számára különleges esztendő. Ezt az évet centenáriumi
          évnek hívjuk, mivel idén ünnepeljük a Hajdúdorogi Egyházmegye
          alapításának századik évfordulóját (a centenárium szó a latin centum =
          száz szóból ered). Görögkatolikus déd- és ükszüleink életében a
          Hajdúdorogi Egyházmegye alapításának óriási jelentősége volt: ami
          nekünk ma természetes, az nekik hosszú évtizedekig tartó, kemény
          küzdelem után elért hatalmas siker volt. Amikor megünnepeljük a
          Hajdúdorogi Egyházmegye századik születésnapját, nem csak az
          alapításhoz vezető út állomásait idézzük fel, hanem tisztelgünk őseink
          előtt és osztozunk örömükben.
        </p>
        <p className="pb">
          Bár a Hajdúdorogi Egyházmegye alapítása 1912-ben történt, az idő
          kerekét mégsem csupán száz évvel kell visszatekernünk ahhoz, hogy
          megismerjük őseink történetét. A magyar görögkatolikus út a távoli
          múltból indul, s megértéséhez néhány fogalom tisztázására is szükség
          lesz.
        </p>
        <p className="pb">
          Elsőként a „görögkatolikus” kifejezést kell átgondolnunk: miért
          nevezzük magunkat görögkatolikusnak? Mit jelent a „görög” jelző az
          elnevezésünkben? Gondolkoztál már ezen?
        </p>
        <p>
          A „görög” azt jelenti elnevezésünkben, hogy „bizánci szertartású”.
          Amikor az Úr Jézus missziós parancsának:
        </p>
        <div className='flex m'>
          <p className="badge-2 quote">
            „Menjetek tehát, és tegyetek tanítvánnyá minden népet” - Mt 31,19.
          </p>
        </div>
        <p className="pb-1">
          engedelmeskedve az apostolok Jeruzsálemből elindultak az akkor ismert
          világba és hirdették minden népnek az Evangéliumot, rövid idő alatt a
          Római Birodalomban – és azon kívül is – sok-sok városban sok ezer
          ember fogadta el a keresztény hitet. Ők különböző népek gyermekei
          voltak, akik az Evangélium befogadása után a maguk szokásainak
          megfelelően alakították ki egyházaik életét. Ugyanarra az alapra,
          Jézus Krisztus evangéliumára építkeztek, de a közös imádságban, a
          liturgia végzésében és az egyházi élet terén sokszínűség alakult ki.
          Egy-egy nagyobb földrajzi térségen belül a jelentős egyházi központok
          – Jeruzsálem, Antióchia, Alexandria, Róma, majd később Konstantinápoly
          (más néven Bizánc) – hatására kifejlődött a szertartások végzésének
          egységes módja és kialakultak a rítus-családok. A „rítus” szót
          magyarul „szertartásnak” szoktuk fordítani, de tudnod kell, hogy a
          rítus nem csak a közös imádságot, a liturgia szertartását jelenti,
          hanem annál sokkal többet. A rítushoz tartozik az egyházfegyelem (ami
          nem azt jelenti, hogy a templomban fegyelmezetten veszünk részt a
          szertartásokon - az is fontos!), ami magába foglalja azokat a
          szabályokat, amit egy egyházon belül követnek (pl. a böjti szokások,
          vagy a papok nősülése). Ma Magyarországon leginkább két rítus-családot
          ismerhetsz: a görögkatolikusok a bizánci rítus-családhoz tartoznak, a
          római katolikusok pedig a latin rítust követik. Biztosan te is
          észrevetted már, hogy a görögkatolikus szent liturgia és a római
          katolikus mise között milyen sok hasonlóság van, hiszen ugyanannak az
          Eucharisztiának az ünneplése zajlik, mégis mennyire különböznek
          egymástól. A bizánci rítus-család a császárvárosban,
          Konstantinápolyban fejlődött ki és onnan terjedt el a Balkánon
          (görögök, szerbek, bolgárok, románok) majd pedig az oroszok, ukránok
          és ruszinok között. A latin rítus Rómából, a pápa székhelyéről indult
          ki és terjedt el az egész nyugati világban. Számunkra már kevésbé
          ismert, de nagyon ősi rítusok az örmény (kevesen Magyarországon és
          Erdélyben is élnek), a kopt (Egyiptomban), a szír (a Közel-Kelet
          országaiban), a káld (Irakban), illetve a malabár (Indiában).
        </p>
        <div className="img-container all-center mb img-float-left">
          <LazyLoad debounce={false} offsetVertical={500}>
            <img
              className="rounded"
              src={viPalAthenagorasz}
              alt="VI. Pál és Athenagorasz pátriárka"
            />
          </LazyLoad>
          <p className="card-2 p">VI. Pál és Athenagorasz pátriárka</p>
        </div>
        <p className="pb">
          Hosszú évszázadokon át a rítusok különbözősége nem okozott problémát a
          keresztények között. Egy egyházat alkottak, egymással egységben éltek,
          imádságaikban megemlékeztek egymásról. Az egész egyházat érintő
          kérdéseket közös tanácskozásokon, egyetemes zsinatokon oldották meg.
          Miután azonban a Római Birodalom kettészakadt, a keleten és a nyugaton
          élő keresztények egyre inkább eltávolodtak egymástól, egyre kevésbé
          értették meg egymást és egymás eltérő szokásait se fogadták el úgy,
          ahogyan korábban. Ez az eltávolodás először kisebb szakadásokhoz
          vezetett, majd pedig 1054-ben bekövetkezett a nagy szakadás. Ekkor
          mind a római, mind pedig a konstantinápolyi egyház vezetői engedtek az
          emberi gőg kísértésének, és nem a felmerült problémák és
          nézeteltérések rendezésére, hanem az ellentétek további fokozására
          törekedtek. Kölcsönösen kiközösítették egymást, ami az egység
          megszakítását jelentette. Attól kezdve még inkább gyanakvással
          tekintettek egymásra, s nem imádkoztak egymásért. Amikor a nyugati
          keresztesek 1204-ben a Szentföld felszabadítása helyett
          Konstantinápolyt ostromolták meg, a keleti és a nyugati egyház közötti
          szakadás tovább mélyült és ellenséges szembenállássá alakult át. Az
          1054-ben kimondott kölcsönös kiközösítést csak 910 évvel később,
          1964-ben vonta vissza VI. Pál pápa és Athenagorasz pátriárka, de a
          keleti és a nyugati egyház közötti szakadást ez sem szüntette meg
          teljesen. Az 1054-ben és az azt követő évszázadok során ejtett sebeket
          csak hosszú és türelmes párbeszéddel lehet begyógyítani. Az erre tett
          kísérletet nevezzük ökumenikus párbeszédnek.
        </p>
        <p>
          Természetesen a szakadás bekövetkezte után is történtek kísérletek az
          egyház egységének helyreállítására. Jézus ugyanis a tanítványaiért
          imádkozva ezt kérte a Mennyei Atyától:
        </p>
        <div className='flex m'>
          <p className="badge-2 quote">
            „Legyenek mindnyájan egy” - Jn. 17,31.
          </p>
        </div>
        <p className='pb'>
          Az Úr Jézusnak ez a kérése szinte parancs minden keresztény számára és
          arra kötelez, hogy mindig keressük az egyház egységének útját. Ezt a
          múltban is sok-sok keresztény – keleten és nyugaton egyaránt –
          komolyan vette. A legjelentősebb, de sajnos maradandó eredményt nem
          hozó kísérlet az egyház egységének helyreállítására a firenzei zsinat
          volt 1439-ben. A későbbi kísérletek sem vezettek teljes sikerhez,
          hanem azzal az eredménnyel jártak, hogy a keleti egyház egy-egy része
          lépett egységre a nyugati, katolikus egyházzal. Amikor ez az egység –
          amit latin szóval uniónak nevezünk – megvalósul, akkor jön létre egy
          keleti katolikus, nálunk használatos elnevezéssel görögkatolikus
          egyház. Az elmúlt évszázadokban – de különösen a 16-18. században –
          szerte a világban több keleti katolikus egyház jött létre. A számodra
          leginkább ismerős vidéken, Kelet-Közép-Európában is, s azon belül a
          történelmi Magyarországon, ebben a korban jöttek létre azok a
          görögkatolikus egyházak, melyek számos viszontagság után ma is
          léteznek. A 16. század végén az akkori Lengyel-Litván Királyságban a
          breszti unióban (1595/96) jött létre a rutén görögkatolikus egyház,
          amit ma ukrán görögkatolikus egyháznak ismerhetsz. A történelmi
          Magyarország különböző vidékein a 17. század első évtizedeitől kezdve
          indultak útjukra azok a kezdeményezések, melyek görögkatolikus
          egyházak létrejöttéhez vezettek. A Délvidéken (1611: márcsai unió), az
          északkeleti vármegyékben (1646: ungvári unió), a Partiumban (17.
          század utolsó évtizede), majd pedig Erdélyben (17-18. század
          fordulója: gyulafehérvári unió) megkötött uniók (vagyis a római
          pápával való egyesülés ünnepélyes kimondása) után fokozatosan épült ki
          a görögkatolikus egyházszervezet. Az ősi alapítású, de hivatalosan
          csak 1771-ben felállított Munkácsi Egyházmegye, majd pedig az ebből
          1818-ban kialakított Eperjesi Egyházmegye liturgikus nyelve az ószláv
          volt. Ezzel szemben az 1721-ben felállított Fogarasi és az 1777-ben
          alapított Nagyváradi Egyházmegyében román nyelven végezték a
          szertartásokat.
        </p>
        <p className="pb">
          Azok a magyarok, akik ezekhez a görögkatolikus egyházmegyékhez
          tartoztak sokáig elfogadták azt, hogy a templomi szertartások nyelve
          ószláv vagy román. A legtöbben nem is értették a liturgia szövegét,
          ami ma neked nagyon furcsának tűnhet, de régen ez elfogadott volt.
          Otthon, a faluban magyarul beszéltek, de elfogadták, hogy a templomban
          egy másik nyelven kell imádkozniuk. Ez akkor kezdett el megváltozni,
          amikor a magyar nyelv használatának és ápolásának kérdése egész
          Magyarországon fontossá vált. Történelemből talán tanultad (vagy még
          tanulni fogod), hogy a 18. század utolsó évtizedében Magyarországon
          útjára indult a nyelvújítás mozgalma (biztosan hallottad már Kazinczy
          Ferenc nevét, aki a nyelvújítók vezére volt). Egyre többen és egyre
          lelkesebben küzdöttek azért is, hogy a magyar nyelv az állam hivatalos
          nyelve legyen (hiszen 1844-ig a latin volt Magyarország hivatalos
          nyelve). Ezekben a küzdelmekben az anyanyelv szeretete mellett a
          magyar haza és a magyar nemzet iránti szeretet is kifejeződésre jutott
          (gondolj Kölcsey Ferencre és a Himnuszra vagy Vörösmarty Mihály
          Szózatára). De a hazaszeretet nem csak az irodalomban, hanem a
          tettekben is megnyilvánult. Ez a korszak a reformkor, ami Magyarország
          történetének egyik legszebb korszaka: kiváló emberek – Széchenyi
          István, Kossuth Lajos, Deák Ferenc és mások – küzdöttek Magyarország
          gazdaságának és társadalmának felvirágoztatásáért.
        </p>
        <p className="pb-1">
          A magyar görögkatolikusok lelkesen csatlakoztak ezekhez a
          mozgalmakhoz, s amikor 1848/49-ben a magyar haza szabadságáért
          fegyvert kellett fogni, ők is kivették a részüket a harcból. Kevesen
          tudják – de Neked mindenképpen tudnod kell – hogy a márciusi ifjak
          vezetői között is volt egy görögkatolikus: Vasvári Pál, aki fiatalon
          adta életét a magyar szabadságért. De rajta kívül nagyon sok
          görögökatolikus – köztük papok és kispapok is – vett részt a
          szabadságharcban, áldozta életét, vagy szenvedett hosszú várfogságot.
        </p>
        <div className="img-container all-center mb img-float-right">
          <LazyLoad debounce={false} offsetVertical={500}>
            <img
              className="rounded"
              src={hierotheosz}
              alt="Hierotheosz püspök"
            />
          </LazyLoad>
          <p className="card-2 p">Hierotheosz püspök</p>
        </div>
        <p className="pb">
          A magyar görögkatolikusok tehát a haza hű fiaiként egyre inkább
          fontosnak érezték azt, hogy a templomaikban anyanyelvükön
          imádkozhassanak. Más vallású honfitársaik részéről gyakran érte őket
          az a vád, hogy nem is igazi magyarok, hiszen a templomaikban ószlávul
          vagy románul imádkoznak. Ez a vád és az azt kísérő még gyakoribb
          csúfolódás nagyon bántotta őket. Azért is érezték igazságtalannak a
          vádakat, mivel köztudott volt, hogy a honfoglalás után a magyarok
          megtérítését Bizáncból érkezett szerzetesek kezdték meg. A magyarok
          vezetői közül az erdélyi Gyula és Bulcsú a 10. század közepén
          Bizáncban keresztelkedtek meg. Gyula magával hozta Bizáncból
          Hierotheosz püspököt, aki szerzetestársaival a magyarok között
          térített. Az Árpád-korban Magyarországon több helyen bizánci
          szertartású kolostorok működtek: Marosvárott, Oroszlánoson,
          Veszprémvölgyben (ennek a női kolostornak a görög nyelven írott
          alapítólevele is fennmaradt), Tihanyban, Visegrádon, Dunapentelén
          (szintén női kolostor) és Szávaszentdemeteren. Szent István király a
          latin szertartású kereszténységet választotta (az édesanyja Sarolt,
          Gyula lánya azonban bizánci szertartású volt) és a magyarok döntő
          többsége valóban latin szertartású keresztény lett, de a bizánci
          szertartású kereszténység jelenléte a magyarok között vitathatatlan.
          Sőt, az 1092. május 20-án megrendezett szabolcsi zsinat döntései
          között találunk olyanokat, melyek a bizánci egyház hagyományára
          utalnak (pl. a zsinat elrendeli, hogy a Nagyböjtöt hétfőn kell
          kezdeni, nem pedig Hamvazószerdán). Szintén lényeges, hogy az
          Árpád-házi királyaink fontosnak tartották a Bizánccal való
          kapcsolatot. Szent László király lánya, Szent Piroska bizánci
          császárnéként lett szent. III. Béla királyunk Bizáncban nevelkedett.
          Fia Imre király 1204-ben azt tervezte, hogy a bizánci szertartású
          magyaroknak püspökséget állít fel. A tatárjárás után azonban a Magyar
          Királyságba egyre nagyobb létszámban betelepülő nemzetiségek –
          románok, ruszinok, szerbek – képviselték a bizánci szertartást, s
          hozzájuk képest a bizánci szertartású magyarok háttérbe szorultak.
          Ezért az évszázadok során magyar közvéleményben az az elképzelés
          alakult ki, hogy a bizánci szertartás a nemzetiségek, a latin rítus
          pedig a magyarok sajátja. Ebből a gondolkodásból származtak a magyar
          görögkatolikusokkal szembeni vádak és gúnyolódások. Ezzel szemben a
          magyar görögkatolikusok arra hivatkozhattak, hogy az első keresztény
          magyarok bizánci szertartásúak voltak. Tehát lehet valaki egyszerre
          magyar és bizánci szertartású.
        </p>
        <p className="pb">
          A magyar görögkatolikusok úgy gondolták, hogy a liturgia magyar
          nyelven való végzését csak a megfelelő fordítások hiánya akadályozza.
          Ezért elkezdtek liturgia-fordításokat készíteni. A legkorábbi ma is
          fennmaradt fordítást Kritsfalusi György, ungvári tanár készítette
          1795-ben. A fordítás előszavában utal arra, hogy nem csak Ungváron,
          hanem sok más helyen is igénylik a magyar nyelvű görögkatolikus Szent
          Liturgiát. Ezen kívül más fordítások is készültek, de ezek is csak
          kéziratban terjedhettek. A szertartások nyelvének megváltoztatása
          ugyanis akkor nagyon nehéz volt. Ma természetesnek vesszük azt, hogy
          mind a római katolikusok, mind pedig a görögkatolikusok anyanyelvükön
          végzik a templomi szertartásokat. Nem csak Magyarországon, hanem a
          világban mindenütt. De ez csak alig ötven éve van így: a II. Vatikáni
          Zsinat előtt a római katolikus templomokban latinul végezték a
          szertartásokat, a görögkatolikus templomokban pedig az ószláv vagy a
          román volt a megengedett.
        </p>
        <p className="pb-1">
          A magyar görögkatolikusok úgy gondolták, hogy ha saját egyházmegyéjük
          lenne és nem ószláv (Munkácsi és Eperjesi), illetve román (Nagyváradi,
          Szamosújvár, Gyulafehérvár-Fogaras) liturgikus nyelvű egyházmegyékhez
          tartoznának, akkor a magyar nyelv liturgikus használatának bevezetése
          is könnyebb lenne.
        </p>
        <div className="img-container all-center mb">
          <LazyLoad debounce={false} offsetVertical={500}>
            <img
              className="rounded"
              src={hajdudorogiTemplom}
              alt="A hajdúdorogi templom XIX. században"
            />
          </LazyLoad>
          <p className="card-2 p">A hajdúdorogi templom XIX. században</p>
        </div>
        <p className="pb">
          Magyarországon a legnagyobb magyar görögkatolikus egyházközség a
          hajdúdorogi volt. A hajdúdorogiak indították el azt a mozgalmat, mely
          egy önálló magyar görögkatolikus egyházmegyéért és magyar nyelv
          liturgikus használatának engedélyezéséért küzdött. 1868. április 16-ra
          Hajdúdorogra hívták a magyar görögkatolikus egyházközségek képviselőit
          és országos kongresszust tartottak. A kongresszusra 33 egyházközség
          küldte el képviselőjét (szám szerint 220-at), illetve 20 lelkész
          jelent meg. Ezen kívül 19 egyházközség és 11 lelkész írásban jelezte,
          hogy elfogadja a határozatokat. A kongresszus Állandó Végrehajtó
          Bizottságot hozott létre, melynek élére a szervezésben nagy érdemeket
          szerzett Farkas Lajost (1821-1894), Hajdúdorog főhadnagyát
          választották. A küldöttek megfogalmazták az elérendő célokat is: 1.
          magyar egyházmegye felállítása Hajdúdorog székhellyel; 2. a liturgikus
          könyvek lefordítása és kiadása; 3. a magyar liturgikus nyelv
          szentesítése. Az Állandó Végrehajtó Bizottság hosszú éveken át
          kérvényeket fogalmazott és adott be az Országgyűléshez és a
          kormányhoz, de csak részeredményeket tudtak elérni. 1873-ban
          Hajdúdorog székhellyel nem egyházmegye létesült, hanem a Munkácsi
          Egyházmegyén belül külhelynökség. Ez nem adta meg azt az önállóságot,
          amire a magyar görögkatolikusok vágytak, de a magyar liturgikus nyelv
          szempontjából mégis fontos volt. A hajdúdorogi külhelynökség vezetője,
          Danilovics János ugyanis 1879-ben fordítóbizottságot hozott létre,
          melynek az volt a feladata, hogy a kéziratos fordítások helyett jó
          minőségű fordításokat készítsen. A bizottság munkája nagyon eredményes
          volt, hiszen néhány év alatt lefordították és nyomtatásban kiadták a
          legfontosabb liturgikus könyveket. Ezek a liturgikus könyvek azonban
          nem válhattak hivatalossá, mert nem kaptak egyházi engedélyt, sőt a
          magyar nyelv templomi használatát Róma újra és újra megtiltotta. A
          legsúlyosabb tiltás éppen abban az évben érkezett, amikor a magyarság
          a honfoglalás ezredik évfordulóját ünnepelte. 1896. június 27-én a
          magyar görögkatolikusok a budapesti Egyetemi templomban magyar nyelvű
          Szent Liturgiát végeztek, amiről a korabeli újságok részletes
          tudósításokat közöltek. Ezek a tudósítások eljutottak Rómába is,
          ahonnan újabb szigorú tiltás érkezett. A magyar görögkatolikusokat
          mélyen elszomorította az, hogy miközben az egész nemzet az ezeréves
          Magyarországot ünnepelte, nekik még azt sem engedték meg, hogy
          magyarul imádkozzanak a templomaikban. Szomorúságukat és
          csalódottságukat újabb vádak fokozták. Ekkor Magyarországon jelentős
          feszültségek voltak a magyarok és a nemzetiségek – különösen a románok
          – között. A nemzetiségek úgy érezték – nem teljesen alaptalanul – hogy
          a magyarok nem biztosítják nekik azokat a jogokat, melyek
          fennmaradásukhoz és fejlődésükhöz szükségesek. Hatalmas viták dúltak a
          politikában, s ebben a küzdelemben az is megfogalmazódott, hogy a
          magyar görögkatolikusok mozgalma csupán a nemzetiségek
          elmagyarosítását szolgálja. Ez a vád Rómába is eljutott, ahol a XIII.
          Leó pápa környezetében sokan hitelt adtak neki. A magyar
          görögkatolikusok ugyan csak azt akarták elérni, amit a románok már
          évszázadokkal korábban megkaptak, vagyis hogy ők is az anyanyelvükön
          imádkozhassanak a templomban, most mégis a puszta létezésüket kellett
          bizonygatni.
        </p>
        <p className="pb-1">
          A sok-sok csalódás és az újra és újra megfogalmazott vádak nem vették
          el a kedvüket a küzdelemtől. Három évtizeddel a hajdúdorogi
          kongresszus után 1898-ban Budapesten megalakult a Görög Szertartású
          Katolikus Magyarok Országos Bizottsága. Elnöke Szabó Jenő (1843-1921),
          miniszteri tanácsos lett, aki a politika világában nagyon járatos
          volt. Tudta, hogy a magyar görögkatolikusokkal szembeni vádakat és
          ellenérzéseket csak nagy odafigyeléssel lehet leküzdeni. Az Országos
          Bizottság szükségesnek látta a pápa meggyőzését arról, hogy a magyar
          görögkatolikusok igenis léteznek. Ezért 1900. március 6-9. között
          nagyszabású római zarándoklatot szerveztek, melyen 461 zarándok
          (köztük 67 lelkész) vett részt. A zarándokok találkoztak XIII. Leó
          pápával is, akinek előadták kérésüket: szeretnék a szertartásaikat
          magyar nyelven végezni és a magyar görögkatolikus egyházközségek
          számára egy saját egyházmegyét kérnek. A zarándoklat után Rómában
          jelentősen javult a magyar görögkatolikusokról kialakult kép, de a két
          kérés közül csak az egyházmegye alapítása terén történt előrelépés. A
          magyar nyelv liturgikus használatát Róma továbbra sem engedélyezte.
          Ezt ma már talán furcsának találhatod, de ez teljesen megfelelt az
          akkori gondolkodásnak. Amint említettem, a római katolikus egyházban
          ekkor még a latint használták a liturgiában, ehhez nagyon
          ragaszkodtak, s el sem tudták képzelni, hogy népnyelven is lehetne
          szentmisét végezni. Rómában attól féltek, hogy ha a magyar
          görögkatolikusoknak megengedik az anyanyelvük használatát, akkor a
          római katolikus magyarok is azt fogják kérni.
        </p>
        <div className="img-container all-center mb img-float-left">
          <LazyLoad debounce={false} offsetVertical={500}>
            <img
              className="rounded"
              src={alapitoBulla}
              alt="Az alapító bulla"
            />
          </LazyLoad>
          <p className="card-2 p">Az alapító bulla</p>
        </div>
        <p className="pb-1">
          A római zarándoklat után még hosszú évek teltek el az egyházmegye
          felállításáig. A magyar görögkatolikusok a kormány támogatásával
          szerették volna megszerezni a pápa engedélyét nem csak a Hajdúdorogi
          Egyházmegye megalapításához, hanem a magyar nyelv liturgikus
          használatához is. Amikor belátták, hogy erre nincs esély, akkor
          elfogadták, hogy egyelőre csak magyar görögkatolikus egyházmegye
          létesülhet. A Hajdúdorogi Egyházmegyét sok-sok magyar görögkatolikus
          nagy örömére Ferenc József király 1912. május 6-án alapította meg.
          Biztosan csodálkozol azon, hogy miért nem a pápa döntött az
          alapításról? A válasz nagyon egyszerű: Szent István királytól kezdve
          Magyarország királyainak megvolt az a joga, hogy az országban
          egyházmegyéket hozzanak létre és püspököket nevezzenek ki. Ezt a jogot
          főkegyúri jognak hívjuk, s amíg Magyarország királyság volt, az
          uralkodókat ez a jog megillette. Természetesen a pápának jóvá kellett
          hagyni ezeket az intézkedéseket. Ez így történt a Hajdúdorogi
          Egyházmegye alapításakor is. X. Szent Piusz pápa (1903-1914) 1912.
          június 8-án adta ki a Christifideles graeci kezdetű bullát, amivel az
          alapítást jóváhagyta.
        </p>
        <div className="img-container all-center mb img-float-right">
          <LazyLoad debounce={false} offsetVertical={500}>
            <img
              className="rounded"
              src={miklosyIstvan}
              alt="Miklósy István püspök"
            />
          </LazyLoad>
          <p className="card-2 p">Miklósy István püspök</p>
        </div>
        <p className="pb-1">
          A Hajdúdorogi Egyházmegye megalapítása hatalmas örömmel töltötte el a
          magyar görögkatolikusokat. Örömüket az sem árnyékolta be, hogy a pápa
          elrendelte: a magyar nyelvet nem szabad használni az új
          egyházmegyében, hanem helyette az ógörögöt kell bevezetni. Erre
          azonban csak részben került sor: a Szent Liturgiában az átváltozatás
          szavait mondták görögül a papok, míg a többi részt magyarul végezték.
          A Hajdúdorogi Egyházmegyébe 162 egyházközség került. Ezek többsége
          Kelet-Magyarországon volt, de 35 a Székelyföldön. Ez utóbbiak részére
          hozták létre a Székelyföldi Külhelynökséget. Az egyházmegyét a pápa
          megbízásából Papp Antal munkácsi püspök szervezte meg. Ferenc József
          király 1913. április 21-én nevezte ki az egyházmegye első püspökét,
          Miklósy István (1857-1937) sátoraljaújhelyi parókus, zempléni
          főesperes személyében. Felszentelésére Hajdúdorogon került sor 1913.
          október 5-én. Miklósy püspök az egyházmegye székhelyét ideiglenesen
          Debrecenbe helyezte.
        </p>
        <div className="img-container all-center mb">
          <LazyLoad debounce={false} offsetVertical={500}>
            <img
              className="rounded"
              src={debreceniBombamerenyletAldozatai}
              alt="A debreceni bombamerénylet áldozatai: Jaczkovics Mihály, Dr. Csatth Sándor és Slepkovszky János"
            />
          </LazyLoad>
          <p className="card-2 p">
            A debreceni bombamerénylet áldozatai: Jaczkovics Mihály, Dr. Csatth
            Sándor és Slepkovszky János
          </p>
        </div>
        <p className="pb-1">
          A Hajdúdorogi Egyházmegye megalapítására és az első püspök
          kinevezésére akkor került sor, amikor Európa egén sötét fellegek
          gyülekeztek. Biztosan hallottál már arról, hogy 1914 nyarán hatalmas
          háború tört ki, amit a méretei miatt első világháborúnak neveznek. Ez
          a hatalmas pusztítással és a sok-sok szenvedéssel járó háború a magyar
          görögkatolikusok életét és a Hajdúdorogi Egyházmegye fejlődését is
          megnehezítette. Egy háború kitörésének mindig sok oka van, de köztük a
          legsúlyosabb a különböző nemzetek egymás iránti gyűlölete. Korábban
          említettem, hogy ebben a korszakban Magyarország népei között súlyos
          ellentétek és feszültségek voltak, s ennek a Hajdúdorogi Egyházmegye
          megalapításakor is jelentősége volt. A románok ellenezték a magyar
          görögkatolikus egyházmegye létrejöttét, mivel úgy érezték, hogy az
          ellenük irányul. Csak nagyon nehezen nyugodtak bele az uralkodó és a
          pápa döntésébe. A közelgő nagy háborúra készülve ezt az ellentétet
          Magyarország ellenségei is kihasználták. Az orosz titkosszolgálat
          felbérelt néhány román kalandort, hogy öljék meg az újonnan kinevezett
          hajdúdorogi püspököt, s ezzel fokozzák a feszültséget a magyarok és a
          románok között. Ezzel akarták gyengíteni Magyarországot a háború
          előtt. Erre a merényletre 1914 februárjában került sor. Február 21-én
          Czernowitzból „Kovács Anna” álnévvel feladott levél érkezett a
          püspökségre. A levél írója azt közölte Miklósy István püspökkel, hogy
          címére 100 koronát, egy aranyozott templomi csillárt és leopárdbőrt
          tartalmazó csomagot adott fel. A húsz kilogrammos küldemény február
          23-án meg is érkezett. Slepkovszky János püspöki titkár baltával
          próbálta felbontani a csomagot, melynek tartalma ekkor felrobbant. A
          robbanás kidöntötte a falakat, átszakította födémet és darabokra
          szaggatta Jaczkovics Mihály helynököt, Slepkovszky János titkárt,
          halálosan megsebesítette dr. Csatth Sándor ügyvédet, az egyházmegye
          ügyészét, aki a merénylet után még egy órát élt. Miklósy István
          püspököt a csomag kibontása előtt egy másik szobába telefonhoz hívták,
          így ő csak kisebb sérüléseket szenvedett.
        </p>
        <div className="img-container all-center mb img-float-left">
          <LazyLoad debounce={false} offsetVertical={500}>
            <img className="rounded" src={pappAntal} alt="Papp Antal érsek" />
          </LazyLoad>
          <p className="card-2 p">Papp Antal érsek</p>
        </div>
        <p className="pb">
          A merénylet után Miklósy püspök áthelyezte székhelyét Nyíregyházára
          (ma is ott található) és folytatta az egyházmegye megszervezését.
          Hatalmas munka várt rá, de az első világháború és az azt követő
          viszontagságos időszak miatt nagyon sok tervét nem tudta
          megvalósítani. A háborút lezáró trianoni béke következtében a
          Hajdúdorogi Egyházmegye is elvesztette egyházközségeinek a felét
          (ahogyan Magyarország területének kétharmadát). Sok tízezer magyar
          görögkatolikus Magyarország határain kívülre került. Nekik nagyon
          nehézre fordult sorsuk, mivel az új államokban - Csehszlovákiában és
          Romániában - a hatóságok minden eszközzel akadályozták, hogy
          magyarságukat és görögkatolikusságukat egyszerre élhessék meg.
          Ugyanakkor Magyarország új határain belülre került huszonegy
          görögkatolikus egyházközség, melyek nem a Hajdúdorogi Egyházmegyéhez,
          hanem az Eperjesi és a Munkácsi Egyházmegyékhez tartoztak. Mivel az
          eperjesi és a munkácsi püspöki székhely Csehszlovákiához került, a
          Magyarországon maradt egyházközségek számára XI. Piusz pápa 1924-ben
          létrehozta a Miskolci Apostoli Exarchátust, melynek főpásztora Papp
          Antal érsek lett. Ő munkácsi püspök volt, de a magyarokkal szemben
          ellenséges csehszlovák hatóságok kiutasították Csehszlovákiából. Azóta
          a magyarországi görögkatolikusok két egyházkormányzati egységben, a
          Hajdúdorogi Egyházmegyében és a Miskolci Apostoli Exarchátusban élnek.
        </p>
        <p className="pb">
          A trianoni Magyarországon a görögkatolikusok aránya nagyon lecsökkent.
          Korábban az ország lakosságának 11 százaléka volt görögkatolikus. Ez
          az az arány visszaesett 2 százalékra. Ennek azért volt jelentősége,
          mert a kevés görögkatolikus kevés figyelmet kapott az államtól. A
          Hajdúdorogi Egyházmegye alapításakor a magyar kormány vállalta, hogy
          felépíti azokat az intézményeket, melyre az új püspökségnek szüksége
          volt: papnevelő intézetet, tanító- és kántorképzőt, egyházmegyei
          központot (püspöki hivatal, püspöki palota). Ezek megvalósítása a
          háború utáni súlyos helyzetben egyébként is nehéz lett volna. Mivel a
          görögkatolikusok aránya igen alacsony volt, kevesen emeltek szót az
          érdekükben, így ezek a nagyon fontos építkezések elmaradtak.
        </p>
        <p className="pb">
          A görögkatolikusok azzal próbáltak meg maguk is javítani helyzetükön,
          hogy szervezeteket hoztak létre. A legfontosabb ezek közül a Magyar
          Görögkatolikusok Országos Szövetsége (MAGOSZ) volt, mely 1921. október
          elsején alakult meg Máriapócson. A MAGOSZ-nak az volt a feladata, hogy
          összefogja a görögkatolikusokat, s a közéletben és a politikában
          képviselje az érdekeiket. A görögkatolikusok közötti kapcsolattartást
          szolgálták az újságok is: a Görögkatholikus Tudósító, a Máriapócsi
          Naptár, majd pedig a Görögkatolikus Szemle, amit te is jól ismerhetsz,
          illetve a Keleti Egyház. Ezeket a szervezeteket és újságokat kiváló és
          egyházukat szerető emberek (papok és világiak) vezették. Néhányuk
          nevét érdemes megjegyezned: Illés József nemzetközileg elismert
          jogtudós volt, aki a magyar görögkatolikusok érdekében többször járt a
          pápánál, Bud János közgazdász, aki az első világháború után
          pénzügyminiszterként újjáépítette a magyar gazdaságot, a MAGOSZ
          vezetésében vállalt szerepet, Gróh István, az Iparművészeti Főiskola
          rektora, a görögkatolikus sajtó megteremtéséért munkálkodott Kozma
          János miskolci parókussal, Hodinka Antal, nemzetközi hírű történész, a
          görögkatolikusok történetét kutatta, Szántay-Szémán István, az
          exarchátus helynöke, a Keleti Egyház című folyóirat megalapításával a
          görögkatolikus egyházak és hagyományaik megismertetését szolgálta,
          Rohály Ferenc és Krajnyák Gábor a liturgikus szövegek és énekek
          kiadásában szereztek érdemeket. Ők mindannyian a magyar
          görögkatolikusság szolgálatába állították tehetségüket és
          szorgalmukat, amiért az utókor hálával emlékezik meg róluk.
        </p>
        <p className="pb-1">
          Az első világháború után Magyarországon csak egy bazilita monostor
          maradt: a máriapócsi. A szerzetesek mindig fontos szerepet játszanak
          az egyház életében. A magyar görögkatolikusoknak is nagy szükségük
          volt rájuk. Máriapócson a zarándokok fogadása mellett
          lelkigyakorlatokat szerveztek papoknak és világiaknak. 1933-tól a
          baziliták Hajdúdorogon is építkezésbe kezdtek, hogy Máriapócs mellett
          ott is megtelepedhessenek. Vezetőjük ekkor Dudás Miklós volt, aki
          bazilita elöljáróként megszervezte a bazilita nővérek hajdúdorogi és
          máriapócsi letelepülését is.
        </p>
        <div className="img-container all-center mb img-float-right">
          <LazyLoad debounce={false} offsetVertical={500}>
            <img
              className="rounded"
              src={dudasMiklos}
              alt="Dudás Miklós püspök"
            />
          </LazyLoad>
          <p className="card-2 p">Dudás Miklós püspök</p>
        </div>
        <p className="pb">
          A Hajdúdorogi Egyházmegye első püspöke, Miklósy István 1937-ben halt
          meg. Az utódját Dudás Miklós bazilita szerzetes személyében 1939-ben
          nevezte ki XII. Piusz pápa. Az új püspök nagy lendülettel látott
          munkához, de a kinevezése után néhány hónappal kitört a 2.
          világháború, mely rengeteg pusztulással és szenvedéssel járt. 1944
          őszén és 1945 tavaszán a szovjet hadsereg elfoglalta Magyarországot,
          ami nem csak a háború végét, hanem egy új, az egyházak és a vallásos
          emberek számára sok-sok megpróbáltatással járó korszak kezdetét is
          jelentette. A Szovjetúnió ugyanis kommunista állam volt, mely 1917 óta
          hivatalosan is tagadta Isten létét, üldözte az egyházakat és a
          vallásos embereket. A Szovjetúnióban sok százezer hívőt és papot
          gyilkoltak meg vagy ítéltek hosszú börtönbüntetésre csak azért, mert
          nem tagadták meg a hitüket. Amikor a háború győzteseként a szovjet
          hadsereg elfoglalta a kelet-európai országokat, köztük hazánkat, a
          vallás- és egyházellenes politikát is rákényszerítette a leigázott
          népekre. Amikor 1947-től a szovjet hadsereg támogatásával a magyar
          kommunisták átvették a hatalmat, Magyarországon is elkezdődött az
          egyházak üldözése. Püspököket (biztosan hallottad már Mindszenty
          József bíboros nevét), papokat és híveket börtönöztek be és hurcoltak
          meg. Betiltották a szerzetesrendek működését (a bazilitáknak is el
          kellett hagyniuk a máriapócsi monostort és a hajdúdorogi rendházat),
          megtiltották az iskolai hitoktatást, államosították az egyházi
          iskolákat. Ez a sötét kor nagy próbatételt jelentett a
          görögkatolikusoknak is, akiknek attól is kellett tartaniuk, hogy a
          kommunisták felszámolják az egyházukat, ahogyan azt a szovjetek is
          megtették. Biztosan hallottál boldog Romzsa Tódor munkácsi püspökről,
          akit a szovjet kommunisták gyilkoltak meg 1947-ben. Meggyilkolása után
          a szovjet hatóságok betiltották a görögkatolikus egyház működését a
          Szovjetunióban. Dudás Miklós püspök az ellenséges államhatalomnak
          kiszolgáltatva és eszközök nélkül az isteni Gondviselésbe vetett
          hittel vezette egyházunkat ebben a nehéz időszakban. 1972-ben
          bekövetkezett haláláig a kedvezőtlen körülmények ellenére két nagyon
          fontos eredményt el tudott érni.
        </p>
        <p className="pb">
          1950-ben teljesült a magyar görögkatolikusok régi vágya: Dudás Miklós
          püspök ekkor alapította meg Nyíregyházán a papnevelő intézetet és
          hittudományi főiskolát, melyek ma is működnek (a főiskolát Szent
          Atanáz Görögkatolikus Hittudományi Főiskolaként ismerheted). A másik
          fontos eredmény egy szintén régi vágy beteljesülése volt: 1965.
          november 19-én Rómában, a Szent Péter Bazilikában Dudás Miklós püspök
          magyar nyelvű Szent Liturgiát mutatott be több száz püspök előtt, akik
          a II. Vatikáni Zsinat tanácskozásán vettek részt. A zsinat úgy
          döntött, hogy a római katolikus egyházban az addig kizárólagos latin
          mellett a nemzeti nyelvek is használhatók a liturgiában. Ezzel
          elhárult az akadály a magyar nyelv liturgikus használata előtt is,
          amiért őseink oly sokat küzdöttek.
        </p>
        <h4 className="pb">Kedves görögkatolikus barátom!</h4>
        <p className="pb">
          Amikor ebben az esztendőben egyházmegyénk alapításának századik
          évfordulójára emlékezünk, fontos, hogy megemlékezzünk őseink
          küzdelméről. Láthatod, milyen sok áldozatot kellett hozniuk, milyen
          nagy kitartással kellett küzdeniük azért, hogy elérjék céljukat. Erőt
          az egyház iránti szeretetükből, a bizánci szertartáshoz, a katolikus
          hithez és a magyarságukhoz való ragaszkodásukból merítettek.
        </p>
        <p className="quote text-center">
          Tiszteld őseidet és szeresd görögkatolikus egyházadat az ő
          szeretetükkel!
        </p>
      </div>
    </div>
  );
}
