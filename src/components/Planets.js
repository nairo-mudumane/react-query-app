import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets');
  return res.json();
};

const Planets = () => {
  const { data, isLoading, error } = useQuery('planets', fetchPlanets);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }

  console.log(data);
  return <p>success</p>;
};
export default Planets;
