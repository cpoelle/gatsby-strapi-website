import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout";

export default function Schulleben({ pageContext, location }) {
  const bannerInfo = {
    title: "Schulleben",
    subTitle: "Hier steht ein SubTitle zur Unternehmenskultur",
  };
  return (
    <>
      <Seo title="Schulleben" />
      <Layout
        pageContext={pageContext}
        location={location}
        bannerInfo={bannerInfo}
      >
        <div>Schulleben</div>
      </Layout>
    </>
  );
}
