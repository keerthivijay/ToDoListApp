import { Component } from "react";

class Todoitems extends Component {

    //let ref = createRef();


    render(){

        console.log(this.props);

        return(
            <div className="list-item">
                <div className="list-main">
                    <div className="task-item-title">
                        Title: {this.props.title}
                    </div>
                    <div className="list-edit-button" onClick={this.props.editToDo}>
                        edit
                    </div>
                    <div className="list-edit-button">
                        open
                    </div>
                    <div className="list-edit-button">
                        Done
                    </div>
                </div>
                <div className="list-item-task">
                    Task:{this.props.task}
                </div>
            </div>
        );
    }
}

export default Todoitems;