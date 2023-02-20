import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import classes from './HomePage.module.css';
const HomePage = () => {
  return (
  <div className={classes.home}>
    <Navigation />
    <Outlet />
  </div>
  )
}

export default HomePage