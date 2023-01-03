import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Properties from './components/Properties';

import * as APPLICATION_URLS from './utils/ApplicationURLs';
import Wallet from './components/Wallet';

import Rewards from './components/Rewards';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import PropertyDetails from './components/PropertyDetails';
import Login from './components/Login';
import AuthWrapper from './utils/AuthWrapper';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App font-display transition-all duration-500">
      <Router>
        <div>
          <Routes>
            <Route element={<AuthWrapper />}>
              <Route
                exact
                path={APPLICATION_URLS.PROPERTIES}
                element={<Properties />}
              />
              <Route
                exact
                path={APPLICATION_URLS.WALLET}
                element={<Wallet />}
              />
              <Route
                exact
                path={APPLICATION_URLS.REWARDS}
                element={<Rewards />}
              />
              <Route
                exact
                path={APPLICATION_URLS.PROFILE}
                element={<Profile />}
              />
              <Route
                exact
                path={APPLICATION_URLS.PORTFOLIO}
                element={<Portfolio />}
              />
              <Route
                exact
                path={APPLICATION_URLS.PROPERTY_DETAILS}
                element={<PropertyDetails />}
              />
              <Route
                path="*"
                element={<Navigate to={APPLICATION_URLS.PROPERTIES} replace />}
              />
            </Route>
            <Route
              exact
              path={APPLICATION_URLS.LOGIN_PAGE}
              element={<Login />}
            />
            <Route
              exact
              path={APPLICATION_URLS.SIGNUP_PAGE}
              element={<Signup />}
            />
            <Route
              path="*"
              element={<Navigate to={APPLICATION_URLS.LOGIN_PAGE} replace />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
