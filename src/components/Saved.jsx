import React from 'react';
import Suggestion from './Suggestion';

function Saved({suggestions, removeSuggestion}) {
  return <div>
      <h3 style={{color: "white", fontWeight: "bold", fontSize: 70 +"px", textAlign: "center"}}>YOUR FAVES:</h3>
      {suggestions.map((post) => (
        <Suggestion suggestion={post} key={post.id} removeSuggestion={removeSuggestion} isSaved={0}/>
      ))}
  </div>;
}
export default Saved;
