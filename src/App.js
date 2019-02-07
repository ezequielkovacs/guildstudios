import React, { Component } from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './custom.css';
import CustomLayout from './containers/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import ReactBreakpoints from 'react-breakpoints'

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}

class App extends Component {
  render() {
    return (
      <>
      <div>
          <Router>
          <ReactBreakpoints breakpoints={breakpoints}>
            <CustomLayout {...this.props}>
                <BaseRouter />
            </CustomLayout>
            </ReactBreakpoints>
          </Router>
        </div>
        </>
    );
  }
}

export default App;
