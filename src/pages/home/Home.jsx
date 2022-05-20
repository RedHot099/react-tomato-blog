import React from 'react'
import '../../css/Style.css'
import Header from '../../components/Header'
import BlogCarusel from '../../components/BlogCarusel'
import Content from '../../components/Content'

export default function home() {
  return (
    <main>
        <Header/>
        <BlogCarusel/>
        <Content/>
    </main>
  )
}
