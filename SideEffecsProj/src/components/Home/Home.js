import React from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button type="button" onClick={props.onLogout}>Log out</Button>
    </Card> 
  );
};

export default Home;
