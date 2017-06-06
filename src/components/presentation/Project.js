import React, { Component } from 'react'
import placeholder from '../../images/placeholder.png';
import sr from '../utils/scrollreveal';

class Project extends Component {
  componentDidMount() {
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    };
    sr.reveal(this.refs.project, config);
  }
  render() {
    return (
      <div className="row justify-content-center portfolio-item" ref="project">
        <div className="col-md-6">
          <img src={this.props.image} className="img-fluid rounded" alt="..." />
        </div>
        <div className="col-md-6">
          <h2 className="display-3">{this.props.title}</h2>
          { (this.props.githubURL && this.props.liveURL) ?
            <h6 className="project-links">
              <a href={this.props.githubURL}>GitHub</a>
              <a href={this.props.liveURL}>Live</a>
            </h6> :
            null
          }
          <h4>{this.props.description}</h4>
        </div>
      </div>
    );
  }
}

export default Project;

Project.defaultProps = {
  image: placeholder,
  title: 'Lorem ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptatum temporibus ipsum! Sequi a numquam alias omnis hic at quam. Odio minus obcaecati mollitia sint ex quis voluptatum temporibus! Molestias.'
};
