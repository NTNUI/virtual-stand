import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import URLS from './URLS';
import GA from './analytics';
import {GroupsProvider} from './GroupsContext';

// Theme
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import './assets/css/main.css';

// Project containers
import Landing from './containers/Landing';
import Login from './containers/Login';
import About from './containers/About';
import ActiveCampus from './containers/ActiveCampus';
import Admin from './containers/Admin';
import Games from './containers/Games';
import GroupDetails from './containers/GroupDetails';
import GroupEdit from './containers/GroupEdit';

function App() {
  return (
    <GroupsProvider>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          {process.env.NODE_ENV === 'production' && GA.init() && <GA.RouteTracker /> }
          <Switch>
            <Route exact path={URLS.ntnui} component={About} />
            <Route exact path={URLS.activeCampus} component={ActiveCampus} />
            <Route exact path={URLS.admin} component={Admin} />
            <Route exact path={URLS.games} component={Games} />
            <Route exact path={URLS.groups.concat(':slug').concat(URLS.edit)} component={GroupEdit} />
            <Route exact path={URLS.groups.concat(':slug')} component={GroupDetails} />
            <Route exact path={URLS.login} component={Login} />
            <Route path={URLS.landing} component={Landing} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    </GroupsProvider>
  );
}

// eslint-disable-next-line no-console
console.log('%cLaget av %cNTNUI Sprint', 'font-weight: bold; font-size: 1rem;color: yellow;', 'font-weight: bold; padding-bottom: 10px; padding-right: 10px; font-size: 3rem;color: yellow; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 green , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
// eslint-disable-next-line no-console
console.log('%cSnoker rundt du? Det liker vi. Vi i NTNUI Sprint ser etter nye medlemmer.', 'font-weight: bold; font-size: 1rem;color: yellow;', '');

ReactDOM.render(<App />, document.getElementById('root'));
