import React, { Component } from 'react';
import { Menu, Brand, Item } from 'impromptu-react-sidemenu';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <Menu position="left">
        <Brand>
          <a href="#home">Kevin Kamimura</a>
        </Brand>
        <hr />
        <Item>
          {/*<Link to="/">Home</Link>*/}
          <a href="#home">Home</a>
        </Item>
        <Item>
          {/*<Link to="/about">About</Link>*/}
          <a href="#about">About</a>
        </Item>
        <Item>
          {/*<Link to="/skillset">Skillset</Link>*/}
          <a href="#skillset">Skillset</a>
        </Item>
        <Item>
          {/*<Link to="/portfolio">Portfolio</Link>*/}
          <a href="#portfolio">Portfolio</a>
        </Item>
        <Item>
          {/*<Link to="/contact">Contact</Link>*/}
          <a href="#contact">Contact</a>
        </Item>
        <hr />
        <Item>
          {/*<Link to="/contact">Contact</Link>*/}
          <a href="https://github.com/kekami">GitHub</a>
        </Item>
        <Item>
          {/*<Link to="/contact">Contact</Link>*/}
          <a href="https://www.linkedin.com/in/kevinkamimura/">LinkedIn</a>
        </Item>
        <Item>
          {/*<Link to="/contact">Contact</Link>*/}
          <a href="https://twitter.com/Kevin_Kamimura">Twitter</a>
        </Item>
      </Menu>
    );
  }
};

export default Sidebar;