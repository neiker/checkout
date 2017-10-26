import React from 'react';
import { connect } from 'react-redux';

import Comment from './comment';

function Empty() {
  return (
    <h3>There's no comments yet</h3>
  );
}

function getAverage(comments) {
  const sum = comments.reduce((result, comment) => (result + comment.rating), 0);

  return sum / comments.length;
}

function Comments({comments}) {
  if (!comments.length) {
    return <Empty />;
  }

  return (
    <div>
      <h1>Comments:</h1>
      <h4>Average rating: {getAverage(comments)}</h4>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default connect(
  ({comments}) => ({
    comments,
  }),
)(Comments);
