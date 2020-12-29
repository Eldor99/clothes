import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";

const Hats = () => {
  return <div>Hays</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
