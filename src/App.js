import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary" size="large">
        Submit
      </Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
      <SignIn ></SignIn>
    </div>
  );
}

export default App;
