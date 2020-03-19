import React, { Component, Fragment } from 'react';
import Sandbox from './devSandbox/sandbox';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SectionOneData from './data/SectionOneData';

import RenderMobi from './pages/renderMobi';
import RenderPdf from './pages/renderPdf';
import './styles/App.scss'

export default class App extends Component {
  // state = SectionOneData.content;

  render() {
    const Data = SectionOneData.data;
    return (
      <div id="App">
        <Router>
          <Route exact path='/mobi' component={RenderMobi} MyTestData='hello' />
          <Route exact path='/pdf' component={RenderPdf} />
        </Router>
        <RenderMobi Render='mobi' data={Data} />
   
      </div>
    );
  }
}
