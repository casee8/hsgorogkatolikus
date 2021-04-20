import React from "react";
import LazyLoad from "react-lazy-load";
import gorogkatolikusMetropolia from "../media/iconsForLinks/gorogkatolikusmetropolia.jpg";
import hajdudorogiFoegyhazmegye from "../media/iconsForLinks/hajdudorogi-foegyhazmegye.jpg";
import nyiregyhaziEgyhazmegye from "../media/iconsForLinks/nyiregyhazi-foegyhazmegye.jpg";
import miskolciEgyhazmegye from "../media/iconsForLinks/miskolci-egyhazmegye.jpg";
import mariapocsNemzetiKegyhely from "../media/iconsForLinks/mariapocs-nemzeti-kegyhely.jpg";
import szentLukacsGkatSzeretetszolgalat from "../media/iconsForLinks/szent-lukacs-gorogkatolikus-szeretetszolgalat.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex icon-links-container">
        <LazyLoad className="all-center" debounce={false} offsetVertical={500}>
          <a href="https://www.gorogkatolikus.hu" target="_blank" rel='noreferrer noopener'>
            <img
              className="icon-links"
              src={gorogkatolikusMetropolia}
              alt="Görögkatolikus Metropólia"
            />
          </a>
        </LazyLoad>
        <LazyLoad className="all-center" debounce={false} offsetVertical={500}>
          <a href="https://www.hd.gorogkatolikus.hu" target="_blank" rel='noreferrer noopener'>
            <img
              className="icon-links"
              src={hajdudorogiFoegyhazmegye}
              alt="Hajdúdorogi Főegyházmegye"
            />
          </a>
        </LazyLoad>
        <LazyLoad className="all-center" debounce={false} offsetVertical={500}>
          <a href="https://www.nyirgorkat.hu" target="_blank" rel='noreferrer noopener'>
            <img
              className="icon-links"
              src={nyiregyhaziEgyhazmegye}
              alt="Nyíregyházi Egyházmegye"
            />
          </a>
        </LazyLoad>
        <LazyLoad className="all-center" debounce={false} offsetVertical={500}>
          <a href="https://www.migorkat.hu" target="_blank" rel='noreferrer noopener'>
            <img
              className="icon-links"
              src={miskolciEgyhazmegye}
              alt="Miskolci Egyházmegye"
            />
          </a>
        </LazyLoad>
        <LazyLoad className="all-center" debounce={false} offsetVertical={500}>
          <a href="http://www.mariapocskegyhely.eu" target="_blank" rel='noreferrer noopener'>
            <img
              className="icon-links"
              src={mariapocsNemzetiKegyhely}
              alt="Szent Lukács Görögkatolikus Szeretet"
            />
          </a>
        </LazyLoad>
        <LazyLoad className="all-center" debounce={false} offsetVertical={500}>
          <a href="https://www.szentlukacsszeretetszolgalat.hu" target="_blank" rel='noreferrer noopener'>
            <img
              className="icon-links"
              src={szentLukacsGkatSzeretetszolgalat}
              alt="Szent Lukács Görögkatolikus Szeretet"
            />
          </a>
        </LazyLoad>
      </div>
      <div className="bg-dark">
        <div>
          <p className="small text-center p-1">
            Hajdúsámsoni Görögkatolikus Parókia &copy; 2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
