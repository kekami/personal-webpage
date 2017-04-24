import React, { Component } from 'react';
import sr from '../utils/scrollreveal';
import placeholder from '../../images/placeholder.png'

class Portfolio extends Component {
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
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img src={placeholder} className="img-fluid rounded" alt="..." />
            </div>
            <div className="col-md-6">
              <h1 className="display-3">Lorem ipsum.</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptatum temporibus ipsum! Sequi a numquam alias omnis hic at quam. Odio minus obcaecati mollitia sint ex quis voluptatum temporibus! Molestias.</h4>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img src={placeholder} className="img-fluid rounded" alt="..." />
            </div>
            <div className="col-md-6">
              <h1 className="display-3">Lorem ipsum.</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptatum temporibus ipsum! Sequi a numquam alias omnis hic at quam. Odio minus obcaecati mollitia sint ex quis voluptatum temporibus! Molestias.</h4>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img src={placeholder} className="img-fluid rounded" alt="..." />
            </div>
            <div className="col-md-6">
              <h1 className="display-3">Lorem ipsum.</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptatum temporibus ipsum! Sequi a numquam alias omnis hic at quam. Odio minus obcaecati mollitia sint ex quis voluptatum temporibus! Molestias.</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;