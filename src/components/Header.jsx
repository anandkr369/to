import React, { useState } from 'react';

function Header() {
    const [text, setText] = useState('');
    const [task, setTask] = useState([]);

    const addTask = () => {
        if (text.trim() !== '') {
            setTask([...task, { text, completed: false }]);
            setText('');
        }
    };

    const handleValue = (event) => {
        setText(event.target.value);
    };

    const handleCompleted = (idx) => {
        const updatedTasks = [...task];
        updatedTasks[idx] = {
            ...updatedTasks[idx],
            completed: !updatedTasks[idx].completed
        };
        setTask(updatedTasks);
    };

    const updateRemove = (idx) => {
        const updatedTasks = task.filter((_, i) => i !== idx);
        setTask(updatedTasks);
    };

    return (
        <>
            <div className='header flex items-center justify-between bg-blue-500 px-8 py-4'>
                <h1 className='text-gray-700 text-3xl font-bold'>TODO List</h1>
                <input
                    className='task-input h-12 w-80 bg-white border border-gray-300 rounded-md px-4 outline-none'
                    type="text"
                    placeholder='Enter your task here...'
                    value={text}
                    onChange={handleValue}
                />
                <button
                    className='add-task bg-green-400 text-white rounded-md px-6 py-2'
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>

            <div className='task-list mt-8 mx-auto max-w-md'>
                <ul>
                    {task.map((taskItem, idx) => (
                        <li className={`task-item bg-blue-200 rounded-md p-4 flex items-center justify-between mb-4 ${taskItem.completed ? 'completed' : ''}`} key={idx}>
                            <label className={`text-gray-800 ${taskItem.completed ? 'line-through' : ''}`}>{taskItem.text}</label>
                            <div>
                                <button
                                    className='completed-btn bg-yellow-300 text-white rounded-md px-4 py-2 mr-2'
                                    onClick={() => handleCompleted(idx)}
                                >
                                    {taskItem.completed ? 'Undo' : 'Complete'}
                                </button>
                                <button
                                    className='remove-btn bg-red-300 text-white rounded-md px-4 py-2'
                                    onClick={() => updateRemove(idx)}
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Header;
