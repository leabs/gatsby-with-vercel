import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p style={{ textAlign: `center` }}>Shadow Stack, LLC is a web development focused limited liability company based in Upstate New York.</p>
    
    <p style={{ textAlign: `center` }}>
      More info <a href="https://stevenleabo.com">found here</a>!
    </p>
   
  </Layout>
)

export default IndexPage
