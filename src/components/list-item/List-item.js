import React, { Component } from 'react';
import './List-item.scss'

export default class ListItem extends Component {
    state = {
        spoiler: false
    }

    spoiler = () => {
        this.setState(state => ({
            spoiler: !state.spoiler,
        }))
    }

    render() {
        const { spoiler } = this.state;
        const { label } = this.props;
        let classNames = 'list__spoiler',
            classNamesSvg = 'list__svg';

        if (spoiler) {
            classNames += ' active';
            classNamesSvg += ' active';
        }

        return (
            <>
                <li className='list__item' onClick={this.spoiler} >
                    {label}
                    <svg className={classNamesSvg} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
                </li>
                <li className={classNames}>
                    ABRAAMSNSPSMDKDIDDIOD
                </li>
            </>
        );
    }
}