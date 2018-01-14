import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: "#FFDDBB"}} className="jumbotron">
        <h1>CECL Simulation Tool in React/Redux</h1>
        <p>Simplified Simulator in a web-based app.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
