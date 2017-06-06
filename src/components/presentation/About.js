import React, { Component } from 'react';
import sr from '../utils/scrollreveal';
import profilePicture from '../../images/kevin2.jpg';

class About extends Component {

  componentDidMount() {
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    }
    sr.reveal(this.refs.about, config);
  }

  render() {
    return (
      <div id="about" className="jumbotron jumbotron-fluid about">
        <div className="container" ref="about">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <img src={profilePicture} className="img-fluid rounded" alt="..." />
            </div>
            <div className="col-md-9">
              <h3>About</h3>
              <h1 className="display-3">Who is Kevin?</h1>
              <h4>I'm a biomedical student who in the beginning of 2017 decided to pursue a childhood passion for programming. On this journey of self-learning for which I have embarked upon, I have discovered that coding is a truly fullfilling endeavor. Never think it is too late to pursue your dreams!</h4>
              <blockquote className="blockquote">
                <p className="lead">Over the past months I have come to a realization that I live and breathe, and dream in - code. Is this life?</p>
                <footer className="blockquote-footer"><cite title="Source Title">Philosopher Kevin</cite></footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
