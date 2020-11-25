import React, { Component } from 'react';
import ListItem from '../list-item/List-item'
import './List.scss';

export default class List extends Component {

    render() {
        const { data } = this.props;
        const elements = data.map(elem => <ListItem label={elem.label} key={`label${Math.random() * 10}`} />);

        return (
            <ul className="list">
                {elements}
            </ul>
        )
    }
}