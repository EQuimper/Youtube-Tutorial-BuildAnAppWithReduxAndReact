import { compose, createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [
  logger()
];

const enhancers = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

/**
* CREATE STORE
*/
const store = createStore(
  rootReducer,
  {},
  enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

export { store };
