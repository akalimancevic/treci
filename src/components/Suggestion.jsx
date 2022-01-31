import React from "react";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { FaRegMehRollingEyes } from "react-icons/fa";



function Suggestion({suggestion, saveSuggestion, removeSuggestion, isSaved}) {
  return <div className={isSaved=== 1? "post" : "savedpost"}>
<img src={suggestion.photo}
alt="slika"/>
<div className="card-body">
    <h3 className="card-title">{suggestion.name}</h3>
    <p className="card-text">{suggestion.about}</p>
</div>
{isSaved === 1 ? (
        <>
          <button
            className="btn"
            onClick={() => saveSuggestion(suggestion.id)}
          >
            <BsEmojiHeartEyes/>
          </button>
        </>
      ) : (
            <button className="btn"
            onClick={() => removeSuggestion(suggestion.id)}
        >
            <FaRegMehRollingEyes />
          </button>
      )}
</div>;
}

export default Suggestion;
