import './todo.css'

function TodoItem({ task, taskCompleted, deleteTask }) {
    return (
        <div className='todo-item-container'>
            <div className={task.completed ? 'todo-item completed' : 'todo-item'} onClick={() => taskCompleted(task.id)}>
                <h4 className='todo-text'>{task.task}</h4>

            </div>
            <button onClick={() => deleteTask(task.id)}>X</button>

        </div>
    )
}

export default TodoItem