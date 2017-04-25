import React, { Component } from 'react';
import sr from '../utils/scrollreveal';

class Header extends Component {

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
          <p className="hello-world">> Hello, World!</p>
          <h1 className="display-3">My name's Kevin. <br/>
        I'm a self-taught web developer <br/>
        based in Stockholm.</h1>
        </div>
      </div>
    )
  }
}

export default Header;