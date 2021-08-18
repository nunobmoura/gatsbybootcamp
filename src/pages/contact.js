import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contacts</h1>
      <p>This is <a href="https://google.com" rel="noreferrer" target="_blank">my contact</a></p>    
    </Layout>
  )
}

export default ContactPage