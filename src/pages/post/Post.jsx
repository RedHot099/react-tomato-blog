import React from 'react'
import '../../css/Style.css'
import '../../css/blog.css'
import BlogArticle from '../../components/BlogArticle'
import BlogLinks from '../../components/BlogLinks'

export default function home() {
    return (
      <>
          <BlogArticle/>
          <BlogLinks/>
      </>
    )
  }
