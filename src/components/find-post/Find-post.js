import React, { Component } from 'react';

import './Find-post.scss';

export default class FindPost extends Component {
    render() {
        return (
            <div className="findpost">
                <input
                    className="findpost__input"
                    type="text"
                    placeholder="Type for search post"
                />
                <div className="findpost__btns">
                    <button className="findpost__btn">All</button>
                    <button className="findpost__btn">Favorite</button>
                </div>
            </div>
        )
    }
}