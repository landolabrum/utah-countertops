import React from 'react';
import { Row, Col } from 'react-materialize';

import Nav from "../elements/Nav"
import Residential from "../elements/residential"
import quartz from "../media/img/textures/quartz.webp"
import marble from "../media/img/textures/marble.webp"
import quartzite from "../media/img/textures/quartzite.webp"
import granite from "../media/img/textures/granite.webp"
import porcelain from "../media/img/textures/porcelain.webp"


var l = [
  {
    // img: q,
    txt: "Quartz",
    img: quartz,
  },
  {
    // img: m,
    txt: "Marble",
    img: marble,
  }, {
    // img: g,
    txt: "Granite",
    img: granite,
  }, {
    // img: qz,
    txt: "Quartzite",
    img: quartzite,
  }, {
    // img: p,
    txt: "Porcelain",
    img: porcelain,
  },
];

class ResidentialGallery extends React.Component {
  render() {
    const listItems = l.map((l) =>
    <span>
      <Col s={12} m={6} >
        <div className="overlay-container">
        <h6 className="overlay-text">{l.txt}</h6>
        <img className="overlay-image" src={l.img} />
        </div>
      </Col>
      </span>
    );
    return (
      <span>
        <h3>&nbsp;&nbsp;Available Materials</h3>
        <Row>
          {listItems}
        </Row>
      </span>
    );
  }
}


export default class Main extends React.Component {
  render() {
    return (
      <span>
        <Nav  color="glass-lite" />
        <br />
        <Residential />
        <br />
        <ResidentialGallery />
      </span>
    );
  }
}