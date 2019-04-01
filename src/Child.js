import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)
        
        // this.state = {}

        console.log("child constructor")
    }
   
  render() {
      console.log("rendering child.js")

    return (
      <div>
        <h2>Child: {this.props.name}</h2>
      </div>
    )
  }
}
