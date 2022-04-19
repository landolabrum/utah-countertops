import React from 'react';
import { Container, Row, Col, MediaBox } from 'react-materialize';
import about1 from '../media/img/about1.webp';
import about2 from '../media/img/about2.webp';
import Nav from "../elements/Nav"

class About extends React.Component {
  render() {
    return (<span><Nav  color="glass-lite"/>
      <Container>
        <Row>
          <Col>

            <h4 class="left-align hvy">ABOUT US</h4>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={6}>
            <MediaBox
              className='responsive-img'
              id="MediaBox_7"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200
              }}
            >
              <img
                alt=""
                src={about1}

              />
            </MediaBox></Col>
          <Col s={12} m={6}>

            <h4 className='left'>OUR APPROACH</h4>
            <p>Aside from customer satisfaction, our goals at Utah Countertops is to professionalism, perfection and to always be on schedule with our tasks. With an immense passion for the work we do, we aim to exceed the expectations of our customers.</p>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={6}>
            <MediaBox
              className='responsive-img'
              id="MediaBox_7"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200
              }}
            >
              <img
                alt=""
                src={about2}

              />
            </MediaBox></Col>
          <Col s={12} m={6}>

            <h4 className='left'>OUR STORY</h4>
            <p>Utah Countertops is a four generation, family owned and operated business based out of Murray and Park City, Utah. Combined, we have over 100 years of tiling experience and specialize in both commercial and residential tile installation. Paul Dowland’s own business has been in operation in Utah since 1988, generating experience that gives him a competitive edge in the industry.</p>
          </Col>
        </Row>
      </Container>
    </span>
    );
  }
}

export default About;
