import React from 'react'
import { useState } from 'react'
import '../style/buttons.scss'

function Buttons({ clickEvent }) {
   const [inputValue, setInputValue] = useState('');

   function clickAction(category) {
      if (/^[A-Za-z0-9]+$/.test(category)) {
         clickEvent(category);
      }
   }

   function inputEvent(event) {
      const filteredValue = event.target.value.replace(/[^A-Za-z0-9]/g, '');
      setInputValue(filteredValue);
      clickAction(filteredValue);
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
               <input onChange={inputEvent} type='search' placeholder='enter the category' value={inputValue} pattern='[A-Za-z0-9]*'></input>
            </form>
         </div>
      </div>
   )
}

export default Buttons
