import React from 'react';
import classes from './EducationTimeline.module.css';

const EducationTimeline = () => {
  
  return (
    <section className={classes['timeline']}>
    <div className={classes['timeline-heading']}>
      <div className={classes['icon-box']}>
      <ion-icon name="book-outline"></ion-icon>
    </div>
      <h2 className={classes['timeline-heading-title']}>Education</h2>
    </div>
    <ul className={classes["timeline-list"]}>
        <li className={classes["timeline-item"]}>
            <h3 className={classes["timeline-item-title"]}>
            Rajasthan Technical University,Bikaner -  <em>Btech</em>
            </h3>
            <div className={classes["timeline-item-duration-details"]}>
            <p className={classes["timeline-item-duration"]}> JULY 2016 - OCT 2020</p>
            <p className={classes["timeline-item-duration"]}>Percentage:- 74.33%</p>
            </div>
            <p className={classes["timeline-item-text"]}>
            Computer Science and Technology with Honors
            </p>
        </li>
        <li className={classes["timeline-item"]}>
            <h3 className={classes["timeline-item-title"]}>
                Noble Se. Sec. School, Kuchaman City -  <em>12th</em>
            </h3>
            <div className={classes["timeline-item-duration-details"]}>
                <p className={classes["timeline-item-duration"]}> JULY 2014 - MAY 2015</p>
                <p className={classes["timeline-item-duration"]}>Percentage:- 92.20%</p>
            </div>
            <p className={classes["timeline-item-text"]}>
                Higher Secondary Education in Science-Math stream.
            </p>
      </li>
      <li className={classes["timeline-item"]}>
            <h3 className={classes["timeline-item-title"]}>
            Gayatri Se. Sec. School, Bagot -  <em>10th</em>
            </h3>
            <div className={classes["timeline-item-duration-details"]}>
                <p className={classes["timeline-item-duration"]}> JULY 2012 - MAY 2013</p>
                <p className={classes["timeline-item-duration"]}>Percentage:- 76.17%</p>
            </div>
            <p className={classes["timeline-item-text"]}>
                Secondary Education.
            </p>
      </li>
    </ul>
  </section>
  )
}

export default EducationTimeline;