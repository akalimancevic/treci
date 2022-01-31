import React from 'react';
import Suggestion from './Suggestion';

function Saved({suggestions}) {
  return <div className="saved-container">
      <h3>Your faves</h3>
      {suggestions.map((post) => (
        <Suggestion suggestion={post} key={post.id} isSaved={0} />
      ))}
  </div>;
}

export default Saved;
