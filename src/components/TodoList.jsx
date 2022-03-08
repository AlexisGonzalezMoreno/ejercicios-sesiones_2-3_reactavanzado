import React, { useState } from 'react';
import useList from '../hooks/useList';

const Tasklist = () => {

    const tasks = useList([]);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        tasks.push(newTask);
        setNewTask('');
    }

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const clearList = () => {
        for(var i=0; i<tasks.value.length; i++) {
            tasks.remove(0);
        }
    }

    const sortList = () => {
        let tasksAux = [];
        for(var i=0; i<tasks.value.length; i++) {
            tasks.remove(0);
        }

        tasksAux = tasks.value.sort();

        for(var i=0; i<tasksAux.length; i++) {
            tasks.push(tasksAux[i]);
        }
    }

    const reverseOrderList = () => {
        let tasksAux = [];
        for(var i=0; i<tasks.value.length; i++) {
            tasks.remove(0);
        }

        tasksAux = tasks.value.reverse();

        for(var i=0; i<tasksAux.length; i++) {
            tasks.push(tasksAux[i]);
        }
    }

    return (
        <div>
            <h1>EJERCICIO 2</h1>
            <h2>Task List</h2>
            <form onSubmit={handleSubmit}>
                <input value={newTask} onChange={handleInputChange} placeholder='New Task' type='text' />
                <button type='submit'>
                    Create Task
                </button>
            </form>
            { tasks.isEmpty() ? 
                (<p>Task List is empty</p>)
                :
                (
                    <ul>
                        { tasks.value.map((task, index) => 
                            (
                                <li key={index}>
                                    <input type='checkbox' onClick={() => tasks.remove(index)} checked={false} />
                                    { task }
                                </li>
                            )
                        )}
                    </ul>
                )
            }
            <button onClick={ () => clearList()}>
                Clear List
            </button>
            <button onClick={() => sortList()}>
                Sort List
            </button>
            <button onClick={() => reverseOrderList()}>
                Reverse List Order
            </button>
        </div>
    );
}

export default Tasklist;
