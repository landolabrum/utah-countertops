import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Review, {
  ReviewGoogle,
  ReviewThanks,
  ReviewFacebook,
  ReviewForm} from './pages/Review';
import Residential from './pages/Residential'
import Commercial from './pages/Commercial'
import Gallery from "./pages/Gallery";
import Shower from "./pages/Shower";
import Sink from "./pages/Sink";
// import Test from "./elements/Test";


import { HashRouter, Route, Switch, useLocation } from 'react-router-dom';
// import { buildUrl } from 'react-instafeed'

// import Feed from "react-instagram-authless-feed"
import CallModal from './elements/Contact';
import { Button  } from 'react-materialize';



function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
export default function App() {
  return (
    <HashRouter >
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/residential" component={Residential}/>
          <Route path="/commercial" component={Commercial}/>
          <Route path="/shower" component={Shower}/>
          <Route path="/sink" component={Sink}/>
          <Route path="/review" component={Review}/>
          <Route path='/ReviewGoogle' component={ReviewGoogle}/>
          <Route path='/ReviewThanks' component={ReviewThanks}/>
          <Route path='/ReviewFacebook' component={ReviewFacebook}/>
          <Route path='/ReviewForm' component={ReviewForm}/>
          <Route path="*" component={NoMatch}/>
        </Switch>
        <CallModal trigger={
          <Button className="fixed-action-btn btn-floating btn-large red hide-on-med-and-up" node="button">
            <i style={{ fontSize: "2.3rem", paddingLeft: "21%" }} className="large material-icons">local_phone</i>
          </Button>
        } />
      </main>

    </HashRouter>
  );
}