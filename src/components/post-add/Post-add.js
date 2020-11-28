import React, { Component } from 'react';

import './Post-add.scss';


export default class PostAdd extends Component {

    state = {
        label: ''
    }

    addPostValue = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        const { label } = this.state;
        e.preventDefault();
        if (label !== '' && label !== ' ') {
            this.props.onAdd(label);
        }
        e.target.reset();
        this.setState(() => {
            const tempObj = { ...this.state };
            tempObj.label = '';
            return tempObj;
        })
    }


    render() {

        return (
            <form
                onSubmit={this.onSubmit}
                className="form">
                <input
                    onChange={this.addPostValue}
                    type='text'
                    placeholder='Add post'
                    className="form__input-text"
                />
                <button
                    type='submit'
                    className='form__btn btn'
                >Added</button>
            </form>
        )
    }
}