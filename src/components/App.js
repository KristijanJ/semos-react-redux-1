import React from 'react';
import Hello from "./Hello";
import Movies from './Movies';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Hello />
        <Movies />
      </div>
    );
  }
}

export default App;
