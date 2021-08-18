import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate (formatString:"MMM YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((details) => (
          <li key={details.node.title.toString()} className={blogStyles.post}>
            <Link to={`/blog/${details.node.slug}`}>
              <h2>{details.node.title}</h2>
              <p>{details.node.publishedDate}</p>
            </Link>
          </li>
        ))}
    </ol>
    </Layout>
  )
}

export default BlogPage