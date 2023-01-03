module.exports = {
  siteMetadata: {
    // siteUrl: required (Gotcha: do not include a trailing slash at the end)
    siteUrl: "http://localhost:8000",
    title: "Firma YXZ GmbH",
    description: "Website der Firma YXZ GmbH",
  },

  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 90,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `XYZ GmbH`,
        short_name: `XYZ GmbH`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        collectionTypes: [
          `persons`,
          `departments`,
          `newsticker`,
          `bildungsangebote`,
          `heroslides`,
          `termine`,
          `alert`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=false]
         */
        isUsingColorMode: false,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
          // Setting this parameter is optional
          anonymize: true,
        },
        facebookPixel: {
          pixelId: "YOUR_FACEBOOK_PIXEL_ID",
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Startseite`,
        // exclude: optional, include this array to exclude paths you don't want to
        // generate breadcrumbs for (see below for details).
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
        // isMatchOptions: optional, include this object to configure the wildcard-match library.
        excludeOptions: {
          separator: ".",
        },
        // trailingSlashes: optional, will add trailing slashes to the end
        // of crumb pathnames. default is false
        trailingSlashes: false,
      },
    },
  ],
};
