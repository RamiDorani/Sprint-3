const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { Header } from "./cmps/jointCMPs/AppHeader.jsx";
import {HomePage} from './pages/Home.jsx'
import {KeepApp} from './pages/keepPages/MissKeep.jsx'
import {MailApp} from './pages/mailPages/MailApp.jsx'



export class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Header></Header>
          <Switch>
            <Route component={KeepApp} path="/keep" />
            <Route component={MailApp} path="/mail" />
            <Route component={HomePage} path="/" />
          </Switch>
        </main>
      </Router>
    );
  }
}
