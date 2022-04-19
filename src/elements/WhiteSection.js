import { Container, Row, Col } from 'react-materialize';
import logo from '../media/img/logo.png';


export default function WhiteSection(props) {
  return <div className="section white">
    <Container>
      <Row>
        <Col s={4} offset="s4">
          <img alt='' src={logo} className="responsive-img" />
        </Col>

        <Col s={10} offset="s1">
          <blockquote className="grey-text lighten-3 ">
            <i>"Every block of stone has a statue inside it and it is the task of the sculptor to discover it."</i>
            <h6 className="right"><br />
              <i>- Michelangelo</i>
            </h6>

          </blockquote >
        </Col>
      </Row>
    </Container>
  </div>
    ;
}
