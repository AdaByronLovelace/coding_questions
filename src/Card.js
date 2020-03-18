import React from 'react'
import './Card.css'

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.title}</h2>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}