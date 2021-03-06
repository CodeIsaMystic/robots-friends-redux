import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import 'tachyons';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';

import './index.css';

/*  log actions on the console  */
const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = 
  createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
