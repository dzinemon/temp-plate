const path = require(`path`)

const config = require(`./src/utils/siteConfig`)


/**
* This is the place where you can tell Gatsby which plugins to use
* and set them up the way you want.
*
* Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
*
*/
module.exports = {
    pathPrefix: "/",
    siteMetadata: {
        siteUrl: process.env.SITEURL || config.siteUrl,
        url: process.env.SITEURL || config.siteUrl,
        twitterUsername: "",
        image: config.image,
    },
    flags: {
        // PRESERVE_WEBPACK_CACHE: true,
        // PRESERVE_FILE_DOWNLOAD_CACHE: true,
    },
    plugins: [
  
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `pages`),
                name: `pages`,
            },
        },
        // Setup for optimised images.
        // See https://www.gatsbyjs.org/packages/gatsby-image/
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `images`),
                name: `images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: path.join(__dirname, `static`),
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
              rule: {
                include: /assets/, // See below to configure properly
              },
            },
        },
        `gatsby-plugin-scroll-reveal`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-force-trailing-slashes`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-anchor-links`
    ],
}
