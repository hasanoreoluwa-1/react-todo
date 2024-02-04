import { useState } from "react";
import TodoItem from "./TodoItem";
import './todo.css'

function TodoList() {
    const [task, SetTask] = useState([
        {
            id: 1,
            task: 'Read',
            completed: false
        },
        {
            id: 2,
            task: 'Eat',
            completed: true
        }
    ])
    const [text, SetText] = useState('')
    function addTask(text) {
        if (text == '') {
            alert('Task is empty')
        } else {
            let newTask = {
                id: Date.now(),
                task: text,
                completed: false
            }
            SetTask([
                ...task,
                newTask
            ])
            SetText('')
        }


    }
    function taskCompleted(id) {
        SetTask(task.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }
            } else {
                return task
            }
        }))
    }
    function deleteTask(id) {
        SetTask(task.filter(task => task.id !== id))
    }
    function clearTasks() {
        SetTask([])
    }
    return (
        <div className="todo-list">
            <form>
                <input value={text} onChange={e => SetText(e.target.value)} />
                <button onClick={(e) => { e.preventDefault(); addTask(text) }}>Add Task</button>
            </form>
            <div className="todos-container">
                <h3>Tasks To do</h3>
                {task.map((item) => <TodoItem task={item} taskCompleted={taskCompleted} deleteTask={deleteTask} />)}
            </div>
            <button onClick={() => clearTasks()}>Clear All Tasks</button>
        </div >
    )
}

export default TodoList;