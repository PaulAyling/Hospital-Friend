import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SectionOneData from './data/SectionOneData';

import RenderMobi from './pages/renderMobi';
import RenderPdf from './pages/renderPdf';
import './styles/master.scss'

export default class App extends Component {
  // state = SectionOneData.content;

  render() {
    const sectionOneData = SectionOneData.content;
    return (
      <div className='App'>
        <Router>
          <Route exact path='/mobi' component={RenderMobi} MyTestData='hello' />
          <Route exact path='/pdf' component={RenderPdf} />
        </Router>
        <RenderMobi Render='mobi' SectionOneData={sectionOneData} />
      </div>
    );
  }
}
