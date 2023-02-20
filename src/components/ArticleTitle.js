import React from 'react'
import classes from './ArticleTitle.module.css';
const ArticleTitle = ({title}) => {
  return (
    <h1 className={classes['article-title']} >{title}</h1>
  )
}

export default ArticleTitle;