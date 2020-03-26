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

function compareTriplets(a, b) {
  let result = [0,0];
  console.log(a[0])
  console.log(b[0])
  console.log(a[0] > b[0])
  for (let i=0;i<3;i++) {
      if (a[i] > b[i]) {
        result[0]++;
        console.log('a is greater') 
      }
      else if (a[i] < b[i]) {
        result[1]++;
        console.log('b is greater') 
      }
  }
  return result;
}

console.log(compareTriplets([5,6,7],[3,6,10]))