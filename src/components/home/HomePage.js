import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: "#FFDDBB"}} className="jumbotron">
        <h1>CECL Loan Allowance Simulation Tool</h1>
        <p>Simplified web app using React/Redux + Azure Lambdas & Web Store</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
