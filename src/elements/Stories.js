
import React from 'react';
import { Row, Col, Container, Section } from 'react-materialize';

var ls = [{ "name": "gallery", "type": "directory", "children": [{ "name": "limestone", "type": "directory", "children": [{ "name": "9.webp", "type": "file" }, { "name": "11.webp", "type": "file" }, { "name": "10.webp", "type": "file" }, { "name": "4.webp", "type": "file" }, { "name": "5.webp", "type": "file" }, { "name": "7.webp", "type": "file" }, { "name": "6.webp", "type": "file" }, { "name": "2.webp", "type": "file" }, { "name": "3.webp", "type": "file" }, { "name": "1.webp", "type": "file" }] }, { "name": "marble", "type": "directory", "children": [{ "name": "8.webp", "type": "file" }, { "name": "9.webp", "type": "file" }, { "name": "14.webp", "type": "file" }, { "name": "15.webp", "type": "file" }, { "name": "17.webp", "type": "file" }, { "name": "16.webp", "type": "file" }, { "name": "12.webp", "type": "file" }, { "name": "13.webp", "type": "file" }, { "name": "11.webp", "type": "file" }, { "name": "10.webp", "type": "file" }, { "name": "21.webp", "type": "file" }, { "name": "20.webp", "type": "file" }, { "name": "18.webp", "type": "file" }, { "name": "19.webp", "type": "file" }, { "name": "4.webp", "type": "file" }, { "name": "5.webp", "type": "file" }, { "name": "7.webp", "type": "file" }, { "name": "6.webp", "type": "file" }, { "name": "2.webp", "type": "file" }, { "name": "3.webp", "type": "file" }, { "name": "1.webp", "type": "file" }] }, { "name": "travertine", "type": "directory", "children": [{ "name": "8.webp", "type": "file" }, { "name": "4.webp", "type": "file" }, { "name": "5.webp", "type": "file" }, { "name": "7.webp", "type": "file" }, { "name": "6.webp", "type": "file" }, { "name": "2.webp", "type": "file" }, { "name": "3.webp", "type": "file" }, { "name": "1.webp", "type": "file" }] }, { "name": "granite", "type": "directory", "children": [{ "name": "8.webp", "type": "file" }, { "name": "9.webp", "type": "file" }, { "name": "14.webp", "type": "file" }, { "name": "15.webp", "type": "file" }, { "name": "17.webp", "type": "file" }, { "name": "16.webp", "type": "file" }, { "name": "12.webp", "type": "file" }, { "name": "13.webp", "type": "file" }, { "name": "11.webp", "type": "file" }, { "name": "10.webp", "type": "file" }, { "name": "21.webp", "type": "file" }, { "name": "20.webp", "type": "file" }, { "name": "22.webp", "type": "file" }, { "name": "23.webp", "type": "file" }, { "name": "18.webp", "type": "file" }, { "name": "24.webp", "type": "file" }, { "name": "25.webp", "type": "file" }, { "name": "19.webp", "type": "file" }, { "name": "4.webp", "type": "file" }, { "name": "5.webp", "type": "file" }, { "name": "7.webp", "type": "file" }, { "name": "6.webp", "type": "file" }, { "name": "2.webp", "type": "file" }, { "name": "3.webp", "type": "file" }, { "name": "1.webp", "type": "file" }] }, { "name": "quartzite", "type": "directory", "children": [{ "name": "8.webp", "type": "file" }, { "name": "9.webp", "type": "file" }, { "name": "14.webp", "type": "file" }, { "name": "15.webp", "type": "file" }, { "name": "17.webp", "type": "file" }, { "name": "16.webp", "type": "file" }, { "name": "12.webp", "type": "file" }, { "name": "13.webp", "type": "file" }, { "name": "11.webp", "type": "file" }, { "name": "10.webp", "type": "file" }, { "name": "18.webp", "type": "file" }, { "name": "19.webp", "type": "file" }, { "name": "4.webp", "type": "file" }, { "name": "5.webp", "type": "file" }, { "name": "7.webp", "type": "file" }, { "name": "6.webp", "type": "file" }, { "name": "2.webp", "type": "file" }, { "name": "3.webp", "type": "file" }, { "name": "1.webp", "type": "file" }] }, { "name": "porcelain", "type": "directory", "children": [{ "name": "8.webp", "type": "file" }, { "name": "9.webp", "type": "file" }, { "name": "14.webp", "type": "file" }, { "name": "28.webp", "type": "file" }, { "name": "29.webp", "type": "file" }, { "name": "15.webp", "type": "file" }, { "name": "17.webp", "type": "file" }, { "name": "16.webp", "type": "file" }, { "name": "12.webp", "type": "file" }, { "name": "13.webp", "type": "file" }, { "name": "11.webp", "type": "file" }, { "name": "10.webp", "type": "file" }, { "name": "21.webp", "type": "file" }, { "name": "20.webp", "type": "file" }, { "name": "22.webp", "type": "file" }, { "name": "23.webp", "type": "file" }, { "name": "27.webp", "type": "file" }, { "name": "32.webp", "type": "file" }, { "name": "26.webp", "type": "file" }, { "name": "18.webp", "type": "file" }, { "name": "30.webp", "type": "file" }, { "name": "24.webp", "type": "file" }, { "name": "25.webp", "type": "file" }, { "name": "31.webp", "type": "file" }, { "name": "19.webp", "type": "file" }, { "name": "4.webp", "type": "file" }, { "name": "5.webp", "type": "file" }, { "name": "7.webp", "type": "file" }, { "name": "6.webp", "type": "file" }, { "name": "2.webp", "type": "file" }, { "name": "3.webp", "type": "file" }, { "name": "1.webp", "type": "file" }] }, { "name": "quartz", "type": "directory", "children": [{ "name": "48.webp", "type": "file" }, { "name": "49.webp", "type": "file" }, { "name": "8.webp", "type": "file" }, { "name": "9.webp", "type": "file" }, { "name": "14.webp", "type": "file" }, { "name": "28.webp", "type": "file" }, { "name": "29.webp", "type": "file" }, { "name": "15.webp", "type": "file" }, { "name": "17.webp", "type": "file" }, { "name": "16.webp", "type": "file" }, { "name": "12.webp", "type": "file" }, { "name": "13.webp", "type": "file" }, { "name": "39.webp", "type": "file" }, { "name": "11.webp", "type": "file" }, { "name": "10.webp", "type": "file" }, { "name": "38.webp", "type": "file" }, { "name": "35.webp", "type": "file" }, { "name": "21.webp", "type": "file" }, { "name": "20.webp", "type": "file" }, { "name": "34.webp", "type": "file" }, { "name": "22.webp", "type": "file" }, { "name": "36.webp", "type": "file" }, { "name": "37.webp", "type": "file" }, { "name": "23.webp", "type": "file" }, { "name": "27.webp", "type": "file" }, { "name": "33.webp", "type": "file" }, { "name": "32.webp", "type": "file" }, { "name": "26.webp", "type": "file" }, { "name": "18.webp", "type": "file" }, { "name": "30.webp", "type": "file" }, { "name": "24.webp", "type": "file" }, { "name": "25.webp", "type": "file" }, { "name": "31.webp", "type": "file" }, { "name": "19.webp", "type": "file" }, { "name": "4.webp", "type": "file" }, { "name": "42.webp", "type": "file" }, { "name": "43.webp", "type": "file" }, { "name": "5.webp", "type": "file" }, { "name": "41.webp", "type": "file" }, { "name": "7.webp", "type": "file" }, { "name": "6.webp", "type": "file" }, { "name": "40.webp", "type": "file" }, { "name": "44.webp", "type": "file" }, { "name": "2.webp", "type": "file" }, { "name": "50.webp", "type": "file" }, { "name": "3.webp", "type": "file" }, { "name": "51.webp", "type": "file" }, { "name": "45.webp", "type": "file" }, { "name": "53.webp", "type": "file" }, { "name": "1.webp", "type": "file" }, { "name": "47.webp", "type": "file" }, { "name": "46.webp", "type": "file" }, { "name": "52.webp", "type": "file" }] }, { "name": "exotic", "type": "directory", "children": [{ "name": "1.mp4", "type": "file" }, { "name": "8.webp", "type": "file" }, { "name": "9.webp", "type": "file" }, { "name": "5.webp", "type": "file" }, { "name": "7.webp", "type": "file" }, { "name": "6.webp", "type": "file" }, { "name": "2.webp", "type": "file" }, { "name": "3.webp", "type": "file" }, { "name": "1.webp", "type": "file" }] }] }]

