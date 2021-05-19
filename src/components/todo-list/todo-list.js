import React from 'react';
import TodoListItem from '../todo-list-item'

const TodoList = ({ taskList }) => {

    console.log(taskList)
    const items = taskList.map(({ text }) => {
        return (
            <li className="list-group-item">
                <TodoList text={text} />
            </li>
        );
    });

    if (!items) return <span>empty list</span>
    return (
        <ul className="list-group">
            {items}
        </ul>
    )
}

export default TodoList;