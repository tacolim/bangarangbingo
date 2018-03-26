import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Landing } from './components';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="App">
        <Route exact path="/" component={Landing} />
      </div>
    );
  }
}

export default App;
