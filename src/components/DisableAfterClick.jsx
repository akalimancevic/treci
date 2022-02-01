import React from 'react';
import { FcLike } from "react-icons/fc";

function DisableAfterClick({saveSuggestion, id}) {
    
    
  return <><button
  className="btn"
   onClick={() => saveSuggestion(id)}
>
  <FcLike size = '50'/>
</button></>;
}

export default DisableAfterClick;
