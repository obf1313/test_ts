import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import { Spin } from 'antd';

function Loading() {
  return <Spin />;
}

const Home = Loadable({
  loader: () => import('@views/Home'),
  loading: Loading
});

const User = Loadable({
  loader: () => import('@views/User'),
  loading: Loading
});

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/User" component={User} />
        </Switch>
      </Router>
    );
  }
}
export default App;
