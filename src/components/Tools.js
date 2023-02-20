import React from 'react'
import classes from './Tools.module.css';
const Tools
 = () => {
  return (
   <section className={classes.tools}>
        <div className={classes['tool-box']}>
            <div className={classes['icon-box']}>
            <ion-icon name="git-merge-outline"></ion-icon>
            </div>
            <h3 className={classes['tool-name']}>Git</h3>
        </div>
        <div className={classes['tool-box']}>
            <div className={classes['icon-box']}>
            <ion-icon name="logo-github"></ion-icon>
            </div>
            <h3 className={classes['tool-name']}>GitHub</h3>
        </div>
        <div className={classes['tool-box']}>
            <div className={classes['icon-box']}>
            <ion-icon name="rocket-outline"></ion-icon>
            </div>
            <h3 className={classes['tool-name']}>Postman</h3>
        </div>
   </section>
  )
}

export default Tools;