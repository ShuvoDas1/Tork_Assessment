import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GetUser from './Components/GetUser/GetUser';
import Postuser from './Components/PostUser.js/Postuser';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path='/'>
                    <GetUser></GetUser>
                </Route>
                <Route path='/post'>
                    <Postuser></Postuser>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
