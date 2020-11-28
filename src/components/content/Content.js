import React, { Component } from 'react';
import ListItem from '../list-item/List-item';
import PostListItem from '../post-list-item/Post-list-item';
import PostAdd from '../post-add/Post-add';
import FindPost from '../find-post/Find-post';
import HeaderPost from '../header-post/Header-post';
import './Content.scss';

export default class Content extends Component {

    render() {
        const { data, postData, onDelete, onAdd, onLiked, onImportant, liked, allPosts } = this.props;
        // Разворачиваем каждый елемент, spred оператором, в массиве дата, каждый елем является объектом
        const elements = data.map(elem => <ListItem {...elem} key={`label${parseInt(Math.random() * 1000)}`} />);
        const postElements = postData.map(postElem => {
            const { id, ...postElemProps } = postElem;
            return <PostListItem
                onDelete={() => onDelete(id)}
                {...postElemProps}
                key={id}
                onLiked={() => onLiked(id)}
                onImportant={() => onImportant(id)}
            />
        })
        return (
            <div className="content">
                <ul className="list">
                    {elements}
                </ul>
                <ul className="postlist">
                    <HeaderPost
                        liked={liked}
                        allPosts={allPosts}
                    />
                    <FindPost />
                    {postElements}
                    <PostAdd
                        onAdd={onAdd}
                    />
                </ul>
            </div>
        )

    }
}