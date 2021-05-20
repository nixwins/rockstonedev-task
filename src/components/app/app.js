import React, { useEffect, useState } from 'react';
import AddItemPanel from '../add-item-panel';
import Clock from '../clock';
import TodoList from '../todo-list';

import './app.css';

const App = () => {

    const [uniqueKey, setUniqueKey] = useState(10000);
    const [taskList, setTaskList] = useState([]);
    const [initClientX, setInitClientX] = useState(null);
    const [endClientX, setEndClientX] = useState(null);
    const [initClientY, setInitClientY] = useState(null);
    const [endClientY, setEndClientY] = useState(null);
    const [isSwitch, setIsSwitch] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("touchstart", handleTouchStart);
    //     window.addEventListener("touchmove", handleToucheMove);
    //     window.addEventListener("touchend", handleTouchEnd);
    // });

    const handleTouchStart = (event) => {
        const touch = event.nativeEvent.touches[0];
        setInitClientX(touch.clientX);
        setInitClientY(touch.clientY);
    };

    const handleToucheMove = (event) => {
        const touch = event.nativeEvent.touches[0];
        setEndClientX(touch.clientX)
        setEndClientY(touch.clientY);
    };

    const handleTouchEnd = (event) => {

        if (!initClientX || !initClientY) return;

        const xDiff = endClientX - initClientX;
        const yDiff = endClientY - initClientY;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            //right to left
            if (xDiff > 150 && xDiff < 400) {
                console.log("xDIF", xDiff, "endX", endClientX)
                swipeRight();
            }
            else if (Math.abs(xDiff) < 400 && Math.abs(xDiff) > 150 && endClientX) {
                console.log("LEFT xDIF", xDiff, "LeftendX", endClientX)
                swipeLeft();
            }
        }

        setInitClientX(null);
        setInitClientY(null);
        setEndClientX(null);
        setEndClientY(null);
    }

    const swipeRight = () => {
        setIsSwitch(!isSwitch)
        console.log("RIGHT")
    }
    const swipeLeft = () => {
        setIsSwitch(!isSwitch)
        console.log("LEFT")
    }

    const addItem = (text) => {
        const newItem = { id: uniqueKey, text };
        setUniqueKey(uniqueKey + 1);

        setTaskList([...taskList, newItem]);
        console.log("ADD", taskList)
    }

    const clock = <Clock />
    const wrapper = <ContentWrapper addItem={addItem} taskList={taskList} />
    const visibleComponent = isSwitch ? clock : wrapper;

    return (
        <div className="app"
            onTouchStart={handleTouchStart}
            onTouchMove={handleToucheMove}
            onTouchEnd={handleTouchEnd}>

            {visibleComponent}

        </div>

    );
}

const ContentWrapper = ({ addItem, taskList }) => {
    return (
        <>
            <AddItemPanel addItem={addItem} />
            <TodoList taskList={taskList} />
        </>
    )
}

export default App;