import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rocketsReducer, { fetchData } from './rockets/rockets';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  rocketsReducer, missionsReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
store.dispatch(fetchData());
export default store;
