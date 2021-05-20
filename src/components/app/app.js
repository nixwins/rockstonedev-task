import React, { useState } from 'react';
import AddItemPanel from '../add-item-panel';
import Clock from '../clock';
import TodoList from '../todo-list';

import './app.css';

const App = () => {

    const [uniqueKey, setUniqueKey] = useState(10000);
    const [taskList, setTaskList] = useState([]);
    const [initClientX, setInitClientX] = useState(0);
    const [endClientX, setEndClientX] = useState(0);
    const [initClientY, setInitClientY] = useState(0);
    const [endClientY, setEndClientY] = useState(0);
    const [isSwitch, setIsSwitch] = useState(false);

    const handleTouchStart = (event) => {
        const touch = event.nativeEvent.touches[0];
        setInitClientX(touch.clientX);
        setInitClientY(touch.clientY);
        // console.log("Start Y", touch.clientY);
    };

    const handleToucheMove = (event) => {
        const touch = event.nativeEvent.touches[0];
        setEndClientX(touch.clientX)
        setEndClientY(touch.clientY);

    };

    const handleTouchEnd = (event) => {
        swipe();
    }

    const swipe = () => {

        const threshold = 150, //required min distance traveled to be considered swipe
            restraint = 100; // maximum distance allowed at the same time in perpendicular direction

        const distX = endClientX - initClientX;
        const distY = endClientY - initClientY;

        if (Math.abs(distX) >= threshold && distY <= restraint) {
            console.log("swipe")
            setIsSwitch(true)

        }

        setInitClientX(0);
        setEndClientY(0);

    }

    const addItem = (text) => {
        const newItem = { id: uniqueKey, text };
        setUniqueKey(uniqueKey + 1);

        setTaskList([...taskList, newItem]);
        console.log("ADD", taskList)
    }

    const contentComponents = [AddItemPanel, TodoList];
    const clock = <Clock />

    const wrapper = <ContentWrapper components={contentComponents} />
    const visibleComponent = isSwitch ? clock : wrapper;
    return (
        <div className="app"
            onTouchStart={handleTouchStart}
            onTouchMove={handleToucheMove}
            onTouchEnd={handleTouchEnd}>
            {visibleComponent}
            {/* <AddItemPanel addItem={addItem} />
            <TodoList taskList={taskList} />
            <Clock /> */}
        </div>

    );
}

const ContentWrapper = ({ components }) => {
    return (
        <>
            {components}
        </>
    )
}

export default App;