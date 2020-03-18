import React from 'react'
import './List.css'
import Names from './Data.json'

export default class Queue extends React.Component {
  constructor(props) {
    super(props)
    this.state = { queue:[] }

    this.enQueue = this.enQueue.bind(this)
  }

  componentDidMount() {
    this.setState({
      queue: Names.names1.slice(0,9),
      newValues: Names.names2
    })
  }

  enQueue() {
    let queue = []

    this.setState({
      queue: queue
    })
  }

  render() {
    return (
      <div className="queue">
        <p>The queue begins as a simple array of ten items. I use a seperate array of names for adding to the queue. Because this is Javascript adding and deleting to the queue is completely simple and uninteresting array operations, but whatever. Mostly this is a good exmaple for setting up a component that has some custom UI and buttons that do things!</p>
        <div className="buttons">
          <button className="button">Enqueue</button>
          <button className="button">Dequeue</button>
          <button className="button">Reset Queue</button>
        </div>
        <div className="list">
        {
          this.state.queue.map((item) => (
            <div className="list-item">{item}</div>
          ))
        }
        </div>
        
      </div>
    )
  }
}