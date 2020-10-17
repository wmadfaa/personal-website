module.exports = {
    siteMetadata: {
        title: `wmadfaa.dev`,
        description: `My personal website`,
        author: `Wasim Almadfaa`,
    },
    plugins: [
        `gatsby-plugin-postcss`,
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
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-typescript',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/assets/images`
            }
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `content`,
              path: `${__dirname}/src/data`
            }
          },
          {
            resolve: 'gatsby-transformer-remark',
            options: {
              plugins: [
                {
                  resolve: 'gatsby-remark-images',
                  options: {
                    maxWidth: 768,
                    linkImagesToOriginal: false
                  }
                }
              ]
            }
          },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Wasim Almadfaa Personal Website`,
                short_name: `@wmadfaa.dev`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
