import React, { PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';
import { HotRouter } from 'utils';

import { IndexPage, UserPage } from 'pages';
import AppContainer from 'components/AppContainer';

const AppRouter = ({ history }) => (
  <HotRouter history={history}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={IndexPage} />
      <Route path="user/:id" component={UserPage} />
    </Route>
  </HotRouter>
);

AppRouter.propTypes = { history: PropTypes.object.isRequired };
export default AppRouter;
