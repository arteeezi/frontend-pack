import React, {Component} from 'react';

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: {
                name: '',
                description: ''
            },
            formErrors: null
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        const target = event.target,
            name = target.name;

        this.setState(state => ({
            task:{
                ...state.task,
                [name]: target.value
            }

        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        let errors = [];
        for( let key in this.state.task){
            if (this.state.task[key] === ''){
                errors.push(key);
            }
        }

        this.setState(state =>({
            formErrors: [...errors]
        }),
            this.addTask);
    }

    addTask(){
        if (this.state.formErrors.length === 0){
            this.props.addTask(this.state.task);
        }
    }

    render() {
        return (
            <div className="tasks__add">
                <form onSubmit={this.handleSubmit} method={"post"}>
                    <input
                        className={`tasks__input`}
                        type="text"
                        name="name"
                        onInput={this.handleInput}
                    />
                    <input
                        className={`tasks__input`}
                        type="text"
                        name="description"
                        onInput={this.handleInput}
                    />
                    <input type="submit" value="Добавить"/>
                </form>
            </div>
        );
    }
}


export default AddTask;