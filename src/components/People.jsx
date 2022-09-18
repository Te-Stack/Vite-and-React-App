import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';
import axios from "axios";

const fetchPeople = async () => {
  const res = await axios.get('http://swapi.dev/api/people/');
  return res.data;
}

const People = () => {
  const { data, status } = useQuery('people', fetchPeople);

  return (
    <div>
      <h2>People</h2>

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
          { data.results.map(person => <Person key={person.name} person={person} /> ) }
        </div>
      )} 
    </div>
  );
}
 
export default People;