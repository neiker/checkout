import React from 'react';

export default function Comment({
  comment
}) {
  return (
    <div>
      <p><strong>{comment.name}</strong> ({comment.email}) - Rating: {comment.rating}</p>
      <p>{comment.comment}</p>
    </div>
  );
}