import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainOne from "./components/MainOne";
import Details from "./components/Details";


import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      testpass
    </div>
        <Switch>
          <Route exact path="/" component={MainOne} />
          <Route path="/details" component={Details} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
