import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Shadow Stack</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum, felis scelerisque feugiat ornare, enim sem cursus diam, quis mattis odio ipsum id ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit nunc eget libero fermentum pellentesque. Nullam vestibulum ex sed sapien efficitur semper. Morbi interdum, ipsum et feugiat convallis, magna est sagittis eros, ut feugiat ex sapien non ipsum. Integer sit amet leo at magna volutpat aliquam. Sed ac condimentum magna, eleifend euismod nulla. Proin mollis quis nisi in gravida. Praesent ut erat massa. Vestibulum malesuada ligula vitae finibus lacinia. Cras sed mauris in nisi euismod scelerisque nec sit amet risus. Suspendisse pharetra eu eros ac facilisis. Etiam dapibus nulla eget eros commodo euismod. In hac habitasse platea dictumst. </p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
