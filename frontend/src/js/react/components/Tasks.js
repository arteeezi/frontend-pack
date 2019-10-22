import React, {Component} from "react";
import TasksList from './TasksList';
import AddTask from './AddTask';

class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 1,
                    parent: null,
                    name: 'Задача один',
                    description: 'Описание задачи',
                    subTasks: {}
                }
            ],
            selected: {}
        };

        this.addTask = this.addTask.bind(this);
        this.toggleSelect = this.toggleSelect.bind(this);

    }

    addTask(task) {

        console.log(task);

        this.setState(state => {
            return {
                tasks: [...state.tasks, task]
            }
        })
    }

    toggleSelect(task) {
        this.setState({
            selected: task
        });
        console.log(task);
    }

    render() {
        const tasks = this.state.tasks;

        return (
            <div className="container">
                <div className="tasks">
                    <AddTask addTask={this.addTask}/>
                    <TasksList selectTask={this.toggleSelect} tasks={tasks}/>
                </div>
            </div>

        );
    }
}

export default Tasks;