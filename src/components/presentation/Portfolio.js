import React, { Component } from 'react';
import Project from './Project';
import sr from '../utils/scrollreveal';
import movieDB from '../../images/movieDB.png';
import webdesign from '../../images/kamimura-webdesign.jpg';
import webhosting from '../../images/kamimura-hosting.jpg';
import portfolioTravel from '../../images/portfolio-travel.jpg';

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
          <h4>Mobile first, with a fully responsive design. As it should be.</h4>
          <br />
          <Project 
            image={webhosting}
            title="Hosting"
            description="A fully responsive website for a fictional webhosting company written in HTML5 and SASS using Gulp.js as task runner."
            githubURL="https://github.com/kekami/kamimura-hosting"
            liveURL="http://mute-motion.surge.sh/"
          />
          <Project 
            image={portfolioTravel}
            title="Travel"
            description="A fully responsive website for a fictional travel website written in HTML5 and SASS following BEM methodology using Gulp.js as task runner."
            githubURL="https://github.com/kekami/portfolio-travel"
            liveURL="http://thundering-island.surge.sh/"
          />
          <Project
            image={movieDB}
            title="MovieDB"
            description="Full-stack movie database with features such as the ability to search and favorite movies. Created to practice and demonstrate React/Redux, Node/Express, REST Apis, Authentication, MongoDB and asynchronous JavaScript."
            githubURL="https://github.com/kekami/movieDB"
            liveURL="https://whispering-falls-55926.herokuapp.com/"
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
