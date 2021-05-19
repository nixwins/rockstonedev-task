import React, { useState } from 'react';
import './add-item-panel.css';

const AddItemPanel = ({ addItem }) => {

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addItem(text)
    }

    const onLabelChange = (e) => {
        const text = e.target.value;
        setText(text)
    }

    return (
        <form className="add-item-panel-form" onSubmit={onSubmit}>
            <div className="form-row">
                <textarea className="task-message" onInput={onLabelChange}></textarea>
                <button
                    className="btn-send">
                    Send
                </button>
            </div>
        </form>
    );
};

export default AddItemPanel;