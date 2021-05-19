import React, { Component } from 'react';
import AddItemPanel from '../add-item-panel';
import Clock from '../clock';
import TodoList from '../todo-list';

import './app.css';


export default class App extends Component {

    state = {
        taskList: []
    }

    addItem = (text) => {
        this.setState((state) => {
            const newItem = { text };
            return {
                taskList: [...this.state.taskList, newItem]
            };
        });
    }

    render() {

        const { taskList } = this.state;
        return (
            <div className="app">
                <AddItemPanel addItem={this.addItem} />
                <TodoList taskList={taskList} />
                {/* <Clock /> */}
            </div>

        );
    }
}