import React, { useState } from 'react';
import AddItemPanel from '../add-item-panel';
import Clock from '../clock';
import TodoList from '../todo-list';

import './app.css';

const App = () => {

    const [idx, setIdx] = useState(10000);
    const [taskList, setTaskList] = useState([]);

    const addItem = (text) => {
        const newItem = { id: idx, text };
        setIdx(idx + 1);

        setTaskList([...taskList, newItem]);
        console.log("ADD", taskList)
    }

    return (
        <div className="app">
            <AddItemPanel addItem={addItem} />
            <TodoList taskList={taskList} />
            {/* <Clock /> */}
        </div>

    );
}

export default App;