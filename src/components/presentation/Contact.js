import React, { Component } from 'react';
import sr from '../utils/scrollreveal';

class Contact extends Component {
  componentDidMount() {
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    }
    sr.reveal(this.refs.contact, config);
  }

  render() {
    return (
      <div id="contact" className="jumbotron jumbotron-fluid contact">
        <div className="container" ref="contact">
          <h3>Contact</h3>
          <h1 className="display-3">Give me a shout.</h1>
          <h4 style={{ opacity: 0.8 }}>Would you like to get in touch? Share an awesome project you've been working on? Grab a coffee and chat about web development? Hit me up!</h4>
          <br />
          <p className="lead text-center">Email:</p>
          <p className="text-center"><a className="link-style" href="mailto:kevin.kamimura@live.com">kevin.kamimura(at)live.com</a></p>
        </div>
      </div>
    );
  }
}

export default Contact;
