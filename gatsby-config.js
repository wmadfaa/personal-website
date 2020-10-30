module.exports = {
  siteMetadata: {
    title: `wmadfaa.dev`,
    description: `My personal website`,
    author: `Wasim Almadfaa`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'build'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: `>`,
              showLineNumbers: true,
            },
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `static`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        purgeOnly: [`src/styles/tailwind.css`],
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wasim Almadfaa Personal Website`,
        short_name: `@wmadfaa.dev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        develop: false,
        production: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
