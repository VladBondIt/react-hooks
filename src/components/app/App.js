import React, { Component } from 'react';
import AppItem from '../app-item/App-item'
import List from '../list/List'
import './App.scss';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Vlad",
      data: [
        { label: 'React so hard to learn' },
        { label: 'This is so unlogical thing' },
        { label: 'I must try harder' }
      ]
    }
  }


  render() {
    const { name, data } = this.state;

    return (
      <>
        <div className="container">
          <AppItem name={name} />
        </div>
        <div className="container">
          <List data={data} />
        </div>
      </>
    )
  }

}

