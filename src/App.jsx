import HomePage from "./components/HomePage";
import Order from "./components/Order";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Success from "./components/Success"

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={HomePage} />
    //     <Route path="/order" component={Order} />
    //   </Switch>
    // </Router>
    <Success />
  );
}

export default App;