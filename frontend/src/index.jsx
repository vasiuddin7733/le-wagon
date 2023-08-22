import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/home";
import Users from "./containers/users";

function Index() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Index;
