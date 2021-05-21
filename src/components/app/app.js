import React, { useEffect, useState } from 'react';
import AddItemPanel from '../add-item-panel';
import Clock from '../clock';
import TodoList from '../todo-list';

import './app.css';

const App = () => {

    const [uniqueKey, setUniqueKey] = useState(10000);
    const [taskList, setTaskList] = useState([
        // { id: uniqueKey, text: "Assignments to the 'interval' variable from inside React Hook " },
        // { id: uniqueKey, text: "Assignments to the 'interval' variable from inside React Hook " },
        // { id: uniqueKey, text: "Assignments to the 'interval' variable from inside React Hook " },
        // { id: uniqueKey, text: "Assignments to the 'interval' variable from inside React Hook " },
        // { id: uniqueKey, text: "Assignments to the 'interval' variable from inside React Hook " },
        // { id: uniqueKey, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur veritatis qui vitae? Deserunt facilis voluptas corporis corrupti. Nisi quo at accusantium numquam consequuntur, pariatur, qui saepe perferendis, iure unde repellendus. " },
        // { id: uniqueKey, text: "Otherwise, you can move this variable directly inside useEffect Compiled " },
        // { id: uniqueKey, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur veritatis qui vitae? Deserunt facilis voluptas corporis corrupti. Nisi quo at accusantium numquam consequuntur, pariatur, qui saepe perferendis, iure unde repellendus. " },
        // { id: uniqueKey, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur veritatis qui vitae? Deserunt facilis voluptas corporis corrupti. Nisi quo at accusantium numquam consequuntur, pariatur, qui saepe perferendis, iure unde repellendus. " },
        // { id: uniqueKey, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur veritatis qui vitae? Deserunt facilis voluptas corporis corrupti. Nisi quo at accusantium numquam consequuntur, pariatur, qui saepe perferendis, iure unde repellendus. " },
        // { id: uniqueKey, text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur veritatis qui vitae? Deserunt facilis voluptas corporis corrupti. Nisi quo at accusantium numquam consequuntur, pariatur, qui saepe perferendis, iure unde repellendus. " },

    ]);
    const [initClientX, setInitClientX] = useState(null);
    const [endClientX, setEndClientX] = useState(null);
    const [initClientY, setInitClientY] = useState(null);
    const [endClientY, setEndClientY] = useState(null);
    const [isSwitch, setIsSwitch] = useState(false);

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

        setTaskList([newItem, ...taskList]);
    }

    const visibleStyle = { display: "block" };

    const clock = (
        <div className="content-wrapper" style={visibleStyle} >
            <Clock style={visibleStyle} />
        </div>
    );

    const wrapper = (
        <div className="content-wrapper" style={visibleStyle} >
            <ContentWrapper addItem={addItem} taskList={taskList} />
        </div>);

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
            <AddItemPanel addItem={addItem} lastItemId={taskList[taskList.length - 1]} />
            <TodoList taskList={taskList} />
        </>
    )
}

export default App;