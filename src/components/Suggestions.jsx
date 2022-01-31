import React from 'react';
import Suggestion from './Suggestion';

function Suggestions({suggestions, saveSuggestion, removeSuggestion}) {
  return <div className='all-suggestions'>
{suggestions.map((post) => (
        <Suggestion suggestion={post} key={post.id} saveSuggestion={saveSuggestion} removeSuggestion={removeSuggestion} isSaved={1} />
      ))}
  </div>;
}

export default Suggestions;
