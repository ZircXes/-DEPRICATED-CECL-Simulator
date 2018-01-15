import React from 'react';

class AboutThanks extends React.Component {
    render() {
      return (
        <div>
          <h3>Thanks to these Super Stars!</h3>
          <ol>
            <li>Daniel Stahl (Functional Lambdas & React) - <a href="https://github.com/phillyfan1138">GitHub</a> - <a href="">LinkedIn</a></li>
            <li>Aaron Bridgers (Site Design) - <a href="">GitHub</a> - <a href="">LinkedIn</a></li>
            <li>Thomas Nguyen (Site Design) - <a href="">GitHub</a> - <a href="">LinkedIn</a></li>
            <li>Cory House (Pluralsight courses on React/Redux) - <a href="https://github.com/coryhouse">GitHub</a></li>
            <li>Microsoft (Azure Functions and edX certification courses)</li>
          </ol>
        </div>
      );
    }
}

export default AboutThanks;