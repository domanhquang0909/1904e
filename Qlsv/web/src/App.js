import './App.css';
import Page from './components/page/Page';
import {Switch, Route, Redirect} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/" exact>
          <Redirect to='/login'></Redirect>
        </Route>
        <Route path="/login">
          <Login />
        </Route> */}
        <Route path="/">
          <Page />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
