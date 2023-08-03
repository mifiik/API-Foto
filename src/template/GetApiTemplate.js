import React from 'react'
import '../style/getApiTemplate.scss'

function GetApiTemplate({ src, alt }) {
   return (
      <div className='image'>
         <img src={src} alt={alt} />
      </div>
   )
}

export default GetApiTemplate