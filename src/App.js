import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/layouts/Home';
import Portfolio from './components/presentation/Portfolio';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={Portfolio} />
      <Route path="/skillset" component={Portfolio} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Portfolio} />
    </div>
  </Router>
);

export default App;
