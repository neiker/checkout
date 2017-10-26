import {
  ADD_COMMENT,
} from './constants';

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});