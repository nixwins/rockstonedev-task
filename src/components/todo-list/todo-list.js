import React, { useEffect } from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css';

const TodoList = ({ taskList }) => {

    const items = taskList.map((item) => {
        return (
            <li className="list-group-item" key={item.id}>
                <TodoListItem text={item.text} />
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