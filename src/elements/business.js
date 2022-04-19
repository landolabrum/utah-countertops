
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import q from '../media/img/commercial/Quartzite.webp'
import m from '../media/img/commercial/1.webp'
import g from '../media/img/commercial/2.webp'
import qz from '../media/img/commercial/3.webp'
import p from '../media/img/commercial/4.webp'
import { Link } from 'react-router-dom';

import { Row, Col } from 'react-materialize';


var l = [
    {
        img: q,
        txt: ""
    },
    {
        img: m,
        txt: ""
    }, {
        img: g,
        txt: ""
    }, {
        img: qz,
        txt: ""
    }, {
        img: p,
        txt: ""
    },
];
export default class ComFull extends React.Component {
    render() {
        const listItems = l.map((l) =>
            <span>
                <img className="carousel" src={l.img} alt={l.img}/>
                <span className='llegend'>{l.txt}</span>
            </span>
        );
        return (
            <Row>
                <Col s={12} m={6}>
                    <h5>Commercially Viable</h5>
                    <p>We're Utah's premiere commercial countertop contractor and installer. We have the in-house fabrication capabilities and skilled workforce required to handle your next commercial project. Our decades of experience includes multiplex condominium projects, stadiums, high schools, hotels, and everything in between. Call us today to discuss your commercial countertop installation needs.</p>
                </Col>
                <Col s={12} m={6}>
                    <Carousel infiniteLoop useKeyboardArrows autoPlay>
                        {listItems}
                    </Carousel>
                </Col>

            </Row>
        );
    }
}

export class ComDesc extends React.Component {
    render() {
        const listItems = l.map((l) =>
            <span>
                <img className="carousel" src={l.img} />
                <span className='llegend'>{l.txt}</span>
            </span>
        );
        return (
            <Row>
                <Col s={12}>
                    <h5>Commercially Viable</h5>
                    <p>We're Utah's premiere commercial countertop contractor and installer. We have the in-house fabrication capabilities and skilled workforce required to handle your next commercial project. Our decades of experience includes multiplex condominium projects, stadiums, high schools, hotels, and everything in between. Call us today to discuss your commercial countertop installation needs.</p>
                </Col>
                <div className="right divy">
                    <Link className='btn blue waves-effect waves-light' to="/commercial">Learn More</Link>
                </div>
                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                    {listItems}
                </Carousel>
            </Row>
        );
    }
}



