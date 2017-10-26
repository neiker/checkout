import { combineReducers } from 'redux';

import {
  ADD_COMMENT,
} from './constants';

let id = 1;

const lorem = {
  "id": id++,
  "name":"Javier",
  "email":"neiker@gmail.com",
  "rating": 5,
  "comment":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

function comments(store = [ lorem ], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [
        ...store,
        {
          ...action.payload,
          id: id++,
          rating: +action.payload.rating, // cast to int
        },
      ];
    default:
      return store;
  }
}

export default combineReducers({
  comments,
});