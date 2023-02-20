import React from 'react';
import classes from './ExperienceTimeline.module.css';

const ExperienceTimeline = () => {
  
  return (
    <section className={classes['timeline']}>
    <div className={classes['timeline-heading']}>
      <div className={classes['icon-box']}>
      <ion-icon name="business-outline"></ion-icon>
    </div>
      <h2 className={classes['timeline-heading-title']}>Experience</h2>
    </div>
    <ul className={classes["timeline-list"]}>
      <li className={classes["timeline-item"]}>
          <h3 className={classes["timeline-item-title"]}>
          Principal Global Services, Pune - <em>Software Engineer</em>
          </h3>
          <p className={classes["timeline-item-duration"]}> NOV 2020 - PRESENT</p>
          <p className={classes["timeline-item-text"]}>
          Created Application that generates an Invitation file that includes customer details who have purchased RIS products from Principal and send this file to Medallia each week. Medallia sends surveys to the customer on behalf of the Principal using the invite file.
          </p>
        </li>
    </ul>
  </section>
  )
}

export default ExperienceTimeline;