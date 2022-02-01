import React from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import DisableAfterClick from "./DisableAfterClick";



function Suggestion({suggestion, saveSuggestion, removeSuggestion, removeSuggestion2, isSaved, disable}) {
   
    
    function disableButton(){
        saveSuggestion(suggestion.id);
        
    }
  return( 
    <div className="container">
    <div className="col-md-12 col-lg-12">
    <article className="post vt-post">
    <div className="row">
    <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
    <div className="post-type post-img">
    <img src={suggestion.photo}
    alt="slika" className="img"/>
    </div> </div>
<   div className="right-content">
    {isSaved === 1 ? (
        <div className="caption">
    <h1 className="md-heading">{suggestion.name}</h1>
    <h3>Interests: {suggestion.interests}</h3>
    <div className="buttons">
        <DisableAfterClick saveSuggestion={saveSuggestion} id={suggestion.id} disable={disable}/>
          <button className="btn"
            onClick={() => removeSuggestion2(suggestion.id)}
        >
            <FcDislike size = '50' />
          </button>
          </div>
    </div>) : (
    <div className="caption2">
    <h1 className="md-heading">{suggestion.name}</h1>
    <h3>Interests: {suggestion.interests}</h3>
    <p className="post-text">{suggestion.about}</p>

    <button className="btn2"
            onClick={() => removeSuggestion(suggestion.id)}
        >
            <FcDislike size = '50' />
          </button>
        
    </div>)}
      
</div>
</div>
</article>
</div>
</div>
);
}

export default Suggestion;
