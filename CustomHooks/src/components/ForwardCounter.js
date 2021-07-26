import React from 'react';

import Card from './Card';
import useCounter from '../hook/use-counter';
const ForwardCounter = () => {

  const counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
