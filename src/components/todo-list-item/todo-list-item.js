import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({ text }) => {

    let ANIMATION_DELAY = 0.1;


    const words = text.split(' ');
    const wrapEachWord = words.map((word) => {
        const style = {
            animationDelay: `${ANIMATION_DELAY}s`
        }
        ANIMATION_DELAY += 0.1;

        return <span style={style}>{word}</span>
    })
    return (
        <div className="fadeIn">{wrapEachWord}</div>
    );
}

export default TodoListItem;