import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Problem1 from "./Problem1";
import Problem2 from "./Problem2";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/problem1" component={Problem1} />
        <Route path="/problem2" component={Problem2} />
      </Switch>
    </Router>
  );
}

export default App;
