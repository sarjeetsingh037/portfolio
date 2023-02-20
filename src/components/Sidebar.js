import React from "react";
import classes from "./Sidebar.module.css";
import profile from "../assets/images/profile.jpg";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes["sidebar-info"]}>
        <figure className={classes["avatar-box"]}>
          <img src={profile} alt="Sarjeet Singh" />
        </figure>
        <div className={classes["info-content"]}>
          <h1 className={classes.name} title="Sarjeet Singh">
            Sarjeet Singh
          </h1>
          <p className={classes.title}>Software Engineer</p>
        </div>
      </div>
      <div className={classes["sidebar-more-info"]}>
        <div className={classes.separator}></div>
        <ul className={classes["contact-list"]}>
          <li className={classes["contact-item"]}>
            <div className={classes["icon-box"]}>
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className={classes["contact-info"]}>
              <p className={classes["contact-title"]}>Email</p>
              <a
                href="mailto:sarjeetsingh037@gmail.com"
                className={classes["contact-link"]}
              >
                sarjeetsingh037@gmail.com
              </a>
            </div>
          </li>
          <li className={classes["contact-item"]}>
            <div className={classes["icon-box"]}>
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className={classes["contact-info"]}>
              <p className={classes["contact-title"]}>Phone</p>
              <a href="tel:+9694081420" className={classes["contact-link"]}>
                9694081420
              </a>
            </div>
          </li>
          <li className={classes["contact-item"]}>
            <div className={classes["icon-box"]}>
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className={classes["contact-info"]}>
              <p className={classes["contact-title"]}>Birthday</p>
              <time dateTime="1998-04-22">April 22, 1998</time>
            </div>
          </li>
          <li className={classes["contact-item"]}>
            <div className={classes["icon-box"]}>
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className={classes["contact-info"]}>
              <p className={classes["contact-title"]}>Location</p>
              <address>Rajasthan, INDIA</address>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes['social-icon-box']}>
          <div className={classes['social-icon']}>
          <a href="https://www.linkedin.com/in/sarjeet-singh-49a593160/"><ion-icon name="logo-linkedin"></ion-icon></a>
          </div>
          <div className={classes['social-icon']}>
          <a href="https://www.linkedin.com/in/sarjeet-singh-49a593160/"> <ion-icon name="logo-github"></ion-icon></a>
          </div>
        </div>
    </aside>
  );
};

export default Sidebar;
