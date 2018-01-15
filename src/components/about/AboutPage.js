import React from 'react';
import AboutReferences from './AboutReferences';
import AboutThanks from './AboutThanks';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <h3>Web App Design</h3>
        <p>This application uses React, Redux, React Router and Microsoft Azure Functions (Lambdas).</p>
        <h3>Technical CECL Design</h3>
        <p>This tool is for illustrative and educational purposes only and should not be relied on for financial reporting. Implementation of CECL may not fully represent the spirit of the standard per GAAP and not all interpretations of CECL standards have been finalized.</p>
        <p>The encoded interpretation of CECL standards reflects the views of the author only and not that of any institution, public or private.</p>
        <p>This simulator focuses on loan allowances and does not consider investment securities or purchase credit deteriorated assets.</p>
        <p>Herein, CECL is referencing FASB ASU 2016-13.</p>
        <h3>Credit Models</h3>
        <p>Credit models employed in this tool may not necessarily be classified as models as described in SR 11-7. No validation or guarantee has been provided as to the reliability of these models/tools.</p>
        <p>Asset credit models are simple top-down charge-off models based on 2-3 variable time-series regressions, often with a strong AR1 component.</p>
        <h3>Chris Kennedy, CFA</h3>
        <p>I'm a FinTech enthusiast, working in the banking industry; I also am an adjunct professor at a top business school.</p>
        <p>Here are links to my <a href="http://www.github.com/ZircXes">GitHub</a> page and <a href="http://linkedin.com/in/christopherbkennedy"> LinkedIn</a>.</p>
        <AboutThanks/>        
        <AboutReferences/>
      </div>
    );
  }
}

export default AboutPage;
