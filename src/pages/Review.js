import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-materialize';
import GoogleLogo from "../media/review/Google.svg"
import FbLogo from "../media/review/fb.webp"
import logo from "../media/img/logo.png"
import { Link, useHistory } from "react-router-dom";

import * as emailjs from 'emailjs-com'

function CardContainer(props) {
  return (
    <body className="white">
      <div id="review-bg"/>
      <Container>
        <div className="center-obj">
        {props.content ? props.content :
          <Row className="card">
            <Col
              className="card-content center"
              s={10}
              offset="s1"
            >
              <img
                className="card-title"
                // style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                alt={props.txt}
                src={props.img}
              />
              <p className="black-text center-align">
                {props.txt}
              </p>
              {props.blank == true ?
                <a style={{ display: "block", marginTop: "10vh" }} className="white-text green darken-2"
                  onClick={() => window.open(props.yes, "_blank")} >
                  <h5 style={{ padding: "6px" }} className="center" >Yes</h5>
                </a>
                :
                <Link
                  className="yes green-text" to={props.yes}>
                  Yes
                </Link>
              }
              <br/>
              <Link  to={props.no}>No</Link>
            </Col>
          </Row>
        }</div>
      </Container>
    </body>
  );
}

export function ReviewForm() {
  let history = useHistory();
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_a2kpjid', 'template_b4rmr1q', e.target, 'user_FNtbnhvNY6tLZSICaVHsY')
      .then((result) => {
        console.log(result.text);
        history.push('/ReviewThanks')  // redirect
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <CardContainer
      content={
        <form className="contact-form card" onSubmit={sendEmail}>
          <Row className="card-content">
            <div className="center">
              <img
                // style={{ display: "block", margin: "10vh auto 5vh auto" }}
                width="50%"
                alt="Utah Countertops"
                src={logo}
              /></div>
              <h5 className="black-text center">Let us know how we did</h5>
              <input type="hidden" name="contact_number" />
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea className="materialize-textarea" name="message" />
              <input className="btn green darken-3 right" type="submit" value="Send" />

          </Row>
        </form>} />
  );
}
export function ReviewGoogle() {
  return (
    <CardContainer
      img={GoogleLogo}
      txt="Do you have a Google Account?"
      blank={true}
      yes="https://search.google.com/local/writereview?placeid=ChIJdapDla-JUocRm2b-doxJG3M"
      no="/ReviewFacebook"
    />
  );
}
export function ReviewThanks() {
  return (
    <CardContainer
      content={
        <Card>
          <div className="card-content">
          <div className="center">
            <img
              alt=""
              src={logo}
              // width="50%"
            />
            </div>
          <br/><br/>
          <p className="black-text">
            Thank you for your input
          </p><br/>
          </div>
      <div className="card-action ">
          <Link className="" to="/">Return Home</Link></div>
        </Card>}
    />
  );
}

export function ReviewFacebook() {
  return (
    <CardContainer
      img={FbLogo}
      txt="Do you have a facebook Account?"
      blank={true}
      yes="https://www.facebook.com/Utah-Countertops-103067048537869/reviews/"
      no="/ReviewForm"
    />
  );
}

export default function Index() {
  return (
    <CardContainer
      img={logo}
      txt="Would you recommend Utah Countertops?"
      yes="/ReviewGoogle"
      no="/ReviewForm"
    />
  );
}



// export default Page;
// https://search.google.com/local/writereview?placeid=ChIJdapDla-JUocRm2b-doxJG3M
// https://www.facebook.com/Utah-Countertops-103067048537869/reviews/


// https://www.google.com/search?q=Utah+Countertops%2C+358+W+5900+S%2C+Murray%2C+UT+84107&oq=utah+cou&aqs=chrome.0.69i59j69i57j35i39j46i433j46i175i199j69i60l2j69i61.2127j0j4&sourceid=chrome&ie=UTF-8#lrd=0x875289af9543aa75:0x731b498c76fe669b,3,,,
