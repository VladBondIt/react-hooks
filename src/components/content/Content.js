import React, { Component } from 'react';
import ListItem from '../list-item/List-item'
import PostListItem from '../post-list-item/Post-list-item'
import './Content.scss';

export default class Content extends Component {

    render() {
        const { data, postData } = this.props;
        // Разворачиваем каждый елемент, spred оператором, в массиве дата, каждый елем является объектом
        const elements = data.map(elem => <ListItem {...elem} key={`label${Math.random() * 100}`} />);
        const postElements = postData.map(postElem => <PostListItem {...postElem} key={`postLabel${Math.random() * 100}`} />)

        return (
            <div className="content">
                <ul className="list">
                    {elements}
                </ul>
                <ul className="postlist">
                    {postElements}
                </ul>
            </div>
        )
    }
}