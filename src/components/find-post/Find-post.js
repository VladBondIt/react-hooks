import React, { Component } from 'react';

import './Find-post.scss';

export default class FindPost extends Component {

    state = {
        term: '',
    }
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'like', label: 'Favorite' }
    ]

    onUpdatePosts = (e) => {
        const term = e.target.value;
        this.setState({ term })
        this.props.onUpdatePosts(term)
    }

    render() {
        const btns = this.buttons.map(({ name, label }) => {
            const active = this.props.filter === name;
            const btnClassName = active ? ' active' : null;
            return (
                <button
                    onClick={() => this.props.onFilter(name)}
                    key={`id ${Math.random() * 100}`}
                    className={`findpost__btn ${btnClassName}`}
                >{label}</button>
            )
        })

        return (
            <div className="findpost">
                <input
                    className="findpost__input"
                    type="text"
                    placeholder="Type for search post"
                    onChange={this.onUpdatePosts}
                />
                <div className="findpost__btns">
                    {btns}
                </div>
            </div>
        )
    }
}