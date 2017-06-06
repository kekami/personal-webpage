import React from 'react';
import { Menu, Brand, Item } from 'impromptu-react-sidemenu';

const Sidebar = () => (
  <Menu position="left" autoClose>
    <Brand>
      <a href="#home">Kevin Kamimura</a>
    </Brand>
    <hr />
    <Item>
      <a href="#home">Home</a>
    </Item>
    <Item>
      <a href="#about">About</a>
    </Item>
    <Item>
      <a href="#skillset">Skillset</a>
    </Item>
    <Item>
      <a href="#portfolio">Portfolio</a>
    </Item>
    <Item>
      <a href="#contact">Contact</a>
    </Item>
    <hr />
    <Item>
      <a href="https://github.com/kekami">GitHub</a>
    </Item>
    <Item>
      <a href="https://www.linkedin.com/in/kevinkamimura/">LinkedIn</a>
    </Item>
    <Item>
      <a href="https://twitter.com/Kevin_Kamimura">Twitter</a>
    </Item>
  </Menu>
);

export default Sidebar;
