import React, { Component } from 'react';
import AppItem from '../app-item/App-item'
import List from '../list/List'
import './App.scss';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Vlad"
    }
  }



  render() {
    const { name } = this.state;

    return (
      <>
        <div className="container">
          <AppItem name={name} />
        </div>
        <div className="container">
          <List />
        </div>
      </>
    )
  }

}

