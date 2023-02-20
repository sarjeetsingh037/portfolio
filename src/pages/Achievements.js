import React from 'react'
import ArticleTitle from '../components/ArticleTitle';
import classes from './Achievements.module.css';
import awsCertificate from '../assets/images/aws-developer.jpg';
import awardPicture from '../assets/images/award.jpg';
const Achievements = () => {
  return (
    <article className={classes.certificate}>
        <header>
            <ArticleTitle title="Achievements" />
        </header>
       <section className={classes['certificate-box']}>
        <div className={classes['certificate-icon']}>
            <div className={classes['icon-box']}>
            <ion-icon name="ribbon-outline"></ion-icon>
            </div>
            <h2 className={classes['certificate-heading']}>Certifications</h2>
            </div>
            <section className={classes.container}>
                <figure className={classes.card}>
                    <img src={awsCertificate} alt="AWS Certified Developer" />
                    <figcaption>AWS Certified Developer</figcaption>
                </figure>
            </section>
       </section>
       <hr />
       <section className={classes['award-box']}>
        <div className={classes['award-icon']}>
            <div className={classes['icon-box']}>
            <ion-icon name="trophy-outline"></ion-icon>
            </div>
            <h2 className={classes['award-heading']}>Awards</h2>
            </div>
            <section className={classes.container}>
                <figure className={classes.card}>
                    <img src={awardPicture} alt="Team Player Award" />
                    <figcaption>Team Player Award</figcaption>
                </figure>
            </section>
       </section>
    </article>
  )
}

export default Achievements;