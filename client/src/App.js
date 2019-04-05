import React, { Component } from 'react';
import './App.css';
import RouterComponent from './Router';

import 'typeface-roboto';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showList: true
    }
  }

  render() {
    return (
      <div className="App">


        {/* {
          this.state.showList
          ? <MoviesList/>
          : <div>Choose an option</div>
        } */}
        <RouterComponent />
      </div>
      );
  }
}

export default App;
