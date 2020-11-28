import React, { Component } from 'react';
import AppItem from '../app-item/App-item';
import Content from '../content/Content';
import Footer from '../footer/Footer'
import './App.scss';


export default class App extends Component {

  state = {
    name: 'Vlad',
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
    ],
    term: '',
    filter: 'all'
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
      id: `id ${(Math.random() * 1000)}`
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

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter(i => i.label.includes(term))
  }

  filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter(i => i.like)
    } else {
      return items
    }
  }

  onUpdatePosts = (term) => {
    this.setState({ term })
  }

  onFilter = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { name, data, postData, term, filter } = this.state;

    const liked = postData.filter(x => x.like);
    const allPosts = postData.map(x => x);

    const visiblePosts = this.filterPost(this.searchPost(postData, term), filter);

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
              onFilter={this.onFilter}
              filter={filter}
              liked={liked.length}
              allPosts={allPosts.length}
              data={data}
              postData={visiblePosts}
              onDelete={this.deletePost}
              onAdd={this.addPost}
              onImportant={this.onImportant}
              onLiked={this.onLiked}
              onUpdatePosts={this.onUpdatePosts}
            />
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

