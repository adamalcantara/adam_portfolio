import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div id='pageContent'>
        <Route exact path="" component={}/>
      </div>
    </Router>
  );
}

export default App;
