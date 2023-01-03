import React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"

export default function NotFound({ pageContext, location }) {
  return (
    <>
      <Seo title="Page not found" />
      <Layout pageContext={pageContext} location={location}>
        <div>
          <h2>Page not found!</h2>
        </div>
      </Layout>
    </>
  )
}
