import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.navbar}>
        <ul className={classes['navbar-list']}>
            <li className={classes['navbar-item']}>
                <Link to='/' className={classes['navbar-link']} >About </Link>
            </li>
            <li className={classes['navbar-item']}>
                <Link to='resume' className={classes['navbar-link']} >Resume</Link>
            </li>
            <li className={classes['navbar-item']}>
                <Link to='portfolio' className={classes['navbar-link']}>Portfolio</Link>
            </li>
            <li className={classes['navbar-item']}>
                <Link to='achievements' className={classes['navbar-link']}>Achievements</Link>
            </li>
            <li className={classes['navbar-item']}>
                <Link to='contact'className={classes['navbar-link']}>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation