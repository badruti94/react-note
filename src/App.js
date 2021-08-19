import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add" >
          <Add />
        </Route>
        <Route path="/edit/:id" >
          <Edit />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
