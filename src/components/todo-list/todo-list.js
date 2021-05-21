import React, { useEffect } from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css';

const TodoList = ({ taskList }) => {

    const items = taskList.map(({ id, text }) => {

        return (
            <li className='list-group-item' key={id}>
                <TodoListItem text={text} />
            </li>
        );
    });

    return (
        <ul className="list-group">
            {items}
        </ul>
    )
}

export default TodoList;