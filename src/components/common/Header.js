// Modified From Pluralsight Course by Cory House
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/simulator" activeClassName="active">Simulator</Link>
      {" ||| "}
      <Link to="/markets" activeClassName="active">Current Markets</Link>
      {" | "}
      <Link to="/models" activeClassName="active">Credit</Link>
      {" | "}
      <Link to="/forecasts" activeClassName="active">Macro Forecasts</Link>
      {" | "}
      <Link to="/scenarios" activeClassName="active">Scenarios</Link>
      {" | "}
      <Link to="/settings" activeClassName="active">Settings</Link>
      {" | "}
      <Link to="/assets" activeClassName="active">Assets</Link>
      {" ||| "}
      <Link to="/about" activeClassName="active">Help</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
