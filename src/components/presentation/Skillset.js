import React, { Component } from 'react';
import sr from '../utils/scrollreveal';

class Skillset extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    }
    sr.reveal(this.refs.skillset, config)
  }

  render() {
    return (
      <div id="skillset" className="jumbotron jumbotron-fluid skillset">
        <div className="container" ref='skillset'>
          <h3>Skillset</h3>
          <h1 className="display-3">My current tech stack</h1>
          <h4 style={{opacity: 0.8}}>The React ecosystem have picked my interest and is currently the main focus of my studies.</h4>
          <br />
          <div className="row">
            <div className="col-md-3">
              <h4>Client Side JS</h4>
              <h3><span className="badge badge-default">ES6</span></h3>
              <h3><span className="badge badge-default">React/Redux</span></h3>
              <h3><span className="badge badge-default">Bootstrap</span></h3>
            </div>
            <br />
            <div className="col-md-3">
              <h4>Server Side JS</h4>
              <h3><span className="badge badge-default">Node.js/Express</span></h3>
              <h3><span className="badge badge-default">MongoDB</span></h3>
              <h3><span className="badge badge-default">GraphQL/Relay</span></h3>
            </div>
            <br />
            <div className="col-md-3">
              <h4>Testing</h4>
              <h3><span className="badge badge-default">Jest</span></h3>
              <h3><span className="badge badge-default">Enzyme</span></h3>
            </div>
            <br />
            <div className="col-md-3">
              <h4>Deployment</h4>
              <h3><span className="badge badge-default">Nginx</span></h3>
              <h3><span className="badge badge-default">Webpack</span></h3>
            </div>
            <br />
          </div>
        </div>
      </div>     
    )
  }
}

export default Skillset;