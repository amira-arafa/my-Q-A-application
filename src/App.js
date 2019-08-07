import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar';
import Question from './Question';
import Questions from './Questions';
import Callback from "./callback";

class App extends Component {
  render() {
    //defining different routes
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
      </div>
    );
  }
}

export default App;