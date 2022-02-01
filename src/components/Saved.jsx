import React from 'react';
import Suggestion from './Suggestion';

function Saved({suggestions, removeSuggestion}) {
  return <div>
      <h3>YOUR FAVES:</h3>
      {suggestions.map((post) => (
        <Suggestion suggestion={post} key={post.id} removeSuggestion={removeSuggestion} isSaved={0}/>
      ))}
  </div>;
}
export default Saved;
