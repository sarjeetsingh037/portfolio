import React from 'react'
import classes from './Skills.module.css';
const Skills = () => {
  return (
   <section className={classes.skills}>
        <div className={classes['skill-box']}>
            <div className={classes['icon-box']}>
                <ion-icon name="logo-html5"></ion-icon>
            </div>
            <h3 className={classes['skill-name']}>HTML</h3>
        </div>
        <div className={classes['skill-box']}>
            <div className={classes['icon-box']}>
            <ion-icon name="logo-css3"></ion-icon>
            </div>
            <h3 className={classes['skill-name']}>CSS</h3>
        </div>
        <div className={classes['skill-box']}>
            <div className={classes['icon-box']}>
            <ion-icon name="logo-javascript"></ion-icon>
            </div>
            <h3 className={classes['skill-name']}>Javascript</h3>
        </div>
        <div className={classes['skill-box']}>
            <div className={classes['icon-box']}>
            <ion-icon name="logo-react"></ion-icon>
            </div>
            <h3 className={classes['skill-name']}>ReactJS</h3>
        </div>
        <div className={classes['skill-box']}>
            <div className={classes['icon-box']}>
                <ion-icon name="logo-nodejs"></ion-icon>
            </div>
            <h3 className={classes['skill-name']}>NodeJS</h3>
        </div>
        <div className={classes['skill-box']}>
            <div className={classes['icon-box']}>
                <ion-icon name="cloud-outline"></ion-icon>
            </div>
            <h3 className={classes['skill-name']}>AWS</h3>
        </div>
        <div className={classes['skill-box']}>
            <div className={classes['icon-box']}>
                <ion-icon name="leaf-outline"></ion-icon>
            </div>
            <h3 className={classes['skill-name']}>MongoDB</h3>
        </div>
        <div className={classes['skill-box']}>
            <div className={classes['icon-box']}>
            <ion-icon name="server-outline"></ion-icon>
            </div>
            <h3 className={classes['skill-name']}>MySQL</h3>
        </div>
   </section>
  )
}

export default Skills;