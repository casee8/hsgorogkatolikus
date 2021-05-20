import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import maripocsiSzuzanya from "../media/mariapocsi-szuzanya.jpg";
import icon from "../media/icon.jpg";

class News extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="title header text-center py-3">
          Görögkatolikus hírek, események
        </h3>
        <div className="mb-1">
          <div className="content mb-1">
            <h4 className="p-1 text-center">
              Ikonfestő-kör indul a Hit és Kulturális Közösségi házban
            </h4>
            <div>
              <div className="mb">
                <LazyLoad
                  className="all-center mb"
                  debounce={false}
                  offsetVertical={500}
                >
                  <img src={icon} alt="Ikonfestő-kör" />
                </LazyLoad>
                <p className="pb text-center">
                  2021. május 25-én, kedden 17:30-kor. Témakör: Ikon èrtelme,
                  tisztelet. Hogyan készūl egy ikon?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
