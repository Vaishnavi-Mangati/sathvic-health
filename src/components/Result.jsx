import React from 'react';
import { useLocation } from 'react-router-dom';
import { getBodyType } from "../utils/getBodyType";

const Result = () => {
    // used to read data that is sent from other page
    const location = useLocation()
    // get scores from quiz page
    const {vataScore, pittaScore, kaphaScore} = location.state;

    const bodyType = getBodyType(vataScore, pittaScore, kaphaScore);

  return (
    <div>
      {bodyType}
    </div>
  )
}

export default Result
