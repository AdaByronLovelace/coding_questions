import React from 'react'
import './List.css'
import Names from './Data.json'

export default class Queue extends React.Component {
  constructor(props) {
    super(props)
    this.state = { queue:[] }
  }

  componentDidMount() {
    let startQueue = Names.names1.slice(0,9)
    let addQueue = Names.names2.slice(0,9)
    this.setState({queue:startQueue})
  }

  render() {
    return (
      <div className="queue">
        <button className="button">Add to Queue</button>
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