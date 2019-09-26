import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  // Phase 1:
  // store.dispatch = addLoggingToDispatch(store);

  // Phase 2:
  // store = applyMiddlewares(store, addLoggingToDispatch);

  // Phase 3:
  // see store.js
  
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});


// Phase 1:
// export const addLoggingToDispatch = store => next => action => {
//   const dispatch = store.dispatch;
//   console.log(`Previous state: ${store.getState()}`);
//   console.log(`Processing action: ${action.type}`);
//   dispatch(action);
//   console.log(`New state: ${store.getState()}`);
// };

// Phase 2:
export const addLoggingToDispatch = store => next => action => {
  console.log(`Previous state: ${store.getState()}`);
  console.log(`Processing action: ${action.type}`);
  next(action);
  console.log(`New state: ${store.getState()}`);
};

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach(middleware => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
};