import { Component } from "react";

class Todoitems extends Component {

    //let ref = createRef();


    render(){

        console.log(this.props);

        return(
            <div>
                <div>
                    ref:{this.props.ref}
                    title: {this.props.title}
                </div>
                <div>
                    Task:{this.props.task}
                </div>
                <span onClick={this.props.editToDo}>
                    edit
                </span>
            </div>
        );
    }
}

export default Todoitems;