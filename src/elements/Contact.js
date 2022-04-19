import React from 'react';
import { Modal, Row, Col, Container} from 'react-materialize';

// import Map from './Maps'
export default class CallModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
  render() {
    return (
      <Modal
        className="modal-btm glass"
        bottomSheet={false}
        fixedFooter={false}
        id="Modal-0"
        open={false}
        options={{
          dismissible: true,
          endingTop: '10%',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: '4%'
        }}
        trigger={this.props.trigger}
      >
        <Row className="hide-on-small-only">
          <Col s={2} >
            <a className="btn-floating btn-large light-blue darken-4" href="tel://+14356551446">
              <i style={{ fontSize: "2.3rem", paddingLeft: "21%" }} className="large material-icons">local_phone</i>
            </a>
          </Col>
          <Col s={10}>
            <h5 className="white-text">1 (435) 655-1446</h5>
            <br />
          </Col>
          <Col s={2}>
            <a className="btn-floating btn-large light-blue darken-4" href="mailTo://info@utahcountertops.com">
              <i style={{ fontSize: "2.3rem", paddingLeft: "21%" }} className="large material-icons">email</i>
            </a>
          </Col>
          <Col s={10}>
            <h5 className="white-text">info@utahcountertops.com</h5>
            <br />
          </Col>
          <Col s={2}>
          <a className="btn-floating btn-large light-blue darken-4" target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir//Utah+Countertops,+358+W+5900+S,+Murray,+UT+84107/@40.6433467,-111.9022248,17z/">
                <i style={{ fontSize: "2.3rem", paddingLeft: "21%" }} className="large material-icons">map</i>
              </a>
            {/* <Map /> */}
          </Col>
          <Col s={10}>
            <h5 className="white-text">Utah Countertops, 358 W 5900 S, Murray, UT 84107</h5>
            <br />
          </Col>
        </Row>
        <Container  className="hide-on-med-and-up">
        <Row>
            <Col s={2} offset="s1">
              <p className="white-text right-align">Tel:<br />Email:<br />Address:</p>
            </Col>
            <Col s={8} offset="s1">
              <p className="white-text">1 (435) 655-1446<br />info@utahcountertops.com<br />Utah Countertops, 358 W 5900 S, Murray, UT 84107</p>
            </Col>
          </Row>
          <br/>
          <div className="divider"/>
          <br/>
        <Row>
    
          <Col s={4} className="center" >
            <a className="btn-floating btn-large light-blue darken-4" href="tel://+14356551446">
              <i style={{ fontSize: "2.3rem", paddingLeft: "21%" }} className="large material-icons">local_phone</i>
            </a>
          </Col>
          <Col s={4} className="center">
            <a className="btn-floating btn-large light-blue darken-4" href="mailTo://info@utahcountertops.com">
              <i style={{ fontSize: "2.3rem", paddingLeft: "21%" }} className="large material-icons">email</i>
            </a>
          </Col>
          <Col s={4} className="center">
          <a className="btn-floating btn-large light-blue darken-4" target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir//Utah+Countertops,+358+W+5900+S,+Murray,+UT+84107/@40.6433467,-111.9022248,17z/">
                <i style={{ fontSize: "2.3rem", paddingLeft: "21%" }} className="large material-icons">map</i>
              </a>
          </Col>
        </Row>
        </Container>
        {/* <p>
          <br />
          <a className='orange btn btn-block' href="tel://+14356551446" >
            <Icon className='left'>local_phone</Icon>1 (435) 655-1446
        </a>
        </p>
<br/>
        <p>
          <a className='orange btn btn-block' href="mailTo://info@utahcountertops.com" >
            <Icon className='left'>email</Icon>info@utahcountertops.com
        </a>
        </p>
        <br/>
        <p> */}

        {/* </p>  */}


      </Modal>
    );
  }
}


// https://www.google.com/maps/place/Paul+Dowland+Tile+%26+Countertops/@40.6433467,-111.902224822248,17z/data=!3m1!4b1!4m5!3m4!1s0x8752899c9350a41f:0x256b318901cd331a!8m2!3d40.6433467!4d-111.902224800361