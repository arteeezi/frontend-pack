import React from 'react';


const TasksList = (props) => {

    const tasks = props.tasks;
    const selectTask = (task) => {

    };

    return (
        <div className="tasks__list">
            {tasks.map((task, index) => (
                <div
                    className="tasks__item"
                    key={index}
                    onClick={selectTask(task)}
                >
                    <div className="tasks__title">{task.name}</div>
                    {/*{task.subTasks && task.subTasks.length ? <TasksList tasks={task.subTasks} /> : null }*/}
                </div>
            ))}
        </div>
    );
};

export default TasksList;