import React from "react";
import { Container, Row, Col, MediaBox } from 'react-materialize';
import Nav from "../elements/Nav"

var { item } = [];

// function importAll(r) {
//   return r.keys().map(r);
// }
export default class App extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    item = this.importAll(require.context('../media/gallery/sink/', false, /\.(webp)$/));
    // item = this.importAll(require.context('../media/gallery/sink/', false, /\.(png|jpe?g|svg)$/));

  }
  render() {
    console.log(item)
    return (
      <body style={{ backgroundColor: "#000" }}>
        <Nav  color="glass-lite"/>
  
            <Container>
              <h5 id='exotic'>Slab Sink</h5>
              {/* <p className="white-text">Working with semi-precious/item stone takes extreme attention to detail. You must have the knowledge and experience to use the proper materials on these sensitive stones to be sure they maintain their beauty. You also have to be invested into the proper tools to cut these materials correctly. We take great pride and responsibility when working with these stones. It is less work and more of an art when the opportunity to work with these products presents itself.</p> */}
              <Row className="black">
                <br />
                {item.map((image, index) => <Col className="gallery-container" s={12} m={4} l={3} style={{ padding: "0px" }}><MediaBox className="gallery-item"><img alt={index} src={image.default} alt="info" /></MediaBox></Col>)}
              </Row>
            </Container>
   
      </body>
    )
  }
}