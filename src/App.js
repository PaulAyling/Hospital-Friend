import React , {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SectionOneData from './data/SectionOneData';

import RenderMobi from './pages/renderMobi';
import RenderPdf from './pages/renderPdf';


export default class App extends Component {
  state = {}
 
  render() {
 const SectionOneData = this.SectionOneData.content
 console.log(JSON.stringify(SectionOneData))
 const MyVar = "Paul is a really cool dude"
  return (
    <div className='App'>
    {/* {SectionOneData[0].section}
    {MyVar} */}

      <Router>
        {/* <Route exact path='/mobi' component={RenderMobi} MyTestData="hello" /> */}
        {/* <Route exact path='/pdf' component={RenderPdf} /> */}
      </Router>
      {/* <RenderMobi Render="mobi" SectionOneData={SectionOneData}/> */}
    </div>
  );
}
}