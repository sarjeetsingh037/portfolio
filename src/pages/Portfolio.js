import React from 'react'
import ArticleTitle from '../components/ArticleTitle'
import classes from './Portfolio.module.css';
const Portfolio = () => {
  return (
    <article className={classes.portfolio}>
      <ArticleTitle title="Portfolio" />
    </article>
  )
}

export default Portfolio