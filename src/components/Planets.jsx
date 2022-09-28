import { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';
import axios from "axios"

const fetchPlanets = async (page) => {
  const res = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
  return res.data;
}

const Planets = () => {
  const [ page, setPage ] = useState(1);
  const { 
    isLoading,
     isError,
     error,
     data,
     isFetching, 
    isPreviousData, 
    status 
  } = useQuery(['planets', page], ()=> fetchPlanets(page), { keepPreviousData : true });
  console.log(data)
  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <>
          <button 
            onClick={() => setPage(old => Math.max(old - 1, 1))} 
            disabled={page === 1}>
            Previous Page
          </button>
          <span>{ page }</span>
          <button 
            onClick={() => {
                if (!isPreviousData || data.next) {
                  setPage(old => old + 1)
                }
              }}
           
         disabled={isPreviousData || !data?.next}
            >
            Next page
          </button>
          {isFetching ? <span> Loading...</span> : null}{' '}
          <div>
            { data.results.map(planet => <Planet key={planet.name} planet={planet} /> ) }
          </div>
        </>
      )} 
    </div>
  );
}
 
export default Planets;