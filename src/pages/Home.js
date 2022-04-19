import React from 'react';
import { Row, Col, Container, Parallax } from 'react-materialize';
import Player from '../elements/vidIndex'
import Nav from "../elements/Nav"
import hero from "../media/img/home/1.webp"
import StyleStories from "../elements/StyleStories"
// import Stories from "../elements/Stories"
import CollapsibleJobs from "../elements/CollapsableJobs"
import WhiteSection from "../elements/WhiteSection"
import {Foot} from '../elements/Footer'
class Home extends React.Component {
  render() {
    return (
      <span >
        <Nav color="nav-glass"/>
        <div className="hide-on-med-and-up"><div className="navfixer"/></div>
        <Player/>
        <WhiteSection />
        <Parallax
          image={<img width="500" src={hero}></img>}
          options={{
            responsiveThreshold: 0
          }}
        />
        
        <StyleStories hdr="Style Stories"/>
        <Container>
          <Row>
              <CollapsibleJobs />
          </Row>
        </Container>
<Foot />  
      </span>
    );
  }
}
export default Home;