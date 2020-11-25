import React, { Component } from 'react';
import ListItem from '../list-item/List-item'
import './List.scss';

export default class List extends Component {

    render() {
        return (
            <ul className="list">
                <ListItem label='React so hard to learn' />
                <ListItem label='This is so unlogical thing' />
            </ul>
        )
    }
}