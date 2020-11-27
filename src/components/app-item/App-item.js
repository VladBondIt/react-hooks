import React, { Component } from 'react';
import './App-item.scss';

export default class AppItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    addCount = () => {
        this.setState(state => ({
            count: ++state.count
        }))
    }

    render() {
        const { name } = this.props;
        const { count } = this.state;

        return (
            <div className="wrapper">
                <h1 className="wrapper__heading">Hello world its {name}!</h1>
                <div className="wrapper__count">{count}</div>
                <button className="wrapper__btn btn" onClick={this.addCount}>Click me plz</button>
            </div>
        )
    }
}