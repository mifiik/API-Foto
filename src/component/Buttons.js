import React from 'react'
import { useState } from 'react'

function Buttons({ clickEvent }) {
   const [inputValue, setInputValue] = useState('');

   function clickAction(category) {
      clickEvent(category);
   }

   function inputEvent(event) {
      setInputValue(event.target.value);
      clickEvent(event.target.value);
   }


   return (
      <>
         <div>
            <button onClick={() => clickAction('Mixed')}>Mixed</button>
            <button onClick={() => clickAction('Ocean')}>Ocean</button>
            <button onClick={() => clickAction('Road')}>Road</button>
            <button onClick={() => clickAction('Creative')}>Creative</button>
         </div>
         <div>
            <form>
               <input onChange={inputEvent} type='search' placeholder='enter the category' value={inputValue}></input>
            </form>
         </div>
      </>
   )
}

export default Buttons
