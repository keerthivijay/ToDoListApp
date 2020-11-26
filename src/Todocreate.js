import React, { Component } from "react";
import Todoitems from './Todoitmes';
import Layout from './Layout';
import firebaseDB from './firebase';
import Loader from "./Loader";

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
        hasError : false,
        search : '',
        validation : {
            title : {
                error: false,
                touched: false,
                errorMsg : ''
            }
        }
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

        let validate = this.validate(event);
        console.log(validate);
        
        this.setState({    
                [event.target.name]:event.target.value,
                validation : validate
            });

        console.log(this.state);
    }

    validate = (event) => {
        let validate = {};
        console.log(event.target.name,event.target.value);
        if(event.target.name==='title' && event.target.value===''){
            validate = {
                [event.target.name]: {
                    touched:true,
                    errorMsg:'please enter valid data',
                    error:true
                }
            }
        } else {
            validate = {
                title : {
                    error: false,
                    touched: false,
                    errorMsg : ''
                }
            }
        }

        return validate;
    }

    submitHandler = (event) => {

        event.preventDefault();
        //let validate = this.validate(event);
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

        if(!window.confirm('Do You want to delete?')){
            return false
        }

        //Delete from firebase
        firebaseDB.child('/'+index).remove(error => {
            console.log(error);
        })

        //Update state
        let updateState = {...this.state};
        delete updateState.todolist[index];
        this.setState(updateState);
    }

    search = (event) => {
        this.setState({search:event.target.value});

        console.log(this.state);
    }

    render(){
        
        let todoList = Object.keys(this.state.todolist).filter( (values) => {
            if(this.state.search === '') {
                return this.state.todolist[values];
            } else if(this.state.todolist[values].title.toLowerCase().includes(this.state.search.toLowerCase()) || this.state.todolist[values].task.toLowerCase().includes(this.state.search.toLowerCase())) {
                return this.state.todolist[values];
            }
        })
        .map((key) => {
            console.log(this.state.todolist);
            //console.log(val,key);
            console.log(this.state.todolist[key]);
            return(
                <Todoitems key={key} id={key} editToDo={()=>this.editToDo(key)} ref={key} title={this.state.todolist[key].title} task={this.state.todolist[key].task} editbutton={this.editToDo} deleteToDo={() => this.deleteToDo(key)} />
            )
        });

        if(todoList.length===0){
            todoList = 'No data found!';
        }
        if(this.state.loading){
            todoList = <Loader>Please Wait...</Loader>;
        } 

        return(
            <Layout>
                <form onSubmit={this.submitHandler} method="POST" className="to-do-form">
                    <div className="form-element">
                        <input type="text" name="title" ref={this.titleRef} value={this.state.title} onChange={this.handleFormChange} placeholder="Title" />
                        <span className="error-info">{this.state.validation.title.errorMsg}</span>
                    </div>
                    <div className="form-element">
                        <input type="text" name="task" value={this.state.task} onChange={this.handleFormChange} placeholder="Task (Optional)" />
                    </div>
                    <div className="form-element">
                        <button type="submit" name="submit" value="Submit"><i class="fas fa-plus-circle"> {this.state.editItem===''?'ADD' : 'UPDATE' } </i></button>
                    </div>
                </form>
                { !this.state.loading ? <div className="search-bar">
                        <input type="text" name="search" placeholder="Search" value={this.state.search} onChange={this.search} />
                    </div>: ''}
                <div className="list-items">
                    {todoList}
                </div>
            </Layout>
        );
    }
}

export default Todocreate;