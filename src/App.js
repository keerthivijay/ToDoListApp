import logo from './logo.svg';
import './App.css';
import Todocreate from './Todocreate';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Todocreate/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
