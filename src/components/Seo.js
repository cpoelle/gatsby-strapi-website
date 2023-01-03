import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Seo({ description, lang, meta, title }) {
  const defaultMeta = {
    title: "Website einer Firma",
    description: "Webseite der YXZ GmbH",
  };

  const metaDescription = description || defaultMeta.description;
  const defaultTitle = defaultMeta.title;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `de`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};
