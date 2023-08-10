import React, { useEffect, useReducer } from 'react'
import GetApiTemplate from '../template/GetApiTemplate'
import '../style/getApi.scss'
import Buttons from './Buttons'


const initialState = {
   loading: true,
   error: null,
   photos: []
};

const reducer = (state, action) => {
   switch (action.type) {
      case 'FETCH_SUCCESS':
         return {
            loading: false,
            error: null,
            photos: action.payload
         };
      case 'FETCH_ERROR':
         return {
            loading: false,
            error: action.payload,
            photos: []
         };
      default:
         return state;
   }
};

function GetApi() {
   const [state, dispatch] = useReducer(reducer, initialState);
   const { loading, error, photos } = state;

   const clickEvent = (category) => {
      fetchData(category);
   };

   const fetchData = (category) => {
      const urlApi = `https://api.pexels.com/v1/search?query=${category}`;

      fetch(urlApi, {
         method: 'GET',
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
         .then(json => dispatch({ type: 'FETCH_SUCCESS', payload: json.photos }))
         .catch(error => {
            console.error('Error fetching data:', error);
            dispatch({ type: 'FETCH_ERROR', payload: 'Error fetching data' });
         });
   };

   useEffect(() => {
      fetchData('mixed');
   }, []);

   if (loading) {
      return <div className="loading">Loading...</div>;
   }

   if (error) {
      return (
         <div className="error">
            Error: {error}
         </div>
      );
   }

   const result = photos.map((foto) => (
      <GetApiTemplate key={foto.id} src={foto.src.medium} alt={foto.alt} />
   ));

   return (
      <>
         <div className="main-fotos">
            {result}
         </div>
         <Buttons clickEvent={clickEvent} />
      </>
   );
}

export default GetApi;
