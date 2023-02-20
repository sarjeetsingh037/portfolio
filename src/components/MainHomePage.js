import React from 'react';
import classes from './MainHomePage.module.css';
import Navigation from './Navigation';
const MainHomePage = () => {
  return (
    <div className={classes['main-content']}>
      <Navigation />
    </div>
  )
}

export default MainHomePage