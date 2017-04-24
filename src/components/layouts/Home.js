import React from 'react';
import Sidebar from '../presentation/Sidebar';
import profilePicture from '../../images/kevin.jpg';

const Home = () => (
  <div className="container-fluid">
    <Sidebar />

    <div id="home" className="jumbotron jumbotron-fluid header">
      <div className="container">
        <p className="hello-world">Hello, world.</p>
        <h1 className="display-3">My name's Kevin. <br/>
      I'm an aspiring web developer & software engineer <br/>
      based in Stockholm.</h1>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link link-style" href="#"><p className="link-label">More</p> About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-style" href="#"><p className="link-label">View</p> My Works</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-style" href="#contact"><p className="link-label">Contact</p> By Email</a>
          </li>
        </ul>
      </div>

    </div>

    <section>
      <div id="about" className="jumbotron jumbotron-fluid about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <img src={profilePicture} className="img-fluid rounded" alt="..." />
            </div>
            <div className="col-md-9">
              <h3>About</h3>
              <h1 className="display-3">More About Me.</h1>
              <h4>Never shy away from a technical challenge, I'm all about solving problems using a wide variety of technologies.</h4>
              <blockquote className="blockquote">
                <p className="lead">At my core, I'm a programmer. I live and breath, and dream in - code.</p>
              </blockquote>
              <button className="btn btn-outline-primary">Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div id="skillset" className="jumbotron jumbotron-fluid skillset">
        <div className="container">
          <h3>Skillset</h3>
          <h1 className="display-3">I've got some skills.</h1>
          <h4 style={{opacity: 0.8}}>If there's a technology out there to make lively, beautiful web applications, I want to know about it. Here's what I already know.</h4>
          <br />
          <div className="row">
            <div className="col">
              <h5>Client Side JS</h5>
              <h2><span className="badge badge-default">ES6</span></h2>
              <h2><span className="badge badge-default">React/Redux</span></h2>
              <h2><span className="badge badge-default">Bootstrap</span></h2>
            </div>
            <div className="col">
              <h5>Server Side JS</h5>
              <h2><span className="badge badge-default">Node.js/Express</span></h2>
              <h2><span className="badge badge-default">MongoDB</span></h2>
              <h2><span className="badge badge-default">GraphQL/Relay</span></h2>
            </div>
            <div className="col">
              <h5>Testing</h5>
              <h2><span className="badge badge-default">Jest</span></h2>
              <h2><span className="badge badge-default">Enzyme</span></h2>
            </div>
            <div className="col">
              <h5>Deployment</h5>
              <h2><span className="badge badge-default">Nginx</span></h2>
              <h2><span className="badge badge-default">Webpack</span></h2>
            </div>
          </div>
        </div>
      </div>     
    </section>

    <section>
      <div id="portfolio" className="jumbotron jumbotron-fluid portfolio">
        <div className="container">
          <h3>Portfolio</h3>
          <h1 className="display-3">See some of my projects.</h1>
          <h4>Full stack music app? Check. JavaScript game using Newton's laws of gravitational attraction? Got it. A custom MVC framework? You bet.</h4>
          <br />
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img src="http://placehold.it/640x400" className="img-fluid rounded" alt="..." />
            </div>
            <div className="col-md-6">
              <h1 className="display-3">Lorem ipsum.</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptatum temporibus ipsum! Sequi a numquam alias omnis hic at quam. Odio minus obcaecati mollitia sint ex quis voluptatum temporibus! Molestias.</h4>
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img src="http://placehold.it/640x400" className="img-fluid rounded" alt="..." />
            </div>
            <div className="col-md-6">
              <h1 className="display-3">Lorem ipsum.</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptatum temporibus ipsum! Sequi a numquam alias omnis hic at quam. Odio minus obcaecati mollitia sint ex quis voluptatum temporibus! Molestias.</h4>
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img src="http://placehold.it/640x400" className="img-fluid rounded" alt="..." />
            </div>
            <div className="col-md-6">
              <h1 className="display-3">Lorem ipsum.</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptatum temporibus ipsum! Sequi a numquam alias omnis hic at quam. Odio minus obcaecati mollitia sint ex quis voluptatum temporibus! Molestias.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div id="contact" className="jumbotron jumbotron-fluid contact">
          <div className="container">
            <h3>Contact</h3>
            <h1 className="display-3">My ears are open.</h1>
            <h4 style={{opacity: 0.8}}>Whether you want to talk about a cool project you're working on, or just to chat over coffee about web development, I'm game.</h4>
            <p className="lead text-center">Email me at</p>
            <p className="text-center">kevin.t.kamimura@gmail.com</p>
          </div>
      </div>     
    </section>

    <footer id="social" className="footer">
      <div className="container">

          <ul className="nav justify-content-center align-items-start">
            <li className="nav-item"><a className="nav-link link-style" href="https://www.linkedin.com/in/kevinkamimura/">LinkedIn</a></li>
            <li className="nav-item"><a className="nav-link link-style" href="https://github.com/kekami">GitHub</a></li>
            <li className="nav-item"><a className="nav-link link-style" href="https://twitter.com/Kevin_Kamimura">Twitter</a></li>
          </ul>

   
      </div>
    </footer>
    
  </div>
);

export default Home;