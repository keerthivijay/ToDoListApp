import React, { Component } from "react";
import Todoitems from './Todoitmes';
import Layout from './Layout';
import firebaseDB from './firebase';

class Todocreate extends Component {

    constructor(props){
        super(props);
        this.titleRef = React.createRef();
    }

    state = {
        title:'',
        task:'',
        todolist : {},
        editItem: '',
        firebaseEditId:'',
        editAction: false,
        loading:true,
        hasError : false
    }

    componentDidMount = () => {

        this.titleRef.current.focus();
        console.log(this.titleRef);

        //Get from firebase DB
        firebaseDB.on('value',snapshot => {
            if(snapshot.val()!=null){
               this.setState({...this.state,todolist:snapshot.val(),loading:false});
            }
        })
    }

    handleFormChange = event => {

        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        });
    }

    submitHandler = (event) => {

        event.preventDefault();
        this.titleRef.current.focus();

        if(this.state.title===''){
            return false;
        }
        if(this.state.editAction) {
            this.updateToDo();
        } else {

            //Add to firebase DB
            firebaseDB.push({title:this.state.title, task:this.state.task},
                error=>{
                    console.log(error);
            });

            this.setState({title:'',task:''});
        }        
    }

    editToDo = (val) => {
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

        //Update in firebase
        firebaseDB.child('/'+this.state.editItem).update({title:this.state.title, task:this.state.task},error => {
            console.log(error);
        });

        //Set state
        let updateTodo = {...this.state};
        updateTodo.todolist[this.state.editItem] = {title:this.state.title,task:this.state.task};
        updateTodo.editAction=false;
        updateTodo.title='';
        updateTodo.task='';
        updateTodo.editItem='';
        this.setState(updateTodo);
    }

    deleteToDo = (index) => {

        //Delete from firebase
        firebaseDB.child('/'+index).remove(error => {
            console.log(error);
        })

        //Update state
        let updateState = {...this.state};
        delete updateState.todolist[index];
        this.setState(updateState);
    }

    render(){

        let todoList = Object.keys(this.state.todolist).map((key) => {
            
            return(
                <Todoitems key={key} id={key} editToDo={()=>this.editToDo(key)} ref={key} title={this.state.todolist[key].title} task={this.state.todolist[key].task} editbutton={this.editToDo} deleteToDo={() => this.deleteToDo(key)} />
            )
        });

        if(this.state.loading){
            todoList = <i className="fas fa-spinner"></i>;
        } 

        return(
            <Layout>
                <form onSubmit={this.submitHandler} method="POST" className="to-do-form">
                    <div className="form-element">
                        <input type="text" name="title" ref={this.titleRef} value={this.state.title} onChange={this.handleFormChange} placeholder="Title" />
                    </div>
                    <div className="form-element">
                        <input type="text" name="task" value={this.state.task} onChange={this.handleFormChange} placeholder="Task" />
                    </div>
                    <div className="form-element">
                        <button type="submit" name="submit" value="Submit"><i class="fas fa-plus-circle"> {this.state.editItem===''?'ADD' : 'EDIT' } </i></button>
                    </div>
                </form>
                <div className="list-items">
                    {todoList}
                </div>
            </Layout>
        );
    }
}

export default Todocreate;