function R(props) {
  if (props.imgfirst) {
    return (
      <Section>
        <Row>
          <Col s={props.s} m={props.m} l={props.l}>
            <img className="responsive-img" src={props.img} />
          </Col>
          <Col s={props.s} m={props.m} l={props.l}>
            <h5>{props.hdr}</h5>
            <p>{props.txt}</p>
          </Col>
        </Row>
      </Section>
    );
  } else {
    return (
      <Section>
        <Row>
          <Col s={props.s} m={props.m} l={props.l}>
            <h5>{props.hdr}</h5>
            <p>{props.txt}</p>
          </Col>
          <Col s={props.s} m={props.m} l={props.l}>
            <img className="responsive-img" src={props.img} />
          </Col>
        </Row>
      </Section>
    );
  }
}


// var ls = [
//   {
//     fi: '1',
//     fo: 'exotic',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '2',
//     fo: 'exotic',
//     txt: '',
//     imgf: false,
//     hdr: '',
//     txt: ''
//   },  {
//     fi: '3',
//     fo: 'exotic',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '9',
//     fo: 'exotic',
//     txt: '',
//     imgf: false,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '5',
//     fo: 'exotic',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '6',
//     fo: 'exotic',
//     txt: '',
//     imgf: false,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '7',
//     fo: 'exotic',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '8',
//     fo: 'exotic',
//     txt: '',
//     imgf: false,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '1',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '2',
//     fo: 'granite',
//     txt: '',
//     imgf: false,
//     hdr: '',
//     txt: ''
//   },  {
//     fi: '3',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '9',
//     fo: 'granite',
//     txt: '',
//     imgf: false,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '5',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '6',
//     fo: 'granite',
//     txt: '',
//     imgf: false,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '7',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '8',
//     fo: 'granite',
//     txt: '',
//     imgf: false,
//     hdr: '',
//     txt: ''
//   },





//   {
//     fi: '9',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '10',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '11',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '12',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '13',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '14',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '15',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '16',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '17',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '18',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '19',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '20',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '21',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '22',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '23',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '24',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },
//   {
//     fi: '25',
//     fo: 'granite',
//     txt: '',
//     imgf: true,
//     hdr: '',
//     txt: ''
//   },


// ];

// const gcloud_storage = 'https://storage.googleapis.com/deepturn_assets/utah_countertops/gallery/'
const gcloud_storage = '/Users/landonlabrum/Downloads/gallery'

export default class Navigation extends React.Component {
  render(props) {
    const listItems = ls.map((l) =>
      <R s={6}
        offset='m3'
        hdr={l.hdr}
        txt={l.txt}
        img={gcloud_storage + l.fo + '/' + l.fi + '.webp'}
        imgfirst={l.imgf}
      />
    );
    return (
      <div className="navigation">
        <h2>{this.props.hdr}</h2>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}
