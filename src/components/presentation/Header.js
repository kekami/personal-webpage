import React, { Component } from 'react';
import sr from '../utils/scrollreveal';

class Header extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 50,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    }
    sr.reveal(this.refs.header, config)
  }
  render() {
    return (
      <div id="home" className="jumbotron jumbotron-fluid header">
        <div className="container" ref="header">
          <p className="hello-world">Hello, World!</p>
          <h1 className="display-3">My name's Kevin. <br/>
        I'm an self-taught web developer <br/>
        based in Stockholm.</h1>

          {/*<ul className="nav">
            <li className="nav-item">
              <a className="nav-link link-style" href="#about"><p className="link-label">More</p> About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-style" href="#portfolio"><p className="link-label">View</p> My Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-style" href="#contact"><p className="link-label">Contact</p> By Email</a>
            </li>
          </ul>*/}
        </div>
      </div>
    )
  }
}

export default Header;