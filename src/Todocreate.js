import { Component } from "react";
import Todoitems from './Todoitmes';

class Todocreate extends Component {

    state = {
        title:'',
        task:'',
        todolist : [],
        editItem: '',
        editAction: false
    }

    handleFormChange = event => {

        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        }
        );
    }

    submitHandler = (event) => {

        event.preventDefault();
        console.log(this.state);
        if(this.state.editAction) {
            this.updateToDo();
        } else {

            let list = [ ...this.state.todolist ];
            list.push({title:this.state.title, task:this.state.task});

            this.setState(
                {todolist:list,
                title:'',
                task:''}
            );
        }

        
        console.log(this.state);
        
    }

    editToDo = (val) => {
        console.log(val);
        console.log(this.state.todolist[val]);
        //console.log(this.state.val[title]);
        //console.log(this.state.val[task]);

        this.setState(
            {
                title:this.state.todolist[val].title,
                task:this.state.todolist[val].task,
                editItem:val,
                editAction:true
            }
        );
    }

    updateToDo = () => {

        console.log('update todo');
        let updateTodo = {...this.state};
        updateTodo.todolist[this.state.editItem] = {title:this.state.title,task:this.state.task};
        updateTodo.editAction=false;
        updateTodo.title='';
        updateTodo.task='';
        console.log(updateTodo);

        this.setState(
            updateTodo
        );

        console.log(this.state);
    }

    render(){

        let todoList = this.state.todolist.map((value,key) => {
            return(
                <Todoitems key={key} editToDo={()=>this.editToDo(key)} ref={key} title={value.title} task={value.task} editbutton={this.editToDo} />
            )
        })

        return(
            <div>
                <form onSubmit={this.submitHandler} method="POST">
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleFormChange} />
                </div>
                <div>
                    <label>Task:</label>
                    <input type="text" name="task" value={this.state.task} onChange={this.handleFormChange} />
                </div>
                <div>
                    <input type="submit" name="submit" value="Submit" />
                </div>

            </form>

                {todoList}
            </div>
            
        );
    }
}

export default Todocreate;