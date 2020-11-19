import { Component } from "react";
import Todoitems from './Todoitmes';
import Layout from './Layout';

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
        if(this.state.title==''){
            return false;
        }
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

    deleteToDo = (index) => {
        console.log('delete to do!');

        let updateState = {...this.state};
        delete updateState.todolist[index];
        console.log(updateState);
        this.setState(updateState);
    }

    render(){

        let todoList = this.state.todolist.map((value,key) => {
            console.log(key);
            return(
                <Todoitems key={key} id={key} editToDo={()=>this.editToDo(key)} ref={key} title={value.title} task={value.task} editbutton={this.editToDo} deleteToDo={() => this.deleteToDo(key)} />
            )
        })

        return(
            <Layout>
                <div>
                    <form onSubmit={this.submitHandler} method="POST" className="to-do-form">
                        <div className="form-element">
                            <input type="text" name="title" value={this.state.title} onChange={this.handleFormChange} placeholder="Title" />
                        </div>
                        <div className="form-element">
                            <input type="text" name="task" value={this.state.task} onChange={this.handleFormChange} placeholder="Task" />
                        </div>
                        <div className="form-element">
                            <button type="submit" name="submit" value="Submit"><i class="fas fa-plus-circle"> ADD</i></button>
                        </div>

                    </form>
                </div>
                <div className="list-items">
                    {todoList}
                </div>
            </Layout>
        );
    }
}

export default Todocreate;