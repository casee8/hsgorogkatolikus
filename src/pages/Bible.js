import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
// import BibleEpub from "../media/szent-biblia.epub";
import underDevelopment from '../media/under-development.jpg'

class Bible extends Component {
  render() {
    return (
      <div className="container">
        {/* <a href={BibleEpub} download>
          download
        </a> */}
        <div className="content p-1 all-center img-container">
          <LazyLoad debounce={false} offsetVertical={500}>
            <img
              className="rounded"
              src={underDevelopment}
              alt="Fejlesztés alatt"
            />
          </LazyLoad>
        </div>
      </div>
    );
  }
}

export default Bible;
