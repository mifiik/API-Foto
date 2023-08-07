import React from 'react'
import { useState } from 'react'
import '../style/buttons.scss'

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
      <div className='buttons__block'>
         <div className='buttons__element'>
            <button onClick={() => clickAction('Mixed')}>Mixed</button>
            <button onClick={() => clickAction('Ocean')}>Ocean</button>
            <button onClick={() => clickAction('Road')}>Road</button>
            <button onClick={() => clickAction('Creative')}>Creative</button>
         </div>
         <div className='search'>
            <form>
               <input onChange={inputEvent} type='search' placeholder='enter the category' value={inputValue}></input>
            </form>
         </div>
      </div>
   )
}

export default Buttons
