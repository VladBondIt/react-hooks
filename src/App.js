import React, { Component } from 'react';
import './App.scss';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  addCount = () => {
    this.setState(state => ({
      count: ++state.count
    }))
  }

  render() {
    const { name } = this.props;

    return (
      <div className="container">
        <h1>Hello world {name}!</h1>
        <div>{this.state.count}</div>
        <button className="container__btn" onClick={this.addCount}>Click me plz</button>
      </div>
    )
  }

}

