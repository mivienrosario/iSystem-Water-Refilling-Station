import Navbar from './components/Navbar';
import Home from './components/Home';
import Employees from './components/Employees';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customers from './components/Customer/Customers';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/customers" component={Customers} />
            <Route path="/employees" component={Employees} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
