import React from 'react';
import ArticleTitle from '../components/ArticleTitle';
import EducationTimeline from '../components/EducationTimeline';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Skills from '../components/Skills';
import Tools from '../components/Tools';
import classes from './Resume.module.css';

const Resume = () => {
  return (
    <article className={classes.resume}>
        <header>
          <ArticleTitle title="Resume" />
        </header>
      <ExperienceTimeline />
      <EducationTimeline />
      <section>
        <div className={classes['skill']}>
          <div className={classes['icon-box']}>
          <ion-icon name="barbell-outline"></ion-icon>
          </div>
          <h2 className={classes['skill-heading']}>My Skills</h2>
        </div>
        <Skills />
      </section>
      <section>
        <div className={classes['tool']}>
          <div className={classes['icon-box']}>
          <ion-icon name="hammer-outline"></ion-icon>
          </div>
          <h2 className={classes['tool-heading']}>Tools</h2>
        </div>
        <Tools />
      </section>
    </article>
  );
}
export default Resume;