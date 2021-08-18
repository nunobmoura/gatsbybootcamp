import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>This is the about page</p>
      <p><Link to="/contact">Contact me</Link></p>    
    </Layout>
  )
}

export default AboutPage