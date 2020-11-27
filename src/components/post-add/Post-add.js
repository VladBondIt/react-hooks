import React from 'react';

import './Post-add.scss';


const PostAdd = ({ onAdd }) => {
    return (
        <form className="form">
            <input
                type='text'
                placeholder='Add post'
                className="form__input-text"
            />
            <button
                onClick={() => onAdd('Hello')}
                type='button'
                className='form__btn btn'
            >Added</button>
        </form>
    )
}

export default PostAdd;