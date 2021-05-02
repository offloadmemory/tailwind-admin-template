import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout';

import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/create-account" component={Login} />
        <Route path="/forgot-password" component={Login} />

        <Route path="/app" component={Layout} />
        <Redirect exact from="/" to="/app" />
      </Switch>
    </Router>
  );
}

export default App;
