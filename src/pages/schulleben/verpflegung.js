import React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/Layout"

export default function Verpflegung({ pageContext, location }) {
  return (
    <>
      <Seo title="Verpflegung" />
      <Layout pageContext={pageContext} location={location}>
        <div>Verpflegung</div>
      </Layout>
    </>
  )
}
