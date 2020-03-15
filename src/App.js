import React from 'react';
import './App.css';
import Sandbox from './devSandbox/sandbox.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RenderMobi from './pages/renderMobi';
import RenderPdf from './pages/renderPdf';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/mobi' component={RenderMobi} />
        <Route exact path='/pdf' component={RenderPdf} />
      </Router>

    </div>
  );
}

export default App;
