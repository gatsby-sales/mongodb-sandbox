const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://mongodbsandboxmain.gatsbyjs.io/',
    gaTrackingId: null,
  },
  header: {
    logo: '',
    logoLink: '/',
    title: ``,
    githubUrl: 'https://github.com/gatsby-sales/mongodb-sandbox',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: '', link: '' }],
    frontLine: false,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'Gatsby MongoDB Sandbox',
    description: 'Documentation built with MDX.',
    ogImage: 'https://www.mongodb.com/docs/assets/favicon.ico',
    docsLocation: '',
    favicon: 'https://www.mongodb.com/docs/assets/favicon.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby MongoDB Sandbox',
      short_name: 'MongoDB+Gatsby',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: '',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
