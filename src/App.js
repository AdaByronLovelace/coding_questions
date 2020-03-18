import React from 'react'
import Card from './Card'
import Queue from './Queue'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Programming Challenges Playground</h1>
      <Card title="Queue">
        <Queue/>
      </Card>
    </div>
  );
}

export default App;
