import React, { Component } from 'react';
import './less/styles.css';
import Logo from './img/logo.svg';
import logoSmall from './img/logo_sm.svg';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://solllve.us12.list-manage.com/subscribe/post?u=e2ab060d0ba59336f71015f4c&id=bad410fe22";
const SimpleForm = () => <MailchimpSubscribe url={url}/>

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="logo"><img alt="logo" src={Logo} /></div>
      </div>
    );
  }
}
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="inner">

          <div className="contact__us">
            <ul>
              <li><div className="logo_sm"><img src={logoSmall} alt="logo" /></div></li>
              <li><a href="mailto:we@solllve.com"><span className="icon">email</span> we@solllve.com</a></li>
              <li><a href="https://twitter.com/solllve"><span className="iconSocial">twitter</span> @solllve</a></li>
              <li><a href="https://instagram.com/wesolllve"><span className="iconSocial">instagram</span> @wesolllve</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main__container">
          <div className="inner">
            <div className="company_slogan">
              <h1>Coming Soon!</h1>
              <p>We create products and experiences that simplify your finances. <br />Subscribe to be notified when we launch!</p>
            </div>
            <div className="mailChimp">
              <SimpleForm/>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
