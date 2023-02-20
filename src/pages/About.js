import React from "react";
import ArticleTitle from "../components/ArticleTitle";
import classes from "./About.module.css";
import awsBadge from "../assets/images/aws-badge.png";
const About = () => {
  return (
    <article className={classes.about}>
      <ArticleTitle title="About Me" />
      <section className={classes["about-text"]}>
        <p>
          I'm Full Stack MERN developer from Rajasthan, India, working at
          Principal Global Services, Pune. I enjoy turning complex problems into
          simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </section>
      <section className={classes.services}>
        <div className={classes['service']}>
            <div className={classes['icon-box']}>
            <ion-icon name="construct-outline"></ion-icon>
            </div>
            <h2 className={classes['service-heading']}>What I'm doing</h2>
          </div>
        <div className={classes["service-container"]}>
          <div className={classes["service-box"]}>
            <div className={classes["icon-box"]}>
              <ion-icon name="code-slash-outline"></ion-icon>
            </div>
            <div className={classes["service-description"]}>
              <h3 className={classes["service-name"]}>Web Design</h3>
              <p className={classes["service-text"]}>
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </div>
          <div className={classes["service-box"]}>
            <div className={classes["icon-box"]}>
            <ion-icon name="build-outline"></ion-icon>
            </div>
            <div className={classes["service-description"]}>
              <h3 className={classes["service-name"]}>Web Development</h3>
              <p className={classes["service-text"]}>
                High-quality development of sites at the professional level.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.badges}>
      <div className={classes['badge']}>
            <div className={classes['icon-box']}>
            <ion-icon name="shield-checkmark-outline"></ion-icon>
            </div>
            <h2 className={classes['badge-heading']}>My Badges </h2>
          </div>
        <div className={classes["badge-box"]}>
          <figure className={classes["badge-img-box"]}>
            <img src={awsBadge} alt="AWS Badge" />
          </figure>
        </div>
      </section>
    </article>
  );
};

export default About;
