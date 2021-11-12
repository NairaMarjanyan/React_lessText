import { useState } from "react";

function LessText({text, max = 50}) {

   //let showLess = true;

   let [showLess, setShowLess] = useState(true);

  if(text.length <= max) {
      return <div>{text}</div>
  }
    return (
      <div>
         {showLess? `${text.substr(0, max)}...` : text}
         <a href="#" onClick={ (evt) => {
             evt.preventDefault();
             setShowLess(!showLess);
         }}>{showLess? "more" : "less"}</a>
      </div>
    )
}

export default LessText;