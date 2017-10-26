import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'

import reducers from './reducers';


const logger = createLogger({
  // ...options
});

export default function main() {
  const store = createStore(
    reducers,
    applyMiddleware(logger),
  );

  return store;
}