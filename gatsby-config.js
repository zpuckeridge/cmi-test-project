module.exports = {
  siteMetadata: {
    title: `Mammoths - A Deep Dive`,
    siteUrl: `https://cmi.zacchary.me/`,
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
