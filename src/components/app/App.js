import React, { Component } from 'react';
import AppItem from '../app-item/App-item';
import Content from '../content/Content';
import Footer from '../footer/Footer'
import './App.scss';


export default class App extends Component {

  state = {
    name: "Vlad",
    data: [
      { label: 'React so hard to learn', spoiler: 'Vix paulo sanctus scripserit ex, te iriure insolens voluptatum qui.' },
      { label: 'This is so unlogical thing', spoiler: 'Odio contentiones sed cu, usu commodo prompta prodesset id.' },
      { label: 'I must try harder', spoiler: 'Nisl omittam complectitur pro an, quem omnes munere id vix.' },
      { label: 'I need a break', spoiler: 'Solum vituperata definitiones te vis, vis alia falli doming ea.' }
    ],
    postData: [
      { label: 'Vix paulo sanctus scripserit ex.', id: 'asd', important: false, like: false },
      { label: 'Odio contentiones sed cu.', id: 'fdg', important: false, like: false },
      { label: 'Nisl omittam complectitur.', id: 'rty', important: false, like: false },
      { label: 'Solum vituperata definitiones.', id: 'uikj', important: false, like: false }
    ]
  }

  deletePost = (id) => {
    this.setState(({ postData }) => {
      const newArr = postData.filter(x => x.id !== id);

      return {
        postData: newArr
      }
    })
  }

  addPost = (body) => {
    const newPosts = {
      label: body,
      id: `id ${(Math.random() * 100)}`
    }
    this.setState(({ postData }) => {
      const newArr = [...postData, newPosts]

      return (
        { postData: newArr }
      )
    })
  }

  onImportant = (id) => {
    this.setState(({ postData }) => {
      const newArr = postData.map(function (obj) {
        if (obj.id === id) {
          const tempObj = JSON.parse(JSON.stringify(obj));
          tempObj.important = !obj.important;
          return Object.assign({}, tempObj)
        } else {
          return obj
        }
      });

      return (
        { postData: newArr }
      )
    })
  }

  onLiked = (id) => {
    this.setState(({ postData }) => {
      const newArr = postData.map(function (obj) {
        if (obj.id === id) {
          const tempObj = JSON.parse(JSON.stringify(obj));
          tempObj.like = !obj.like;
          return Object.assign({}, tempObj)
        } else {
          return obj
        }
      });

      return (
        { postData: newArr }
      )
    })
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
            <Content
              data={data}
              postData={postData}
              onDelete={this.deletePost}
              onAdd={this.addPost}
              onImportant={this.onImportant}
              onLiked={this.onLiked}
            />
          </div>
        </section>
        <Footer />
      </>
    )
  }

}

