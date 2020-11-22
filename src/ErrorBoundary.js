const { Component } = require("react");

class ErrorBoundary extends Component {

    state = {
        hasError : false
    }

    static getDerivedStateFromError (error) {

        return {hasError:true}
    }

    componentDidCatch(error, info){

        console.log(error);
        console.log(info);
        //this.setState({hasError:true});
        this.getLogService(error.toString(),info.componenetstack);
    }

    getLogService = console.log

    render() {

        let errorMsg = '';
        if(this.state.hasError){
            errorMsg = 'Something went wrong! Please wait...';
        } else {
            errorMsg = this.props.children;
        }

        return(
            <div className="">
                {errorMsg}
            </div>
        )
    }
}

export default ErrorBoundary;