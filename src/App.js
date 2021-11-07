import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import history from './History';
import { Router , Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router history={history}>
    <div className="App">
        <Switch>
        <Route path ='/' exact component={Signin}/>
        <Route path='/signup' exact component = {Signup}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
