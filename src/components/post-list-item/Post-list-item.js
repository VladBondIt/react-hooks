import React, { Component } from 'react';

import './Post-list-item.scss';

export default class PostListItem extends Component {
    state = {
        important: false,
        like: false
    }

    onImportant = () => {
        this.setState(state => ({
            important: !state.important
        }))
    }

    onLiked = () => {
        this.setState(state => ({
            like: !state.like
        }))
    }

    render() {
        const { label } = this.props;
        const { like, important } = this.state;
        let classNamesHeart = "postlist__svg-heart",
            classNamesStar = "postlist__svg-star",
            classNamesText = "postlist__text";

        if (like) {
            classNamesHeart += ' active';
        }

        if (important) {
            classNamesStar += ' active';
            classNamesText += ' active';
        }

        return (
            <li className="postlist__item">
                <span onClick={this.onLiked} className={classNamesText}>{label}</span>
                <span className="postlist__btns">
                    <button onClick={this.onImportant} className="postlist__btn">
                        <svg className={classNamesStar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" width="24px" height="24px"><g><rect fill="none" height="24" width="24" x="0" /><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" /></g></svg>
                    </button>
                    <button className="postlist__btn">
                        <svg className="postlist__svg-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none" /><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                    </button>
                    <svg className={classNamesHeart} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                </span>
            </li>
        )
    }
}