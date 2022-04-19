import React from 'react';
import { Navbar, NavItem, Divider, Icon } from 'react-materialize';
import {Link} from 'react-router-dom';
import logo from '../media/img/logo.png';
import CallModal from './Contact';


export default class Nav extends React.Component {
  render(props) {
    var menu = this.props.color
    var font = ""
    // if(this.props.color==="nav-glass"){
    //   var menu = ""
    // }
    // if(this.props.color==="glass-lite"){
    //   var font = "black-text"
    // }

    return (
      <Navbar
      brand={<Link to="/"><img className='App-logo valign-wrapper' src={logo} alt="logo" /></Link>}
      menuIcon={<Icon className={menu}>menu</Icon>}
      alignLinks="left"
      className={this.props.color}>
      {/* <Link className='black-text' to="/">Home</Link> */}
      <Link className={font} to="/about">About</Link>
      <Link className={font} to="/gallery">Gallery</Link>
      <Link className={font} to="/residential">Residential</Link>
      <Link className={font} to="/commercial">Commercial</Link>
      <Link className={font} to="/shower">Slab Shower</Link>
      <Link className={font} to="/sink">Slab Sink</Link>
      <Divider />
      <CallModal trigger={
         <NavItem className={font}>Contact Us</NavItem> 
        } />
      </Navbar>
    );
  }
}


