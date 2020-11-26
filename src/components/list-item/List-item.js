import React, { Component } from 'react';
import './List-item.scss'

export default class ListItem extends Component {
    state = {
        spoilerSwitch: false
    }

    spoiler = () => {
        this.setState(state => ({
            spoilerSwitch: !state.spoilerSwitch,
        }))
    }

    render() {
        const { spoilerSwitch } = this.state;
        const { label, spoiler } = this.props;
        let classNames = 'list__spoiler',
            classNamesList = 'list__item';

        if (spoilerSwitch) {
            classNames += ' active';
            classNamesList += ' active';
        }

        return (
            <>
                <li className={classNamesList} onClick={this.spoiler} >
                    {label}
                    <svg className='list__svg' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
                </li>
                <li className={classNames}>
                    {spoiler}
                </li>
            </>
        );
    }
}