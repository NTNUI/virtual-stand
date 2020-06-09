import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import URLS from './URLS';

// Theme
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import './assets/css/main.css';

// Project containers
import Landing from './containers/Landing';
import About from './containers/About';
import Admin from './containers/Admin';
import Games from './containers/Games';
import Groups from './containers/Groups';

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path={URLS.landing} component={Landing} />
          <Route exact path={URLS.ntnui} component={About} />
          <Route exact path={URLS.admin} component={Admin} />
          <Route exact path={URLS.games} component={Games} />
          <Route exact path={URLS.groups} component={Groups} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
