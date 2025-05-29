import HomePage from "./components/HomePage";
import Order from "./components/Order";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/order" component={Order} />
      </Switch>
    </Router>
  );
}

export default App;