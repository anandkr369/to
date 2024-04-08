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
            <div className='h-20 w-100% flex bg-blue-500 '>
                <label className='mx-10 mt-5 font-bold text-gray-700 text-3xl flex'>TODO List</label>
                <label className='flex text-white mx-80 font-mono mt-7 text-xl'>Write your TODO tasks...</label>
            </div>

            <div className='bg-gray-200 w-2/4 mx-96 mt-5 rounded-3xl overflow-auto' style={{height: '550px'}}>
                <input className='h-16 w-3/5 border-0 ml-16 mt-16 rounded-sm outline-none p-3' type="text" placeholder='Enter your task here...' value={text} onChange={handleValue} />
                <input className='bg-green-400 h-16 w-28 rounded-md' type="button" value="Add task" onClick={addTask} />
                <div>
                    <ul>
                        {task.map((taskItem, idx) => (
                            <li className="h-10 w-3/4 ml-16 mt-1 bg-blue-200 rounded-md flex" key={idx}>
                                <label className={`ml-2 flex ${taskItem.completed ? 'line-through' : ''}`}>{taskItem.text}</label>
                                <input className="bg-yellow-300 h-10 w-20 rounded-md ml-auto" type="button" value="Completed" onClick={() => handleCompleted(idx)} />
                                <input className="bg-red-300 h-10 w-20 rounded-md" type="button" value="Remove" onClick={() => updateRemove(idx)} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
