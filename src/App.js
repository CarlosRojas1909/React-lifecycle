import React, { Component } from 'react';
import Child from './Child';
import APICall from './APICall'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state= {
         name: "John",
         width: window.innerWidth
    }
    console.log("app constructor")

  }

  //ComponentDidMpunt
  componentDidMount() {
    console.log("component did Mount!")
  }
  
  shouldComponentUpdate() {
    console.log("child should component update is set to false so it wont update")
    return false;
  }

  componentWillUnmount() {
    console.log("child component will Unmount")
  }

  handleChangeState = () => {
    this.setState({
      name: "Bob"
    })
  }

  handleUnmount = () => {
    this.setState({
      name: "Robert"
    })
  }

  render() {
    console.log("rendering app.js")

    return (
      <div className="App">
        <h1>Hello</h1>
        <Child name={this.state.name}/>
        <h1>Width: {this.state.width}</h1>
        <button onClick={this.handleChangeState}>change document title and change State</button>
        <button onClick={this.handleUnmount}>Unmount component</button>
        <APICall />
      </div>
    );
  }
}

export default App;
