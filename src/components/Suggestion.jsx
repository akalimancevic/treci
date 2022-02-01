import React from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";



function Suggestion({suggestion, saveSuggestion, removeSuggestion, isSaved}) {
  return( 
    <article class="post vt-post">
    <div class="row">
  <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4">
  <div className="post-type post-img">
<img src={suggestion.photo}
alt="slika"/></div> </div>
 <div class="col-xs-12 col-sm-7 col-md-7 col-lg-8">
<div className="caption">
    <h1 className="md-heading">{suggestion.name}</h1>
    <h3>Interests: {suggestion.interests}</h3>

</div>
</div>
{isSaved === 1 ? (
         <div class="author-info author-info-2">
          <button
            class="btn btn-default"
            onClick={() => saveSuggestion(suggestion.id)}
          >
            <FcLike/>
          </button>
          </div>
          ) : (
            <div class="author-info author-info-2">
              
              <p className="post-text">{suggestion.about}</p>
          <button class="btn btn-default"
            onClick={() => removeSuggestion(suggestion.id)}
        >
            <FcDislike />
          </button>
        
        </div>
        
        )}
       
</div>
</article>
);
}

export default Suggestion;
