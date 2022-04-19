
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel} from 'react-responsive-carousel';
import q from '../media/img/residential/Quartz-Countertop.webp'
import m from '../media/img/residential/marble.webp'
import g from '../media/img/residential/granite.webp'
import qz from '../media/img/residential/Quartzite.webp'
import p from '../media/img/residential/porcelain.webp'
import {Link} from 'react-router-dom';


import { Row, Col } from 'react-materialize';


var l = [
    {
        img: q,
        txt: "Quartz"
    },
    {
        img: m,
        txt: "Marble"
    }, {
        img: g,
        txt: "Granite"
    }, {
        img: qz,
        txt: "Quartzite"
    }, {
        img: p,
        txt: "Porcelain"
    },
];

export default class ResFull extends React.Component {
    render() {
        const listItems = l.map((l) =>
            <span>
                <img className="carousel" src={l.img} />
                <span className='llegend'>{l.txt}</span>
            </span>
            //   <li key={link.endpoint}>{link.endpoint}</li> 
        );
        return (
            <Row style={{marginTop: "88px"}}>
                <Col s={12} m={6}>
                    <h5 >MADE TO ORDER</h5>
                    <p ><a >Call us</a>, for custom countertops. Our in house fabrication capabilities allow us to help your interior designer's vision become a reality. Whether your project calls for quartz, marble, or granite, or even custom laminam or Neolith, we specialize in high end quality, in all shapes and edge types. We flourish when working on creative and unique projects and take pride in providing exceptional quality, no matter how custom.</p>
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

export class ResDesc extends React.Component {
    render() {
        const listItems = l.map((l) =>
            <span>
                <img className="carousel" src={l.img} />
                <span className='llegend'>{l.txt}</span>
            </span>

        );
        return (
            <Row >
                <Col s={12} >
                    <h5 className="black-text">MADE TO ORDER</h5>
                    <p className="black-text">Call us for Utah custom countertops. Our in house fabrication capabilities allow us to help your interior designer's vision become a reality. Whether your project calls for quartz, marble, or granite, or even custom laminam or Neolith, we specialize in high end quality, in all shapes and edge types. We flourish when working on creative and unique projects and take pride in providing exceptional quality, no matter how custom.</p>
                </Col>
                <div className="right divy">
                    <Link className='btn blue waves-effect waves-light' to="/residential">Learn More</Link>
                </div>
                {/* <Link className='black-text' to="/commercial">Commercial</Link> */}
                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                    {listItems}
                </Carousel>
            </Row>
        );
    }
}
// {
//     "Version": "2012-10-17",
//     "Statement": [
//         {
//             "Sid": "PublicReadGetObject",
//             "Effect": "Allow",
//             "Principal": "*",
//             "Action": "s3:GetObject",
//             "Resource": "arn:aws:s3:::www.utahcountertops.com/*"
//         }
//     ]
// }
