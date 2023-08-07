import React, { useEffect, useState } from 'react'
import GetApiTemplate from '../template/GetApiTemplate'
import '../style/getApi.scss'
import Buttons from './Buttons'

function GetApi() {
   const [category, setCategory] = useState('mixed')
   const clickEvent = (category) => {
      setCategory(category);
   };

   const urlApi = `https://api.pexels.com/v1/search?query=${category}`

   const [data, setData] = useState([])
   console.log(data.photos)
   useEffect(() => {
      fetch(urlApi, {
         headers: {
            Authorization: 'EBNugJF3RKQw7O8t3hr4kv4s0XNzFe9OMmmtcii7dPsi8Z3T3AFIOOlO'
         }
      })
         .then(response => {
            if (!response.ok) {
               throw new Error('Network response was not ok');
            }
            return response.json();
         })
         .then(json => setData(json))
         .catch(error => {
            console.error('Error fetching data:', error);
         });
   }, [urlApi]);

   // const { loading, error } = data;
   // if (loading) {
   //    return <div className={loading}>Loading...</div>;
   // }

   // if (error) {
   //    return (
   //       <div className={error}>
   //          Error:
   //          {' '}
   //          {error}
   //       </div>
   //    );
   // }


   const getFotos = data.photos
   const result = getFotos?.map((foto) => {
      return <GetApiTemplate key={foto.id} src={foto.src.medium} alt={foto.alt} />
   })
   return (
      <>
         <div className='main-fotos'>
            {result}
         </div>
         <Buttons clickEvent={clickEvent} />
      </>
   )
}

export default GetApi
