import React, { Component } from 'react';
import './List-item.scss'

export default class ListItem extends Component {
    state = {
        spoiler: true
    }

    spoiler = () => {
        this.setState(state => ({
            spoiler: !state.spoiler,
        }))
    }

    render() {
        const { spoiler } = this.state;
        const { label } = this.props;

        return (
            <>
                <li className='list__item' onClick={this.spoiler} >
                    {label}
                    <svg className={spoiler ? 'list__svg' : 'list__svg active'} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
                </li>
                <li className={spoiler ? 'list__spoiler' : 'list__spoiler active'}>
                    ABRAAMSNSPSMDKDIDDIOD
                </li>
            </>
        );
    }
}