import React from 'react';
import { useLocation } from 'react-router-dom';
import { getBodyType } from "../utils/getBodyType";
import { resultData } from '../data/resultData';

const Result = () => {
  // used to read data that is sent from other page
  const location = useLocation()
  // get scores from quiz page
  const { vataScore, pittaScore, kaphaScore } = location.state;

  const bodyType = getBodyType(vataScore, pittaScore, kaphaScore);
  const data = resultData[bodyType];

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  )
}

export default Result
