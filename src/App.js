import './App.css';
import { Button } from '@material-ui/core';
import SignIn from './components/SignIn';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Button variant="contained" color="primary" size="large">
        Submit
      </Button>
      
      <SignIn ></SignIn>
    </div>
  );
}

export default App;
