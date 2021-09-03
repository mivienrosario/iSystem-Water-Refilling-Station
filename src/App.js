import Navbar from './components/Navbar';
import Home from './components/Home';
import Employees from './components/Employee/Employees';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customers from './components/Customer/Customers';
import Products from './components/Product/Products';
import Create from './components/Employee/Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/customers" component={Customers} />
            <Route path="/products" component={Products} />
            <Route path="/employees" component={Employees} />
            <Route path="/create" component={Create} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
