const siteConfig = require('./site-config');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
    pathPrefix: "/Nicolas-Robotics-Portfolio",
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    }
    },  
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
    }},
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.jsx"
              }  
    },
  ],
};
