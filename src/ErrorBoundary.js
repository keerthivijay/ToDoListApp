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
        //Fire base error log need to add - https://firebase.google.com/docs/crashlytics
    }

    getLogService = console.log

    render() {

        let displayContent = '';
        if(this.state.hasError){
            displayContent = <div className="error-message">'Something went wrong! Please wait...'</div>;
        } else {
            displayContent = this.props.children;
        }

        return(
            <div>
                {displayContent}
            </div>
        )
    }
}

export default ErrorBoundary;