module.exports = {
  siteMetadata: {
    title: 'SIELAY',
    googleVerification: `_ZC-ovxrZsNam95r9N9266c-hJvulE2GnROdwHkSuBU`,
    disqus: `sielay-com`,
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorJson`,
    'ExperienceJson.items.tech': `TechJson`,
  },
  plugins: [
    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-11342805-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
          // `gatsby-remark-component`,
        ],
      },
    },
    `gatsby-transformer-sharp`, // Parse all images files
    `gatsby-plugin-sharp`,
    // Parse JSON files
    `gatsby-transformer-json`,
    // This plugin takes your configuration and generates a
    // web manifest file so your website can be added to your
    // homescreen on Android.
    /* eslint-disable camelcase */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SIELAY`,
        short_name: `siealy`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#191919`,
        display: `minimal-ui`,
      },
    },
    /* eslint-enable camelcase */

    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
