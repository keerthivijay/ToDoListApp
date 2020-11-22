import { Component } from "react";

class Todoitems extends Component {

    openToDo = id => {
        
        var x = document.getElementById(id).getElementsByClassName('list-item-task')[0];
        if (x.className.indexOf("show") == -1) {
          x.className += " show";
        } else { 
          x.className = x.className.replace(" show", "");
        }
    }

    doneToDo = id => {
        
        var x = document.getElementById(id).getElementsByClassName('task-item-title')[0];
        if (x.className.indexOf("done") == -1) {
            x.className += " done";
        } else { 
            x.className = x.className.replace(" done", "");
        }
    }
      
    render(){

        console.log(this.props);
        
        return(
            <div className="list-item" id={this.props.id}>
                <div className="list-main">
                    <div className="task-item-title" onClick={()=>this.openToDo(this.props.id)} >
                        {this.props.title}
                    </div>
                    <div className="actions">
                        <div className="list-edit-button" onClick={this.props.editToDo}>
                            <i className="fas fa-pencil-alt" title="Edit"></i>
                        </div>
                        <div className="list-edit-button" onClick={() => this.doneToDo(this.props.id)}>
                            <i className="fas fa-check" title="Done"></i>
                        </div>
                        <div className="list-edit-button" onClick={this.props.deleteToDo}>
                            <i className="fas fa-minus-circle" title="Remove"></i>
                        </div>
                    </div>
                </div>
                <div className="list-item-task">
                    {this.props.task}
                </div>
            </div>
        );
    }
}

export default Todoitems;