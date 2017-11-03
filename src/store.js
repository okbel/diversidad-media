import {createStore as reduxCreateStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducers from './reducers';

/**
 * createStore creates a Redux Store
 * @param  {Object}  reducers       addtional reducers
 * @param  {Array}   [middlewares]  additional middlewares
 * @return {Object}  redux store
 */
function createStore(reducers, middlewares = []) {
  const enhancers = [
    applyMiddleware(
      ...middlewares,
    ),
  ];

  if (window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  return reduxCreateStore(
    combineReducers(reducers),
    {},
    compose(...enhancers)
  );
}

const store = createStore(
  reducers,
);

export default store;