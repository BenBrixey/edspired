// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Edspired Tutoring`,
    siteUrl: `https://www.edspired.co.uk`,
    description: `Tutoring for all ages and abilities - School holiday clubs`,
    facebook: 'https://www.facebook.com/EdspiredTutoring',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '8e4fk9fh',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: [
          'Balance',
          'BalanceTransaction',
          'Product',
          'ApplicationFee',
          'Sku',
          'Subscription',
        ],
        secretKey: 'stripe_secret_key_here',
        downloadFiles: true,
      },
    },
  ],
};
