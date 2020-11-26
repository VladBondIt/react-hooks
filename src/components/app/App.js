import React, { Component } from 'react';
import AppItem from '../app-item/App-item'
import Content from '../content/Content'
import './App.scss';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Vlad",
      data: [
        { label: 'React so hard to learn', spoiler: 'Vix paulo sanctus scripserit ex, te iriure insolens voluptatum qui.' },
        { label: 'This is so unlogical thing', spoiler: 'Odio contentiones sed cu, usu commodo prompta prodesset id.' },
        { label: 'I must try harder', spoiler: 'Nisl omittam complectitur pro an, quem omnes munere id vix.' },
        { label: 'I need a break', spoiler: 'Solum vituperata definitiones te vis, vis alia falli doming ea.' }
      ],
      postData: [
        { label: 'Vix paulo sanctus scripserit ex.' },
        { label: 'Odio contentiones sed cu.' },
        { label: 'Nisl omittam complectitur.' },
        { label: 'Solum vituperata definitiones.' }
      ]
    }
  }


  render() {
    const { name, data, postData } = this.state;

    return (
      <>
        <header>
          <div className="container">
            <AppItem name={name} />
          </div>
        </header>
        <section className="main-content">
          <div className="container">
            <Content data={data} postData={postData} />
          </div>
        </section>
      </>
    )
  }

}

