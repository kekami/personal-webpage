import React, { Component } from 'react';
import Project from './Project';
import sr from '../utils/scrollreveal';
import movieDB from '../../images/movieDB.png';
import webdesign from '../../images/kamimura-webdesign.jpg';

class Portfolio extends Component {

  componentDidMount() {
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    };
    sr.reveal(this.refs.portfolio, config)
  }

  render() {
    return (
      <div id="portfolio" className="jumbotron jumbotron-fluid portfolio">
        <div className="container" ref="portfolio">
          <h3>Portfolio</h3>
          <h1 className="display-3">A couple of projects I've been working on.</h1>
          <h4>(Under construction)</h4>
          <br />
          <Project 
            image={webdesign}
            title="Kamimura Web Design"
            description="A fully responsive template for a company webpage written in HTML5 and SASS."
            githubURL="https://github.com/kekami/kamimura-webdesign"
            liveURL="http://gaudy-reaction.surge.sh/services.html"
          />
          <Project
            image={movieDB}
            title="MovieDB"
            description="Full-stack movie database with features such as the ability to search and favorite movies. Created to practice and demonstrate React/Redux, Node/Express, REST Apis, Authentication, MongoDB and asynchronous JavaScript."
            githubURL="https://github.com/kekami/movieDB"
            liveURL="https://whispering-falls-55926.herokuapp.com/"
          />
          <Project />
        </div>
      </div>
    );
  }
}

export default Portfolio;
