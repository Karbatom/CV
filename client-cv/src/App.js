import React from 'react';

import About from './About';
import Profile from './Profile';
import Separater from './Separater';
import Education from './Education';
import Hobby from './Hobby';
import Thanks from './Thanks';

import './css/App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className='Container'>
          <Profile />
          <About />
          <Separater />
          <Education />
          <Separater />
          <Hobby />
          <Separater />
          <Thanks />
        </div>
      </div>
    );
  }
}


export default App;
