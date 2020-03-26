import React from 'react'
import './List.css'
import { sampleData } from './Data'

export default class Queue extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      queue: sampleData.names1.slice(0,5), 
      next: 0
    }

    this.enqueue = this.enqueue.bind(this)
    this.dequeue = this.dequeue.bind(this)
  }

  enqueue() {
    this.setState({
      queue: [...this.state.queue, sampleData.names2[this.state.next]],
      next: this.state.next + 1
    })
  }

  dequeue() {
    this.setState({
      queue: this.state.queue.slice(1)
    })
  }

  render() {
    return (
      <div className="queue">
        <p>The queue begins as a simple array of ten items. I use a seperate array of names for adding to the queue. Because this is Javascript adding and deleting to the queue is completely simple and uninteresting array operations, but whatever. Mostly this is a good exmaple for setting up a component that has some custom UI and buttons that do things!</p>
        <div className="buttons">
          <button className="button" onClick={() => this.enqueue()}>Enqueue</button>
          <button className="button" onClick={() => this.dequeue()}>Dequeue</button>
        </div>
        <div className="list">
        {
          this.state.queue.map((item, index) => (
            <div className="list-item" key={index}>{item}</div>
          ))
        }
        </div>
        
      </div>
    )
  }
}