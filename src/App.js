import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom";
import { Home } from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import { Search } from "./pages/search/Search";
import Create from "./pages/create/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <Create path="/create" />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/recipe">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
