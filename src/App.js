import React, { Component } from 'react';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  // addCount() {
  //   this.setState(){
  //     this.count++
  //   }
  // }

  render() {
    const { name } = this.props;

    return (
      <>
        <h1>Hello world {name}!</h1>
        <div>{this.state.count}</div>
        <button>Click me plz</button>
      </>
    )
  }

}

