import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tabs/Tab';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <Tab name="tab1"> content tab 1 </Tab>
          <Tab name="tab2"> content tab 2 </Tab>
          <Tab name="tab3"> content tab 3 </Tab>
          <div name="tav4"> test4 </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
